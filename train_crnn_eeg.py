# train_crnn_eeg.py
import os
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
from torchvision import transforms
from PIL import Image
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, classification_report
from tqdm import tqdm
import matplotlib.pyplot as plt
import seaborn as sns

# ===================== Config / Constants =====================
DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
IMG_SIZE = (64, 64)               # Input image size for model
class_names = ['no', 'yes']       # EEG classes

# ===================== Dataset =====================
class EEGDataset(Dataset):
    def __init__(self, image_paths, labels, transform=None):
        self.image_paths = image_paths
        self.labels = labels
        self.transform = transform

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
        img_path = self.image_paths[idx]
        label = self.labels[idx]
        image = Image.open(img_path).convert('L')  # grayscale
        if self.transform:
            image = self.transform(image)
        return image, label

# ===================== CRNN Model =====================
class CRNN(nn.Module):
    def __init__(self, input_channels=1, rnn_input_size=128, rnn_hidden_size=256, num_classes=2, img_size=IMG_SIZE):
        super(CRNN, self).__init__()

        self.cnn = nn.Sequential(
            nn.Conv2d(input_channels, 32, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Flatten()
        )

        # Compute flattened feature size
        with torch.no_grad():
            dummy = torch.zeros(1, input_channels, *img_size)
            n_features = self.cnn(dummy).shape[1]

        self.fc = nn.Linear(n_features, rnn_input_size)
        self.rnn = nn.LSTM(input_size=rnn_input_size, hidden_size=rnn_hidden_size, batch_first=True)
        self.classifier = nn.Linear(rnn_hidden_size, num_classes)

    def forward(self, x):
        x = self.cnn(x)
        x = self.fc(x)
        x = x.unsqueeze(1)
        out, _ = self.rnn(x)
        out = out[:, -1, :]
        out = self.classifier(out)
        return out

# ===================== Helper Functions =====================
def load_data(dataset_path):
    image_paths = []
    labels = []
    for label_name in class_names:
        class_dir = os.path.join(dataset_path, label_name)
        if not os.path.isdir(class_dir):
            raise FileNotFoundError(f"Expected folder not found: {class_dir}")
        for fname in os.listdir(class_dir):
            if fname.lower().endswith(('.png', '.jpg', '.jpeg')):
                image_paths.append(os.path.join(class_dir, fname))
                labels.append(class_names.index(label_name))
    if len(image_paths) == 0:
        raise RuntimeError("No images found. Check dataset_path and file extensions.")
    return image_paths, labels

def train_one_epoch(model, loader, optimizer, criterion, device):
    model.train()
    running_loss = 0.0
    correct = 0
    total = 0
    for imgs, labels in tqdm(loader, desc="Training", leave=False):
        imgs, labels = imgs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(imgs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        running_loss += loss.item() * imgs.size(0)
        _, predicted = outputs.max(1)
        correct += predicted.eq(labels).sum().item()
        total += labels.size(0)
    return running_loss / total, correct / total

def validate(model, loader, criterion, device):
    model.eval()
    running_loss = 0.0
    correct = 0
    total = 0
    with torch.no_grad():
        for imgs, labels in loader:
            imgs, labels = imgs.to(device), labels.to(device)
            outputs = model(imgs)
            loss = criterion(outputs, labels)
            running_loss += loss.item() * imgs.size(0)
            _, predicted = outputs.max(1)
            correct += predicted.eq(labels).sum().item()
            total += labels.size(0)
    return running_loss / total, correct / total

# ===================== Training Script =====================
if __name__ == "__main__":
    # <-- Put your dataset folder path here -->
    dataset_path = r"C:\Users\aadit\Downloads\image_datasets_collected"

    # Hyperparameters
    BATCH_SIZE = 16
    LR = 1e-3
    EPOCHS = 10
    MODEL_SAVE_PATH = "crnn_eeg.pth"
    CM_SAVE_PATH = "confusion_matrix.png"

    # Load dataset
    image_paths, labels = load_data(dataset_path)
    train_paths, val_paths, train_labels, val_labels = train_test_split(
        image_paths, labels, test_size=0.15, stratify=labels, random_state=42
    )

    transform = transforms.Compose([
        transforms.Resize(IMG_SIZE),
        transforms.ToTensor()
    ])

    train_dataset = EEGDataset(train_paths, train_labels, transform=transform)
    val_dataset = EEGDataset(val_paths, val_labels, transform=transform)
    train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=False)

    # Model, criterion, optimizer
    model = CRNN(img_size=IMG_SIZE).to(DEVICE)
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=LR)

    # Training loop
    for epoch in range(EPOCHS):
        train_loss, train_acc = train_one_epoch(model, train_loader, optimizer, criterion, DEVICE)
        val_loss, val_acc = validate(model, val_loader, criterion, DEVICE)
        print(f"Epoch {epoch+1}/{EPOCHS} | "
              f"Train Loss: {train_loss:.4f}, Train Acc: {train_acc:.4f} | "
              f"Val Loss: {val_loss:.4f}, Val Acc: {val_acc:.4f}")

    print("\nTraining finished ✅")

    # Confusion matrix and classification report
    model.eval()
    all_preds, all_labels = [], []
    with torch.no_grad():
        for imgs, labels in val_loader:
            imgs, labels = imgs.to(DEVICE), labels.to(DEVICE)
            outputs = model(imgs)
            preds = torch.argmax(outputs, dim=1)
            all_preds.extend(preds.cpu().numpy())
            all_labels.extend(labels.cpu().numpy())

    cm = confusion_matrix(all_labels, all_preds)
    print("\nClassification Report:\n")
    print(classification_report(all_labels, all_preds, target_names=class_names))

    # Plot confusion matrix
    plt.figure(figsize=(6,5))
    sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", xticklabels=class_names, yticklabels=class_names)
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    plt.title("Confusion Matrix")
    plt.tight_layout()
    plt.savefig(CM_SAVE_PATH)
    print(f"Confusion matrix saved to: {CM_SAVE_PATH}")
    plt.show()

    # Save model
    torch.save(model.state_dict(), MODEL_SAVE_PATH)
    print(f"Model saved to: {MODEL_SAVE_PATH}")

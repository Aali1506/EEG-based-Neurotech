import { QuizQuestion, Genre } from '../types/quiz';

export const quizData: Record<Genre, QuizQuestion[]> = {
  CARTOONS: [
    {
      id: 1,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q1/mickeymouse.png",
      options: ["Mickey Mouse", "SpongeBob", "Tom and Jerry", "Bugs Bunny"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 2,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q2/pikachu.png",
      options: ["Doraemon", "Pokemon", "Pikachu", "Digimon"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 3,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q3/mario.png",
      options: ["Luigi", "Sonic", "Mario", "Donkey Kong"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 4,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q4/spiderman.png",
      options: ["Batman", "Superman", "Spider-Man", "Iron Man"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 5,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q5/elsa.png",
      options: ["Barbie", "Elsa", "Cinderella", "Snow White"],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 6,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q6/donaldduck.png",
      options: ["Donald Duck", "Daffy Duck", "Tweety", "Mickey Mouse"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 7,
      question: "Identify this cartoon's name:",
      image: "/images/cartoons/q7/snoopy.png",
      options: ["Scooby-Doo", "Goofy", "Pluto", "Snoopy"],
      correctAnswer: 3,
      isAudioQuestion: false
    },
    {
      id: 8,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Shrek", "Hulk", "Grinch", "Yoda"],
      correctAnswer: 0,
      isAudioQuestion: true
    },
    {
      id: 9,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Dora", "Peppa Pig", "Hello Kitty", "Minnie Mouse"],
      correctAnswer: 1,
      isAudioQuestion: true
    },
    {
      id: 10,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Simba", "Nemo", "Dumbo", "Bambi"],
      correctAnswer: 1,
      isAudioQuestion: true
    }
  ],

  COLOR: [
    {
      id: 1,
      question: "Identify which color is this:",
      image: "images/colors/q1/red.png",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 2,
      question: "Identify which color is this:",
      image: "images/colors/q2/blue.png",
      options: ["Orange", "Purple", "Blue", "Pink"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 3,
      question: "Identify which color is this:",
      image: "images/colors/q3/yellow.png",
      options: ["Yellow", "Green", "Orange", "Brown"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 4,
      question: "Identify which color is this:",
      image: "images/colors/q4/green.png",
      options: ["Purple", "Green", "Blue", "Red"],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 5,
      question: "Identify which color is this:",
      image: "images/colors/q5/pink.png",
      options: ["Red", "Orange", "Pink", "Purple"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 6,
      question: "Identify which color is this:",
      image: "images/colors/q6/orange.png",
      options: ["Orange", "Red", "Yellow", "Brown"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 7,
      question: "Identify which color is this:",
      image: "images/colors/q7/purple.png",
      options: ["Blue", "Purple", "Pink", "Red"],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 8,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["White", "Black", "Gray", "Brown"],
      correctAnswer: 0,
      isAudioQuestion: true
    },
    {
      id: 9,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Gray", "Black", "Brown", "White"],
      correctAnswer: 1,
      isAudioQuestion: true
    },
    {
      id: 10,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Red", "Orange", "Brown", "Yellow"],
      correctAnswer: 2,
      isAudioQuestion: true
    }
  ],

  ANIMALS: [
    {
      id: 1,
      question: "Identify this animal: Dog",
      image: "",
      options: [
        { image: "/images/animals/q1/option1.png" },
        { image: "/images/animals/q1/option2.png" },
        { image: "/images/animals/q1/option3.png" },
        { image: "/images/animals/q1/option4.png" }
      ],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 2,
      question: "Identify this animal: Elephant",
      image: "",
      options: [
        { image: "/images/animals/q2/option1.png" },
        { image: "/images/animals/q2/option2.png" },
        { image: "/images/animals/q2/option3.png" },
        { image: "/images/animals/q2/option4.png" }
      ],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 3,
      question: "Identify this animal: Cat",
      image: "",
      options: [
        { image: "/images/animals/q3/option1.png" },
        { image: "/images/animals/q3/option2.png" },
        { image: "/images/animals/q3/option3.png" },
        { image: "/images/animals/q3/option4.png" }
      ],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 4,
      question: "Identify this animal: Lion",
      image: "",
      options: [
        { image: "/images/animals/q4/option1.png" },
        { image: "/images/animals/q4/option2.png" },
        { image: "/images/animals/q4/option3.png" },
        { image: "/images/animals/q4/option4.png" }
      ],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 5,
      question: "Identify this animal: Rabbit",
      image: "",
      options: [
        { image: "/images/animals/q5/option1.png" },
        { image: "/images/animals/q5/option2.png" },
        { image: "/images/animals/q5/option3.png" },
        { image: "/images/animals/q5/option4.png" }
      ],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 6,
      question: "Identify this animal: Monkey",
      image: "",
      options: [
        { image: "/images/animals/q6/option1.png" },
        { image: "/images/animals/q6/option2.png" },
        { image: "/images/animals/q6/option3.png" },
        { image: "/images/animals/q6/option4.png" }
      ],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 7,
      question: "Identify this animal: Zebra",
      image: "",
      options: [
        { image: "/images/animals/q7/option1.png" },
        { image: "/images/animals/q7/option2.png" },
        { image: "/images/animals/q7/option3.png "},
        { image: "/images/animals/q7/option4.png" }
      ],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 8,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: [
        { image: "/images/animals/q8/option1.png" },
        { image: "/images/animals/q8/option2.png" },
        { image: "/images/animals/q8/option3.png" },
        { image: "/images/animals/q8/option4.png" }
      ],
      correctAnswer: 0,
      isAudioQuestion: true
    },
    {
      id: 9,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: [
        { image: "/images/animals/q9/option1.png" },
        { image: "/images/animals/q9/option2.png" },
        { image: "/images/animals/q9/option3.png" },
        { image: "/images/animals/q9/option4.png" }
      ],
      correctAnswer: 1,
      isAudioQuestion: true
    },
    {
      id: 10,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: [
        { image: "/images/animals/q10/option1.png" },
        { image: "/images/animals/q10/option2.png" },
        { image: "/images/animals/q10/option3.png" },
        { image: "/images/animals/q10/option4.png" }
      ],
      correctAnswer: 3,
      isAudioQuestion: true
    }
  ],

  FRUITS: [
    {
      id: 1,
      question: "Identify this fruit:",
      image: "images/fruits/q1/apple.png",
      options: ["Orange", "Apple", "Peach", "Tomato"],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 2,
      question: "Identify this fruit:",
      image: "images/fruits/q2/banana.png",
      options: ["Apple", "Mango", "Banana", "Pineapple"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 3,
      question: "Identify this fruit:",
      image: "images/fruits/q3/blackberry.png",
      options: ["Blueberry", "Grape", "Blackberry", "Cherry"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 4,
      question: "Identify this fruit:",
      image: "images/fruits/q4/strawberry.png",
      options: ["Raspberry", "Strawberry", "Cherry", "Tomato"],
      correctAnswer: 1,
      isAudioQuestion: false
    },
    {
      id: 5,
      question: "Identify this fruit:",
      image: "images/fruits/q5/orange.png",
      options: ["Lemon", "Grapefruit", "Orange", "Tangerine"],
      correctAnswer: 2,
      isAudioQuestion: false
    },
    {
      id: 6,
      question: "Identify this fruit:",
      image: "images/fruits/q6/kiwi.png",
      options: ["Kiwi", "Green Apple", "Lime", "Avocado"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 7,
      question: "Identify this fruit:",
      image: "images/fruits/q7/watermelon.png",
      options: ["Watermelon", "Cantaloupe", "Papaya", "Mango"],
      correctAnswer: 0,
      isAudioQuestion: false
    },
    {
      id: 8,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Pear", "Apple", "Peach", "Plum"],
      correctAnswer: 0,
      isAudioQuestion: true
    },
    {
      id: 9,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Apple", "Cherry", "Strawberry", "Raspberry"],
      correctAnswer: 1,
      isAudioQuestion: true
    },
    {
      id: 10,
      question: "Listen to the question and answer",
      audioUrl: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",
      options: ["Peach", "Apricot", "Mango", "Papaya"],
      correctAnswer: 2,
      isAudioQuestion: true
    }
  ]
};

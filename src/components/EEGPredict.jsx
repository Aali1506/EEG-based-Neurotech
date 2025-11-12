// src/components/EEGPredict.jsx
import React, { useState } from "react";

const EEGPredict = ({ back }) => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error uploading file:", error);
      setPrediction("Error predicting EEG class.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-10"
      style={{
        background: "linear-gradient(135deg, #c2e9fb, #a1c4fd)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-7xl p-12 mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Upload EEG Image
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - File Input & Buttons */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-3/4 text-gray-700 border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm hover:shadow-md transition"
            />

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleUpload}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 shadow-md transition"
              >
                {loading ? "Predicting..." : "Upload & Predict"}
              </button>

              {back && (
                <button
                  onClick={back}
                  className="bg-gray-400 text-white px-8 py-3 rounded-xl hover:bg-gray-500 shadow-md transition"
                >
                  Go Back
                </button>
              )}
            </div>
          </div>

          {/* Right Section - Prediction Display */}
          <div className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-inner h-full">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Prediction Result
            </h3>
            {prediction ? (
              <p className="text-3xl font-bold text-blue-700">
                {prediction}
              </p>
            ) : (
              <p className="text-gray-500 text-lg italic">
                No prediction yet. Upload an image to begin.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEGPredict;

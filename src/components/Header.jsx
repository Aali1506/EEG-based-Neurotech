import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react"; // Info icon

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  const projectDescription = `
Prosopagnosia, commonly known as face blindness, is a neurological condition that impairs facial recognition abilities in children. Many cases remain undiagnosed due to subtle symptoms and limited screening tools. This paper presents an integrated early screening framework combining electroencephalography (EEG) signal analysis with a diagnosis-specific questionnaire. EEG data is recorded while participants view familiar and unfamiliar facial stimuli to capture neural responses related to face perception. Preprocessing techniques including bandpass filtering, Independent Component Analysis (ICA), and epoch segmentation extract event-related potentials (ERPs), specifically the N170 component. A hybrid Convolutional Recurrent Neural Network (CRNN) analyzes spatial and temporal features in EEG signals. Behavioral data collected through questionnaires is integrated using a decision fusion module. A web-based interface displays results and clinical reports. The system achieved a testing accuracy of 88.5%, demonstrating potential as a non-invasive screening tool for clinical and educational settings, though comprehensive field validation remains a future priority. 
  `;

  return (
    <>
      {/* Header Bar */}
      <header className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md p-6 rounded-b-2xl relative">
        <div className="flex justify-between items-center mb-3">
          {/* Left: Project Title */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            EEG-Based Cognitive Biomarker Detection System
          </h1>

          {/* Right: College Logo + Info Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowInfo(true)}
              title="About this project"
              className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition"
            >
              <Info size={22} className="text-white" />
            </button>
            <img
              src="images/college-logo.png"
              alt="SRM VALLIAMMAI ENGINEERING COLLEGE Logo"
              className="w-28 h-auto"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-8 mt-2">
          <Link
            to="/"
            className="text-lg hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/patient"
            className="text-lg hover:text-yellow-300 transition duration-300"
          >
            Patient Portal
          </Link>
          <Link
            to="/eegupload"
            className="text-lg hover:text-yellow-300 transition duration-300"
          >
            EEG Upload
          </Link>
          <Link
            to="/admin"
            className="text-lg hover:text-yellow-300 transition duration-300"
          >
            Admin
          </Link>
        </nav>
      </header>

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 mx-4 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About This Project
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">
              {projectDescription}
            </p>
            <div className="text-center">
              <button
                onClick={() => setShowInfo(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { GenreSelection } from './GenreSelection';
import { Quiz } from './Quiz';
import { Genre } from '../types/quiz';
import { calculatePrediction } from '../utils/prediction';
import { LogOut } from 'lucide-react';

export const PatientPortal: React.FC = () => {
  const { patient, loginAsPatient, logout, addQuizResult } = useAuth();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientID, setPatientID] = useState('');

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handleQuizComplete = (score: number, answers: boolean[], timeTaken: number) => {
    if (!patient) return;

    const prediction = calculatePrediction(score, answers, timeTaken, patient.name);

    addQuizResult({
      patientName: patient.name,
      patientAge: patient.age,
      genre: selectedGenre!,
      score,
      totalQuestions: answers.length,
      timeTaken,
      correctAnswers: answers,
      prediction,
      timestamp: new Date(),
      patientID: patient.id,
    });

    setShowCompletion(true);
  };

  const handleGoBack = () => setSelectedGenre(null);
  const handlePlayAgain = () => {
    setShowCompletion(false);
    setSelectedGenre(null);
  };

  const containerStyle = {
    background: 'linear-gradient(135deg, #c2e9fb, #a1c4fd)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };

  // 🩺 Patient login form
  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={containerStyle}>
        <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Patient Login</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Enter your Age"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Enter your Patient ID"
              value={patientID}
              onChange={(e) => setPatientID(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={() => {
                if (!patientName || !patientAge || !patientID) {
                  alert('Please fill all fields');
                  return;
                }
                loginAsPatient({
                  name: patientName,
                  age: Number(patientAge),
                  id: patientID,
                });
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🧠 Quiz completed
  if (showCompletion) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={containerStyle}>
        <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center backdrop-blur-md">
          <div className="mb-8">
            <div className="w-28 h-28 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-5">
              <span className="text-6xl">✓</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for completing the quiz, {patient?.name}!
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handlePlayAgain}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Play Another Quiz
            </button>

            <button
              onClick={logout}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🎯 Main genre selection or quiz view
  if (selectedGenre) {
    return <Quiz genre={selectedGenre} onComplete={handleQuizComplete} onGoBack={handleGoBack} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={containerStyle}>
      <div className="w-full max-w-5xl bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 backdrop-blur-md">
        <GenreSelection onGenreSelect={handleGenreSelect} />
      </div>
    </div>
  );
};

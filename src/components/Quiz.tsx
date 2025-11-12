import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { Genre, QuizQuestion } from '../types/quiz';
import { quizData } from '../data/quizData';

interface QuizProps {
  genre: Genre;
  onComplete: (score: number, answers: boolean[], timeTaken: number) => void;
  onGoBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ genre, onComplete, onGoBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [startTime] = useState(Date.now());
  const [showGoBack, setShowGoBack] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = quizData[genre];

  useEffect(() => {
    if (currentQuestion > 0) {
      setShowGoBack(false);
    }
  }, [currentQuestion]);

  const handleAnswer = (selectedIndex: number) => {
    if (isTransitioning) return;

    const isCorrect = selectedIndex === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    setIsTransitioning(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        const timeTaken = Math.floor((Date.now() - startTime) / 1000);
        const score = newAnswers.filter(a => a).length;
        onComplete(score, newAnswers, timeTaken);
      }
    }, 500);
  };

  const playAudio = () => {
    const audio = new Audio(questions[currentQuestion].audioUrl);
    audio.play();
  };

  const question = questions[currentQuestion];
  const isImageOptions = question.options.length > 0 && typeof question.options[0] === 'object';

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #c2e9fb, #a1c4fd)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 backdrop-blur-md relative">
        {showGoBack && currentQuestion === 0 && (
          <button
            onClick={onGoBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        )}

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{genre}</h3>
            <span className="text-lg font-semibold text-gray-600">
              Question {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {question.question}
          </h2>

          {question.isAudioQuestion && (
            <div className="flex justify-center mb-6">
              <button
                onClick={playAudio}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Volume2 size={24} />
                Play Audio Question
              </button>
            </div>
          )}

          {!question.isAudioQuestion && question.image && (
            <div className="flex justify-center mb-6">
              <img
                src={question.image}
                alt="Question"
                className="max-w-md w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>

        <div className={`grid ${isImageOptions ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
          {question.options.map((option, index) => {
            if (isImageOptions) {
              const opt = option as { text: string; image: string };
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isTransitioning}
                  className="bg-white border-4 border-gray-200 hover:border-blue-400 rounded-2xl p-4 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img
                    src={opt.image}
                    alt={opt.text}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800">{opt.text}</p>
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isTransitioning}
                  className="bg-white border-4 border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-2xl p-6 text-xl font-semibold text-gray-800 transition-all duration-300 transform hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {option as string}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

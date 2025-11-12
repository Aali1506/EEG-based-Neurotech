import React, { useState } from 'react';
import { Palette, Sparkles, Cat, Apple } from 'lucide-react';
import { Genre } from '../types/quiz';

interface GenreSelectionProps {
  onGenreSelect: (genre: Genre) => void;
}

export const GenreSelection: React.FC<GenreSelectionProps> = ({ onGenreSelect }) => {
  const [showReady, setShowReady] = useState(false);

  const genres = [
    { name: 'CARTOONS' as Genre, icon: Sparkles, color: 'from-pink-400 to-purple-500', borderColor: 'border-purple-300' },
    { name: 'COLOR' as Genre, icon: Palette, color: 'from-orange-400 to-red-500', borderColor: 'border-red-300' },
    { name: 'ANIMALS' as Genre, icon: Cat, color: 'from-green-400 to-teal-500', borderColor: 'border-teal-300' },
    { name: 'FRUITS' as Genre, icon: Apple, color: 'from-yellow-400 to-orange-500', borderColor: 'border-orange-300' }
  ];

  if (!showReady) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 text-gray-800">
            Welcome to the Quiz!
          </h1>
          <button
            onClick={() => setShowReady(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-2xl py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            READY TO PLAY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          CHOOSE YOUR GENRE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <button
                key={genre.name}
                onClick={() => onGenreSelect(genre.name)}
                className={`bg-white hover:shadow-2xl border-4 ${genre.borderColor} rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${genre.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {genre.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

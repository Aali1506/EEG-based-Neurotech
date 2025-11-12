// src/components/HomePage.tsx
import React from "react";

const HomePage: React.FC = () => {
  const SoftWaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="wave-layer wave1" />
      <div className="wave-layer wave2" />
      <div className="wave-layer wave3" />
      <style>
        {`
          .wave-layer {
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            background: radial-gradient(circle at 30% 30%, #b5e2ff, #c4b5fd, #ffb6c1);
            opacity: 0.75;
            filter: blur(100px);
            animation: waveMotion 10s ease-in-out infinite alternate;
          }

          .wave1 {
            mix-blend-mode: screen;
            animation-delay: 0s;
          }

          .wave2 {
            background: radial-gradient(circle at 70% 70%, #a0e7e5, #b4c6ff, #ffbdf0);
            opacity: 0.8;
            animation-delay: 3s;
          }

          .wave3 {
            background: radial-gradient(circle at 50% 50%, #ffe6a7, #ffc8dd, #b5e48c);
            opacity: 0.7;
            animation-delay: 6s;
          }

          @keyframes waveMotion {
            0% {
              transform: translate(0%, 0%) scale(1);
            }
            50% {
              transform: translate(15%, -10%) scale(1.1) rotate(5deg);
            }
            100% {
              transform: translate(-10%, 15%) scale(1.05) rotate(-5deg);
            }
          }
        `}
      </style>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative">
      <SoftWaveBackground />

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center bg-white bg-opacity-80 rounded-3xl shadow-2xl p-12 backdrop-blur-md">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            WELCOME TO COGNITIVE ASSESSMENT TEST
          </h1>
          <p className="text-lg text-gray-600">
            Analyze EEG patterns with precision and intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

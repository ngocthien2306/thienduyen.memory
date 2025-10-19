import React, { useState } from 'react';

const WelcomeScreen = ({ onEnter }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 800); // Wait for animation to complete
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 transition-opacity duration-1000 ${
        isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-8">
        {/* Hearts decoration */}
        <div className="mb-8 text-6xl animate-heartbeat">
          💕
        </div>

        {/* Title */}
        <h1 className="font-dancing text-7xl text-gradient-pink font-bold mb-4 animate-fadeIn">
          Thiện & Duyên
        </h1>

        <p className="text-2xl text-gray-700 mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Our Love Story & Memories
        </p>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 animate-fadeIn"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="flex items-center space-x-3">
            <span>✨</span>
            <span>Enter Our World</span>
            <span>✨</span>
          </span>

          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
        </button>

        {/* Music notice */}
        <p className="mt-8 text-sm text-gray-600 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          🎵 Click to enter & enjoy romantic music
        </p>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-4xl text-pink-300/40 animate-float">💖</div>
          <div className="absolute top-1/3 right-1/4 text-3xl text-purple-300/40 animate-float" style={{ animationDelay: '1s' }}>💝</div>
          <div className="absolute bottom-1/3 left-1/3 text-5xl text-red-300/40 animate-float" style={{ animationDelay: '2s' }}>💗</div>
          <div className="absolute bottom-1/4 right-1/3 text-3xl text-pink-300/40 animate-float" style={{ animationDelay: '3s' }}>💕</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

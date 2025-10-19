import React, { useState, useEffect } from 'react';

const MemorySlideshow = ({ memoryDates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [effect, setEffect] = useState('fade');
  const [speed, setSpeed] = useState(3000); // milliseconds

  const effects = [
    { id: 'fade', name: 'Fade', icon: '✨' },
    { id: 'slide', name: 'Slide', icon: '➡️' },
    { id: 'zoom', name: 'Zoom', icon: '🔍' },
    { id: 'kenburns', name: 'Ken Burns', icon: '🎬' }
  ];

  const speeds = [
    { value: 2000, label: 'Fast (2s)' },
    { value: 3000, label: 'Normal (3s)' },
    { value: 5000, label: 'Slow (5s)' }
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memoryDates.length);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, memoryDates.length]);

  const currentMemory = memoryDates[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % memoryDates.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + memoryDates.length) % memoryDates.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Effect classes
  const getEffectClass = () => {
    switch (effect) {
      case 'fade':
        return 'animate-fadeIn';
      case 'slide':
        return 'animate-slideIn';
      case 'zoom':
        return 'animate-zoomIn';
      case 'kenburns':
        return 'animate-kenBurns';
      default:
        return 'animate-fadeIn';
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
      <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-6">
        Memory Slideshow
      </h2>

      {/* Slideshow Container */}
      <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mb-6">
        {/* Image */}
        <img
          key={currentIndex}
          src={`${process.env.PUBLIC_URL}/images/${currentMemory.folder}/1.jpg`}
          alt={currentMemory.title}
          className={`w-full h-full object-cover ${getEffectClass()}`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center justify-center mb-3">
            <span className="text-5xl">{currentMemory.icon}</span>
          </div>
          <h3 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">
            {currentMemory.title}
          </h3>
          <p className="text-xl text-center opacity-90 drop-shadow-lg">
            {currentMemory.date}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        >
          <span className="text-white text-2xl">←</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        >
          <span className="text-white text-2xl">→</span>
        </button>

        {/* Progress Indicator */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          {currentIndex + 1} / {memoryDates.length}
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Play/Pause Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ${
              isPlaying
                ? 'bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600'
                : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600'
            }`}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play Slideshow'}
          </button>
        </div>

        {/* Effect Selector */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-center">
            Transition Effect
          </label>
          <div className="flex justify-center gap-2 flex-wrap">
            {effects.map((eff) => (
              <button
                key={eff.id}
                onClick={() => setEffect(eff.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  effect === eff.id
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {eff.icon} {eff.name}
              </button>
            ))}
          </div>
        </div>

        {/* Speed Selector */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-center">
            Slideshow Speed
          </label>
          <div className="flex justify-center gap-2 flex-wrap">
            {speeds.map((spd) => (
              <button
                key={spd.value}
                onClick={() => setSpeed(spd.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  speed === spd.value
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {spd.label}
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="pt-4">
          <label className="block text-gray-700 font-semibold mb-3 text-center">
            Quick Navigation
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide">
            {memoryDates.map((memory, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative ${
                  currentIndex === index ? 'ring-4 ring-pink-500 scale-110' : ''
                } transition-all duration-300 rounded-lg overflow-hidden`}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/${memory.folder}/1.jpg`}
                  alt={memory.title}
                  className="w-20 h-20 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23ddd" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="30"%3E📷%3C/text%3E%3C/svg%3E';
                  }}
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-pink-500/30 flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorySlideshow;

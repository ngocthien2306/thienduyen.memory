import React, { useState, useEffect, useRef, useCallback } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef(null);

  // Playlist - Local music files from Bensound (Free with attribution)
  const playlist = [
    {
      title: "Love",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/love.mp3`
    },
    {
      title: "Romantic",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/romantic.mp3`
    },
    {
      title: "Tenderness",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/tenderness.mp3`
    },
    {
      title: "Sweet",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/sweet.mp3`
    },
    {
      title: "Happiness",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/happiness.mp3`
    },
    {
      title: "Dreams",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/dreams.mp3`
    },
    {
      title: "Memories",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/memories.mp3`
    },
    {
      title: "Inspire",
      artist: "Bensound",
      url: `${process.env.PUBLIC_URL}/music/inspire.mp3`
    }
  ];

  // Auto-play when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      playMusic();
    }, 1000); // Wait 1 second before auto-playing

    return () => clearTimeout(timer);
  }, []);

  // Update audio volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Functions with useCallback to prevent unnecessary re-renders
  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  const prevTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  // Handle track end - play next
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        nextTrack();
      };
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [nextTrack]);

  const playMusic = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Auto-play blocked by browser:', error);
      // Show notification to user
    }
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Playback error:', error);
        }
      }
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  if (!showPlayer) {
    return (
      <button
        onClick={() => setShowPlayer(true)}
        className="fixed bottom-24 right-8 z-40 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        title="Show Music Player"
      >
        🎵
      </button>
    );
  }

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={playlist[currentTrack].url}
        preload="auto"
      />

      {/* Floating Music Player */}
      <div className="fixed bottom-24 right-8 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 w-80 border border-pink-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎵</span>
            <span className="font-semibold text-gray-800">Love Songs</span>
          </div>
          <button
            onClick={() => setShowPlayer(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Track Info */}
        <div className="mb-4 text-center">
          <div className="text-sm font-semibold text-gray-800 mb-1 truncate">
            {playlist[currentTrack].title}
          </div>
          <div className="text-xs text-gray-500 truncate">
            {playlist[currentTrack].artist}
          </div>
          <div className="text-xs text-pink-500 mt-1">
            Track {currentTrack + 1} / {playlist.length}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={prevTrack}
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            ⏮️
          </button>

          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-110"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>

          <button
            onClick={nextTrack}
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            ⏭️
          </button>
        </div>

        {/* Volume Control */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>🔊 Volume</span>
            <span>{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
        </div>

        {/* Playlist Indicator */}
        <div className="mt-3 flex space-x-1">
          {playlist.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTrack(index);
                setIsPlaying(true);
              }}
              className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                index === currentTrack
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Notice */}
        {!isPlaying && (
          <div className="mt-3 text-xs text-center text-gray-500">
            Click ▶️ to start music
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;

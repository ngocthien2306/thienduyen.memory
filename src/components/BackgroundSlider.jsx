import React, { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    `${process.env.PUBLIC_URL}/assets/background/1.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/2.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/3.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/4.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="fixed inset-0 z-0">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      ))}
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-pink-50/40 to-purple-50/40" />
    </div>
  );
};

export default BackgroundSlider;
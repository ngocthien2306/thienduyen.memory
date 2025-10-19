import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Img, spring, useVideoConfig } from 'remotion';

export const MemorySlide = ({ image, framesPerImage }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in/out animation
  const fadeInFrames = 15;
  const fadeOutFrames = 15;
  const opacity = interpolate(
    frame,
    [0, fadeInFrames, framesPerImage - fadeOutFrames, framesPerImage],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Ken Burns effect - zoom in slowly
  const scale = interpolate(
    frame,
    [0, framesPerImage],
    [1, 1.15],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Text animation - slide up from bottom
  const textY = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 100,
    },
  });

  const textTranslateY = interpolate(textY, [0, 1], [100, 0]);
  const textOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      {/* Image with Ken Burns effect */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
      >
        <Img
          src={image.src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${scale})`,
          }}
        />
      </AbsoluteFill>

      {/* Overlay gradient for better text visibility */}
      <AbsoluteFill
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)',
        }}
      />

      {/* Text Overlay */}
      <AbsoluteFill
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 80,
        }}
      >
        <div
          style={{
            transform: `translateY(${textTranslateY}px)`,
            opacity: textOpacity,
            textAlign: 'center',
            color: 'white',
          }}
        >
          {/* Icon */}
          <div
            style={{
              fontSize: 80,
              marginBottom: 20,
            }}
          >
            {image.icon}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              marginBottom: 15,
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              maxWidth: '80%',
              margin: '0 auto 15px',
            }}
          >
            {image.title}
          </div>

          {/* Date */}
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              letterSpacing: 2,
            }}
          >
            {image.date}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

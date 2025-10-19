import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Sequence } from 'remotion';
import { MemorySlide } from '../components/MemorySlide';

export const MemoryVideo = ({ memoryDates }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Build array of first image from each folder only
  const allImages = memoryDates.map(memory => ({
    src: `../public/images/${memory.folder}/1.jpg`,
    date: memory.date,
    title: memory.title,
    icon: memory.icon,
  }));

  const DURATION_PER_IMAGE = 3.5; // seconds
  const framesPerImage = Math.floor(DURATION_PER_IMAGE * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: '#fff5f7' }}>
      {/* Title Intro */}
      <Sequence from={0} durationInFrames={fps * 3}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              opacity: interpolate(frame, [0, 30, 60, 90], [0, 1, 1, 0]),
            }}
          >
            💕 Our Memory Journey 💕
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Memory Slides */}
      {allImages.map((image, index) => {
        const startFrame = fps * 3 + index * framesPerImage; // Start after intro
        return (
          <Sequence
            key={index}
            from={startFrame}
            durationInFrames={framesPerImage}
          >
            <MemorySlide
              image={image}
              framesPerImage={framesPerImage}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

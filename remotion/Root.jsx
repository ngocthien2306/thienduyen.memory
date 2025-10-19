import React from 'react';
import { Composition } from 'remotion';
import { MemoryVideo } from './compositions/MemoryVideo';
import { memoryDates } from './data/memoryData';

// Calculate total duration (3.5 seconds per folder + 3s intro)
const calculateDuration = () => {
  const totalFolders = memoryDates.length;
  return (totalFolders * 3.5 + 3) * 30; // 3.5 seconds per image + 3s intro at 30fps
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MemoryVideo"
        component={MemoryVideo}
        durationInFrames={calculateDuration()}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          memoryDates: memoryDates,
        }}
      />
    </>
  );
};

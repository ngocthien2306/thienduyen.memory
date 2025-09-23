import React, { useState } from 'react';

const BuildInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const buildInfo = {
    buildTime: process.env.REACT_APP_BUILD_TIME || 'Development',
    commitHash: process.env.REACT_APP_COMMIT_HASH || 'local',
    branch: process.env.REACT_APP_BRANCH || 'local',
    buildNumber: process.env.REACT_APP_BUILD_NUMBER || '0',
    version: process.env.REACT_APP_VERSION || '0.1.0'
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="bg-black/20 backdrop-blur-sm text-white/70 text-xs px-2 py-1 rounded-lg hover:bg-black/30 transition-all"
        title="Build Information"
      >
        v{buildInfo.version} #{buildInfo.buildNumber}
      </button>
      
      {showInfo && (
        <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm text-white text-xs p-3 rounded-lg shadow-xl min-w-[200px]">
          <div className="space-y-1">
            <div><span className="opacity-70">Version:</span> {buildInfo.version}</div>
            <div><span className="opacity-70">Build:</span> #{buildInfo.buildNumber}</div>
            <div><span className="opacity-70">Commit:</span> {buildInfo.commitHash}</div>
            <div><span className="opacity-70">Branch:</span> {buildInfo.branch}</div>
            <div><span className="opacity-70">Built:</span> {buildInfo.buildTime.replace('T', ' ').replace('Z', ' UTC')}</div>
            <div><span className="opacity-70">Environment:</span> {process.env.NODE_ENV}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildInfo;
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BackgroundSlider from './components/BackgroundSlider';
import BuildInfo from './components/BuildInfo';
import Home from './pages/Home';
import MemoryGallery from './pages/MemoryGallery';
import DateCards from './pages/DateCards';
import Profiles from './pages/Profiles';
import MemoryCollection from './pages/MemoryCollection';
import MiniGames from './pages/MiniGames';
import LoveDayCounterPage from './pages/LoveDayCounterPage';

function App() {
  useEffect(() => {
    // Build information for debugging and version tracking
    const buildInfo = {
      buildTime: process.env.REACT_APP_BUILD_TIME || 'Development',
      commitHash: process.env.REACT_APP_COMMIT_HASH || 'local',
      branch: process.env.REACT_APP_BRANCH || 'local',
      buildNumber: process.env.REACT_APP_BUILD_NUMBER || '0',
      version: process.env.REACT_APP_VERSION || '0.1.0'
    };

    console.group('🚀 Thiện & Duyên Memory Website');
    console.log('📅 Build Time:', buildInfo.buildTime);
    console.log('🔍 Commit Hash:', buildInfo.commitHash);
    console.log('🌿 Branch:', buildInfo.branch);
    console.log('🔢 Build Number:', buildInfo.buildNumber);
    console.log('📦 Version:', buildInfo.version);
    console.log('🌐 Environment:', process.env.NODE_ENV);
    console.log('⏰ Current Time:', new Date().toISOString());
    console.groupEnd();

    // Add build info to window for debugging
    window.buildInfo = buildInfo;
  }, []);
  return (
    <Router>
      <div className="min-h-screen relative">
        <BackgroundSlider />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<MemoryGallery />} />
              <Route path="/date-cards" element={<DateCards />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/memory-collection" element={<MemoryCollection />} />
              <Route path="/mini-games" element={<MiniGames />} />
              <Route path="/love-counter" element={<LoveDayCounterPage />} />
            </Routes>
          </main>
        </div>
        <BuildInfo />
      </div>
    </Router>
  );
}

export default App;
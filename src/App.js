import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BackgroundSlider from './components/BackgroundSlider';
import Home from './pages/Home';
import MemoryGallery from './pages/MemoryGallery';
import DateCards from './pages/DateCards';
import Profiles from './pages/Profiles';
import MemoryCollection from './pages/MemoryCollection';
import MiniGames from './pages/MiniGames';
import LoveDayCounterPage from './pages/LoveDayCounterPage';

function App() {
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
      </div>
    </Router>
  );
}

export default App;
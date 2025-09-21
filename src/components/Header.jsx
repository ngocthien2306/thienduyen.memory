import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', emoji: '🏠' },
    { path: '/gallery', label: 'Memory Gallery', emoji: '📸' },
    { path: '/date-cards', label: 'Date Cards', emoji: '💌' },
    { path: '/profiles', label: 'About Us', emoji: '👫' },
    { path: '/memory-collection', label: 'Special Moments', emoji: '💎' },
    { path: '/mini-games', label: 'Fun & Games', emoji: '🎮' },
    { path: '/love-counter', label: 'Love Counter', emoji: '⏰' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-40 border-b border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl animate-heartbeat">💕</div>
            <span className="font-dancing text-2xl text-gradient-pink font-bold">
              Our Love Story
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-colors"
          >
            <svg
              className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-3 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
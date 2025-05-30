import React from 'react';
import { Wallpaper as SoccerBall, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SoccerBall className="h-8 w-8 text-pitch-600" />
          <h1 className="text-2xl font-bold text-pitch-600 dark:text-pitch-400">Soccer Match Tracker</h1>
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pitch-500"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
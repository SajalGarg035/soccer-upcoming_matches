import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Soccer Match Tracker. Data provided by 
              <a 
                href="https://www.football-data.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pitch-600 dark:text-pitch-400 hover:underline ml-1"
              >
                football-data.org
              </a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
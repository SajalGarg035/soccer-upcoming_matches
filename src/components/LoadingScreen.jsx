import React from 'react';
import { Wallpaper as SoccerBall } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-bounce-slow mb-4">
        <SoccerBall className="h-16 w-16 text-pitch-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">Loading matches...</h3>
      <p className="text-gray-500 dark:text-gray-400">Fetching the latest fixtures</p>
    </div>
  );
};

export default LoadingScreen;
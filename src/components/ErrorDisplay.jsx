import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useMatches } from '../contexts/MatchesContext';

const ErrorDisplay = ({ message }) => {
  const { refetchMatches } = useMatches();
  
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 flex flex-col items-center text-center">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-2">Oops! Something went wrong</h3>
      <p className="text-red-600 dark:text-red-400 mb-6">{message}</p>
      <button
        onClick={() => refetchMatches()}
        className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorDisplay;
import React from 'react';
import { useMatches } from '../contexts/MatchesContext';
import { Trophy } from 'lucide-react';

const LeagueFilter = () => {
  const { competitions, selectedCompetition, setSelectedCompetition } = useMatches();
  
  const handleChange = (e) => {
    setSelectedCompetition(e.target.value);
  };
  
  return (
    <div className="mb-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Trophy className="h-6 w-6 text-pitch-600" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Upcoming Matches
          </h2>
        </div>
        
        <div className="w-full md:w-auto">
          <label htmlFor="competition-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select League
          </label>
          <select
            id="competition-select"
            value={selectedCompetition}
            onChange={handleChange}
            className="w-full md:w-64 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pitch-500 focus:border-pitch-500"
          >
            {competitions.map((competition) => (
              <option key={competition.id} value={competition.code}>
                {competition.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LeagueFilter;
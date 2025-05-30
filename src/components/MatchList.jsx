import React from 'react';
import MatchCard from './MatchCard';
import { useMatches } from '../contexts/MatchesContext';
import { format, parseISO } from 'date-fns';

const MatchList = () => {
  const { matches } = useMatches();
  
  const matchesByDate = {};
  
  matches.forEach(match => {
    const matchDate = format(parseISO(match.utcDate), 'yyyy-MM-dd');
    if (!matchesByDate[matchDate]) {
      matchesByDate[matchDate] = [];
    }
    matchesByDate[matchDate].push(match);
  });
  
  const sortedDates = Object.keys(matchesByDate).sort();
  
  if (matches.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600 dark:text-gray-400">No upcoming matches found for this competition.</p>
      </div>
    );
  }
  
  return (
    <div>
      {sortedDates.map((date, index) => (
        <div key={date} className="mb-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchesByDate[date].map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
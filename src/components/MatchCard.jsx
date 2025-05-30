import React from 'react';
import { format, parseISO, formatDistanceToNow } from 'date-fns';
import { Clock, CalendarClock } from 'lucide-react';

const MatchCard = ({ match }) => {
  const matchDate = parseISO(match.utcDate);
  const formattedTime = format(matchDate, 'h:mm a');
  const timeUntilMatch = formatDistanceToNow(matchDate, { addSuffix: true });
  
  return (
    <div className="card match-card p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-medium px-2 py-1 bg-pitch-100 dark:bg-pitch-900 text-pitch-800 dark:text-pitch-100 rounded-full">
          {match.competition.name}
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Clock className="h-3 w-3 mr-1" />
          {formattedTime}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="w-2/5 flex flex-col items-center text-center">
          <div className="w-12 h-12 relative mb-2">
            <img 
              src={match.homeTeam.crest} 
              alt={`${match.homeTeam.name} crest`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40?text=Team';
              }}
            />
          </div>
          <p className="font-semibold text-sm md:text-base text-team-home-500">{match.homeTeam.shortName || match.homeTeam.name}</p>
        </div>
        
        <div className="w-1/5 flex flex-col items-center">
          <p className="text-xl font-bold mb-1">vs</p>
          <div className="text-xs text-gray-500 dark:text-gray-400">Matchday {match.matchday}</div>
        </div>
        
        <div className="w-2/5 flex flex-col items-center text-center">
          <div className="w-12 h-12 relative mb-2">
            <img 
              src={match.awayTeam.crest} 
              alt={`${match.awayTeam.name} crest`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40?text=Team';
              }}
            />
          </div>
          <p className="font-semibold text-sm md:text-base text-team-away-500">{match.awayTeam.shortName || match.awayTeam.name}</p>
        </div>
      </div>
      
      <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">
        <CalendarClock className="h-3 w-3 mr-1" />
        <span>{timeUntilMatch}</span>
      </div>
    </div>
  );
};

export default MatchCard;
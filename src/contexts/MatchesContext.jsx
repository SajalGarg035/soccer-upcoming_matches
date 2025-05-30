import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MatchesContext = createContext(undefined);
const API_URL = 'https://soccer-upcoming-matches.onrender.com/api';

export const MatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState('PL');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCompetitions = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/competitions`);
        setCompetitions(data.competitions);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch competitions');
      }
    };

    getCompetitions();
  }, []);

  useEffect(() => {
    const getMatches = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(`${API_URL}/matches`, {
          params: { league: selectedCompetition }
        });
        setMatches(data.matches);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch matches');
      } finally {
        setIsLoading(false);
      }
    };

    getMatches();
  }, [selectedCompetition]);

  const refetchMatches = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get(`${API_URL}/matches`, {
        params: { league: selectedCompetition }
      });
      setMatches(data.matches);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch matches');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MatchesContext.Provider
      value={{
        matches,
        competitions,
        selectedCompetition,
        setSelectedCompetition,
        isLoading,
        error,
        refetchMatches
      }}
    >
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatches = () => {
  const context = useContext(MatchesContext);
  
  if (context === undefined) {
    throw new Error('useMatches must be used within a MatchesProvider');
  }
  
  return context;
};
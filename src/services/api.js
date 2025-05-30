import axios from 'axios';

const API_BASE_URL = 'https://api.football-data.org/v4';
const API_KEY = 'c0ca62c723074f799f7ed61bd08292e5';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Auth-Token': API_KEY
  }
});

export const fetchMatches = async (league = 'PL', days = 30) => {
  try {
    const response = await api.get(`/competitions/${league}/matches`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch matches');
  }
};

export const fetchCompetitions = async () => {
  try {
    const response = await api.get('/competitions');
    const availableCompetitions = ['WC', 'CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'EC', 'SA', 'PL'];
    const filteredCompetitions = response.data.competitions.filter(
      comp => availableCompetitions.includes(comp.code)
    );
    return { competitions: filteredCompetitions };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch competitions');
  }
};

export const fetchTeam = async (teamId) => {
  try {
    const response = await api.get(`/teams/${teamId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch team details');
  }
};

export const fetchStandings = async (competitionId) => {
  try {
    const response = await api.get(`/competitions/${competitionId}/standings`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch standings');
  }
};

export const fetchTopScorers = async (competitionId) => {
  try {
    const response = await api.get(`/competitions/${competitionId}/scorers`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch top scorers');
  }
};
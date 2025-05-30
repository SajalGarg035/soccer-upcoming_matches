import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.FOOTBALL_API_KEY || 'c0ca62c723074f799f7ed61bd08292e5';
const API = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: { 'X-Auth-Token': API_KEY }
});

app.use(cors(), express.json());

app.get('/api/matches', async (req, res) => {
  try {
    const { league = 'PL', days = 7, matchday, team, status = 'SCHEDULED' } = req.query;
    let url = '/matches';
    const params = {};

    if (league !== 'ALL') url = `/competitions/${league}/matches`;
    if (team) url = `/teams/${team}/matches`;
    if (matchday) params.matchday = matchday;
    if (team || !matchday) params.status = status;

    if (!matchday && !team) {
      const today = new Date();
      const to = new Date(today);
      to.setDate(today.getDate() + +days);
      Object.assign(params, {
        dateFrom: today.toISOString().slice(0, 10),
        dateTo: to.toISOString().slice(0, 10)
      });
    }

    const { data } = await API.get(url, { params });
    res.json(data);
  } catch (err) {
    console.error('Match fetch error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch matches', message: err.response?.data?.message || err.message });
  }
});

app.get('/api/competitions', async (req, res) => {
  try {
    const { data } = await API.get('/competitions');
    const validCodes = ['WC', 'CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'EC', 'SA', 'PL'];
    const competitions = data.competitions.filter(c => validCodes.includes(c.code));
    res.json({ competitions });
  } catch (err) {
    console.error('Competitions fetch error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch competitions', message: err.response?.data?.message || err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

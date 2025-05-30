import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { MatchesProvider } from './contexts/MatchesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MatchesProvider>
        <App />
      </MatchesProvider>
    </ThemeProvider>
  </StrictMode>
);
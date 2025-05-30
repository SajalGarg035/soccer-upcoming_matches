import React from 'react';
import Header from './components/Header';
import MatchList from './components/MatchList';
import LeagueFilter from './components/LeagueFilter';
import { useMatches } from './contexts/MatchesContext';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  const { isLoading, error } = useMatches();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {isLoading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : (
          <>
            <div className="mb-8">
              <LeagueFilter />
            </div>
            
            <MatchList />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
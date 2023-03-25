import React from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Which one is the best!?</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
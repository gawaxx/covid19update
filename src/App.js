import React from 'react';
import './App.css';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Stats />
      </header>
      <footer className="App-footer" >
          <h1> this is the footer</h1>
      </footer>
    </div>
  );
}

export default App;

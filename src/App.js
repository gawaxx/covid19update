import React from 'react';
import './App.css';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Stats />
      </header>
      <footer className="App-footer" >
          <Footer />
      </footer>
    </div>
  );
}

export default App;

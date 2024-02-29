// src/App.jsx
import React from 'react';
import { GridProvider } from './GridContext';
import Grid from './Grid';
import './App.css';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <header className="App-header">
          <Grid />
        </header>
      </div>
    </GridProvider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Food from './food.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Food imp="energy"/>
      </header>
    </div>
  );
}

export default App;

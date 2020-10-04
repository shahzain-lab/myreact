import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Example name="Shahzain" stage="react.js" />
      </header>
    </div>
  );
}

export default App;

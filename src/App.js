import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Boxing Timer</h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;

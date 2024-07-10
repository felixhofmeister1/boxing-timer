import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <Slideshow />
      <div className="timer-container">
        <h1 className="app-title">Boxing Timer</h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;

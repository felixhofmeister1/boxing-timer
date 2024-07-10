import React, { useState, useEffect } from 'react';
import './Timer.css';

const ROUND_DURATION = 3 * 60; 
const BREAK_DURATION = 1 * 60; 
const TOTAL_ROUNDS = 12;

const Timer = () => {
  const [time, setTime] = useState(ROUND_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [round, setRound] = useState(1);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            if (!isBreak && round < TOTAL_ROUNDS) {
              setIsBreak(true);
              return BREAK_DURATION;
            } else if (isBreak) {
              setIsBreak(false);
              setRound((prevRound) => prevRound + 1);
              return ROUND_DURATION;
            } else {
              setIsActive(false);
              return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isBreak, round]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(ROUND_DURATION);
    setIsActive(false);
    setIsBreak(false);
    setRound(1);
  };

  const skip = () => {
    if (!isBreak && round < TOTAL_ROUNDS) {
      setIsBreak(true);
      setTime(BREAK_DURATION);
    } else if (isBreak) {
      setIsBreak(false);
      setRound((prevRound) => prevRound + 1);
      setTime(ROUND_DURATION);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={`timer ${isBreak ? 'break' : 'round'}`}>
      <h1>Round {isBreak ? 'Break' : round}</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="controls">
        <button className="button" onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <button className="button" onClick={skip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Timer;

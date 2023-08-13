import React, { useContext, useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import SettingsContext from './SettingsContext';
import ToggleButton from './ToggleButton';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [timerLeft, setTimerLeft] = useState(0);
  const [mode, setMode] = useState('Work');

  const timerLeftRef = useRef(timerLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const initTimer = () => {
    const initialTimer = settingsInfo.workTimer * 60;
    setTimerLeft(initialTimer);
    timerLeftRef.current = initialTimer;
    setMode('Work');
  };

  const switchMode = () => {
    const nextMode = modeRef.current === 'Work' ? 'Break' : 'Work';
    const nextTimer =
      (nextMode === 'Work' ? settingsInfo.workTimer : settingsInfo.breakTimer) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setTimerLeft(nextTimer);
    timerLeftRef.current = nextTimer;
  };

  const tick = () => {
    timerLeftRef.current--;
    setTimerLeft(timerLeftRef.current);
  };

  useEffect(() => {
    initTimer();
    loadTimerState();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (timerLeftRef.current === 0) {
        switchMode();
        setIsPaused(true);
        isPausedRef.current = true;
        saveTimerState();
        return;
      }
      tick();
      saveTimerState();
    }, 1000);

    return () => {
      clearInterval(interval);
      saveTimerState();
    };
  }, [settingsInfo]);

  const saveTimerState = () => {
    const timerState = {
      isPaused: isPaused,
      timerLeft: timerLeftRef.current,
      mode: modeRef.current,
    };
    localStorage.setItem('timerState', JSON.stringify(timerState));
  };

  const loadTimerState = () => {
    const savedTimerState = JSON.parse(localStorage.getItem('timerState'));
    if (savedTimerState) {
      setIsPaused(savedTimerState.isPaused);
      setTimerLeft(savedTimerState.timerLeft);
      modeRef.current = savedTimerState.mode;
    }
  };

  const totalTime =
    mode === 'Work'
      ? settingsInfo.workTimer * 60
      : settingsInfo.breakTimer * 60;

  const percentage = Math.round((timerLeft / totalTime) * 100);

  const minutes = Math.floor(timerLeft / 60);
  let seconds = timerLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div className='pomodoro'>
      <h1 className='header-pomodoro'>{mode} Mode</h1>
      <div className='progress-container'>
        <CircularProgressbar
          value={percentage}
          text={minutes + ':' + seconds}
          styles={buildStyles({
            tailColor: '#BFBEBB',
            textColor: '#403F3E',
            pathColor: mode === 'Work' ? '#FF7369' : '#4DAB9A',
          })}
        />
      </div>

      <div className='button-container'>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>

      <div className='toggle-button-container'>
        <ToggleButton
          onClick={() => {
            switchMode();
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      </div>

      <div className='settings-button-container'>
        <SettingsButton />
      </div>
    </div>
  );
};

export default Timer;
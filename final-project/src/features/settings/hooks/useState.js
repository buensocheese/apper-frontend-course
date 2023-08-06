import { useState } from 'react';

const usePomodoroState = () => {
  // Check if timer values are present in local storage
  const storedTimer = JSON.parse(localStorage.getItem('pomodoroTimer'));

  const [newTimer, setNewTimer] = useState(
    storedTimer || {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 30,
      activeMode: 'pomodoro',
    }
  );

  const btnSubmit = (e) => {
    e.preventDefault();
    
    // Check and update timer values if they are 0 or null
    const updatedTimer = {
      pomodoro: newTimer.pomodoro || 25,
      shortBreak: newTimer.shortBreak || 5,
      longBreak: newTimer.longBreak || 30,
      activeMode: newTimer.activeMode,
    };

    // Save updated timer values to local storage
    localStorage.setItem('pomodoroTimer', JSON.stringify(updatedTimer));

    // Update state with the updated timer values
    setNewTimer(updatedTimer);
  };

  return { newTimer, setNewTimer, btnSubmit };
};

export default usePomodoroState;

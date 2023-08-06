import React from 'react';
import PomodoroForm from './components/forms/PomodoroForm';
import usePomodoroState from './hooks/useState';

const Settings = () => {
  const { newTimer, setNewTimer, btnSubmit } = usePomodoroState();

  return (
    <div>
      <h1>Settings Page</h1>
      <PomodoroForm newTimer={newTimer} setNewTimer={setNewTimer} btnSubmit={btnSubmit} />
    </div>
  );
};

export default Settings;

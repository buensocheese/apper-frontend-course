import './App.css';
import AppHeader from './AppHeader';
import Home from './Home';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import { useState } from 'react';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workTimer, setWorkTimer] = useState(25);
  const [breakTimer, setBreakTimer] = useState(5);

  const settingsContextValue = {
    showSettings,
    setShowSettings,
    workTimer,
    breakTimer,
    setWorkTimer,
    setBreakTimer,
  };

  return (
    <main>
      <AppHeader/>
      <SettingsContext.Provider value={settingsContextValue}>
        {showSettings ? <Settings /> : <Home />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
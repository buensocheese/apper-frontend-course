import React, { useContext } from 'react';
import SettingsContext from './SettingsContext';

const SettingsButton = () => {
  const settingsInfo = useContext(SettingsContext);

  const handleSettingsClick = () => {
    settingsInfo.setShowSettings(true);
  };

  return (
    <button className='settings-button' onClick={handleSettingsClick}>
      Settings
    </button>
  );
};

export default SettingsButton;
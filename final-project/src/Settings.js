import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  const renderThumb = (props, state) => (
    <div {...props} className={`thumb ${state.isActive ? 'active' : ''}`} />
  );

  const renderTrack = (props, state) => (
    <div {...props} className={`track ${state.index === 1 ? 'fill' : ''}`} />
  );

  return (
    <div className='settings-page'>
      <h1 className='header'>Settings</h1>
      <label className='label-timer'>
        Set Work Timer: {settingsInfo.workTimer}:00
      </label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workTimer}
        onChange={newValue => settingsInfo.setWorkTimer(newValue)}
        min={0}
        max={120}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
      <label className='label-timer'>
        Set Break Timer: {settingsInfo.breakTimer}:00
      </label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakTimer}
        onChange={newValue => settingsInfo.setBreakTimer(newValue)}
        min={0}
        max={30}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
      <BackButton />
    </div>
  );
};

export default Settings;
import React from 'react';
import Button from '../ui/Button';

const PomodoroForm = ({ newTimer, setNewTimer, btnSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const timerValue = value.trim() === '' ? '' : parseInt(value);
    setNewTimer((prevTimer) => ({
      ...prevTimer,
      [name]: isNaN(timerValue) ? '' : timerValue,
    }));
  };

  return (
    <div className='form-setTimer'>
      <form noValidate onSubmit={btnSubmit}>
        <div className='input-wrapper'>
          <input
            className='timerValue'
            name='pomodoro'
            onChange={handleChange}
            value={newTimer.pomodoro === '' ? '' : newTimer.pomodoro}
          />
          <input
            className='timerValue'
            name='shortBreak'
            onChange={handleChange}
            value={newTimer.shortBreak === '' ? '' : newTimer.shortBreak}
          />
          <input
            className='timerValue'
            name='longBreak'
            onChange={handleChange}
            value={newTimer.longBreak === '' ? '' : newTimer.longBreak}
          />
        </div>
        <Button title='Set Timer' btnFunc={btnSubmit} />
      </form>
    </div>
  );
};

export default PomodoroForm;

import React, { useState } from 'react'
import Button from './ui/Button'

const PomodoroConfig = () => {
    const [newTimer, setNewTimer] = useState({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 30,
        activeMode: 'pomodoro'
    })

    // Switch-case statement for overriding default values
    const btnClick = input => {
        const {mode, timerValue} = input.target
        switch (mode) {
            case 'pomodoro':
                setNewTimer({
                    ...newTimer,
                    pomodoro: parseInt(timerValue)
                })
                break;

            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    shortBreak: parseInt(timerValue)
                })
                break;

            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    longBreak: parseInt(timerValue)
                })
                break;
         
            default:
                break;
        }
    }

    const btnSubmit = e => {
        e.preventDefault()
    }

    return(
        // form-setTimer: Sets timer values
        // noValidate: For custom validations
        <div className='form-setTimer'>
            <form noValidate>
                <div className='input-wrapper'>
                    <input className='timerValue' name='pomodoro' onChange={btnClick} value={newTimer.pomodoro} />
                    <input className='timerValue' name='shortBreak' onChange={btnClick} value={newTimer.shortBreak} />
                    <input className='timerValue' name='longBreak' onChange={btnClick} value={newTimer.longBreak} />
                </div>
                <Button title = 'Set Timer' btnFunc={btnSubmit}/>
            </form>
        
        </div>
    )
}

export default PomodoroConfig

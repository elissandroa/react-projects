import React from 'react'
import './Timer.css';
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import LapList from './LapList'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [miliseconds, setMiliSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [laps, setLaps] = useState([]);

    const formatTime = () => {
        const minutes = ("0" + Math.floor(miliseconds / 60000) % 60).slice(-2);
        const seconds = ("0" + Math.floor(miliseconds / 1000) % 60).slice(-2);
        const centiSeconds = ("0" + Math.floor(miliseconds / 10) % 100).slice(-2);

        return `${minutes}:${seconds}:${centiSeconds} `;

    }

    const stopTimer = (interval) => {
        clearInterval(interval);
    }

    const startTimer = (interval) => {
        return setInterval(() => {
            setMiliSeconds((prevMiliSeconds) => prevMiliSeconds + 10);
        }, 10);
    };

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = startTimer(interval);
        }
        return () => stopTimer(interval);
    }, [timerOn])

    return (
        <div className='timer-container'>
            <TimerDisplay time={formatTime()} />
            <TimerControls onStart={() => setTimerOn(true)} onStop={() => setTimerOn(false)} />
            <LapList />
        </div>
    )
}

export default Timer
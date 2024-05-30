import './Timer.css';
import React from 'react'

const LapList = () => {
  return (
    <div className='timer-laps'>
        <h3>Voltas:</h3>
        <ul>
            <li>Volta 1: 01:05:125 </li>
            <li>Volta 2: 02:05:125 </li>
        </ul>
    </div>
  )
}

export default LapList
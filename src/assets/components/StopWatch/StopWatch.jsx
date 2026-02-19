import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[time, setTime] = useState(0);
    const[running, setRunning] = useState(false);

    const intervalRef = useRef(null);

    const handleStart = () => {
        if(running) return;
        setRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        })
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setRunning(false);
    }

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setRunning(false);
    };

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);

    const format = (n) => String(n).padStart(2, "0");
  return (
    <div>
      <h1>Stop watch</h1>
      <div>
        {format(minutes)}:{format(seconds)}.{format(ms)}
        <div>
            <button onClick={handleStart} disabled={running}>Start </button> 
            <button onClick={handleStop} disabled={!running}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default StopWatch

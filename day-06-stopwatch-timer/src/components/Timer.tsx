import { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";

const Timer = () => {
    const [time, setTime] = useState(30000);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running || time <= 0) return;

        const id = setInterval(() => {
            setTime(prev => prev - 50);
        }, 50);

        return () => clearInterval(id);
    }, [running, time]);

    return (
        <div className="timer">
            <h2>Timer</h2>
            <div className="time">{formatTime(time)}</div>

            <div className="controls">
                <button onClick={() => setRunning(true)}>Start</button>
                <button onClick={() => setRunning(false)}>Pause</button>
                <button onClick={() => setTime(30000)}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;

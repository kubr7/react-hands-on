import { useStopwatch } from "../hooks/useStopwatch";
import { formatTime } from "../utils/formatTime";

const Stopwatch = () => {
    const { elapsed, running, start, stop, reset } = useStopwatch();

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <div className="time">{formatTime(elapsed)}</div>

            <div className="controls">
                {!running ? (
                    <button onClick={start}>Start</button>
                ) : (
                    <button onClick={stop}>Stop</button>
                )}
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;

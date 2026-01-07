import { useEffect, useRef, useState } from "react";

export function useStopwatch() {
    const [elapsed, setElapsed] = useState(0);
    const [running, setRunning] = useState(false);

    const startTimeRef = useRef<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    const start = () => {
        if (running) return;

        startTimeRef.current = Date.now() - elapsed;
        setRunning(true);
    };

    const stop = () => {
        setRunning(false);
    };

    const reset = () => {
        setRunning(false);
        setElapsed(0);
        startTimeRef.current = null;
    };

    useEffect(() => {
        if (!running) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            return;
        }

        intervalRef.current = window.setInterval(() => {
            if (startTimeRef.current) {
                setElapsed(Date.now() - startTimeRef.current);
            }
        }, 50);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [running]);

    return {
        elapsed,
        running,
        start,
        stop,
        reset,
    };
}

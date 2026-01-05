import { useCounter } from "../hooks/useCounter";
import "../styles/counter.css";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="counter-card">
            <h1>Counter App</h1>

            <div className="count">{count}</div>

            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement} disabled={count === 0}>
                    Decrement
                </button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;

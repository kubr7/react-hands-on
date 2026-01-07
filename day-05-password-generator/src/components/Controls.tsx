interface Props {
    length: number;
    setLength: (n: number) => void;
    uppercase: boolean;
    setUppercase: (b: boolean) => void;
    lowercase: boolean;
    setLowercase: (b: boolean) => void;
    numbers: boolean;
    setNumbers: (b: boolean) => void;
    symbols: boolean;
    setSymbols: (b: boolean) => void;
}

const Controls = ({
    length,
    setLength,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
}: Props) => {
    return (
        <div className="controls">
            <label className="length-label">
                Length: {length}
                <input
                    type="range"
                    min={7}
                    max={28}
                    value={length}
                    onChange={e => setLength(Number(e.target.value))}
                />
            </label>

            <div className="options-label">
                <label>
                <input
                    type="checkbox"
                    checked={uppercase}
                    onChange={e => setUppercase(e.target.checked)}
                />
                Uppercase
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={lowercase}
                    onChange={e => setLowercase(e.target.checked)}
                />
                Lowercase
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={numbers}
                    onChange={e => setNumbers(e.target.checked)}
                />
                Numbers
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={symbols}
                    onChange={e => setSymbols(e.target.checked)}
                />
                Symbols
            </label>
            </div>
        </div>
    );
};

export default Controls;

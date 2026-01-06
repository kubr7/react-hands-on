interface Props {
    onAppend: (value: string) => void;
    onClear: () => void;
    onBackspace: () => void;
    onCalculate: () => void;
}

const buttons = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", "."
];

const operators = ["%","/", "*", "-", "+"];

const Keypad = ({
    onAppend,
    onClear,
    onBackspace,
    onCalculate,
}: Props) => {
    return (
        <div className="keypad-wrapper">
            <div className="top-controls">
                <button className="clear-btn" onClick={onClear}>C</button>
                <button className="backspace-btn" onClick={onBackspace}>⌫</button>
            </div>

            <div className="keypad">
                <div className="numbers-section">
                    {buttons.map(btn =>
                        <button key={btn} onClick={() => onAppend(btn)}>
                            {btn}
                        </button>
                    )}
                    <button className="equals-btn" onClick={onCalculate}>=</button>
                </div>

                <div className="operators-section">
                    {operators.map(op =>
                        <button key={op} onClick={() => onAppend(op)}>
                            {op}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Keypad;

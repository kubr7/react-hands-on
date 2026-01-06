interface Props {
    onAppend: (value: string) => void;
    onClear: () => void;
    onBackspace: () => void;
    onCalculate: () => void;
}

const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
];

const Keypad = ({
    onAppend,
    onClear,
    onBackspace,
    onCalculate,
}: Props) => {
    return (
        <div className="keypad">
            <button onClick={onClear}>C</button>
            <button onClick={onBackspace}>⌫</button>

            {buttons.map(btn =>
                btn === "=" ? (
                    <button key={btn} onClick={onCalculate}>
                        =
                    </button>
                ) : (
                    <button key={btn} onClick={() => onAppend(btn)}>
                        {btn}
                    </button>
                )
            )}
        </div>
    );
};

export default Keypad;

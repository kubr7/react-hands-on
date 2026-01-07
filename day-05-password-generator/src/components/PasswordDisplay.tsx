interface Props {
    password: string;
}

const PasswordDisplay = ({ password }: Props) => {
    const copy = async () => {
        if (!password) return;
        await navigator.clipboard.writeText(password);
        alert("Password copied!");
    };

    return (
        <div className="password-display">
            <input value={password} readOnly />
            <button onClick={copy}>Copy</button>
        </div>
    );
};

export default PasswordDisplay;

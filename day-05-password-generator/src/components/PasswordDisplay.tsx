import { useState } from "react";

interface Props {
    password: string;
}

const PasswordDisplay = ({ password }: Props) => {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        if (!password) return;
        await navigator.clipboard.writeText(password);
        
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="password-display">
            <input value={password} readOnly aria-label="Generated password"/>
            <button className="copy-btn" onClick={copy} disabled={!password}>{copied ? "Copied!" : "Copy"}</button>
        </div>
    );
};

export default PasswordDisplay;


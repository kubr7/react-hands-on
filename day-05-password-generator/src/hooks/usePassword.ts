import { useState } from "react";
import { generatePassword } from "../utils/generatePassword";

export function usePassword() {
    const [length, setLength] = useState(7);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(true);

    const [password, setPassword] = useState("");

    const generate = () => {
        const pwd = generatePassword({
            length,
            uppercase,
            lowercase,
            numbers,
            symbols,
        });

        setPassword(pwd);
    };

    return {
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
        password,
        generate,
    };
}

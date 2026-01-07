import { useEffect, useState } from "react";
import { generatePassword } from "../utils/generatePassword";

export function usePassword() {
    const [length, setLength] = useState(12);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const pwd = generatePassword({
            length,
            uppercase,
            lowercase,
            numbers,
            symbols,
        });

        setPassword(pwd);
    }, [length, uppercase, lowercase, numbers, symbols]);

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
    };
}

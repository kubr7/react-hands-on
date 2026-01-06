import { useState, useEffect, useCallback } from "react";
import { evaluateExpression } from "../utils/evaluate";

export function useCalculator() {
    const [expression, setExpression] = useState<string>("");

    const append = useCallback((value: string) => {
        setExpression(prev => prev + value);
    }, []);

    const clear = useCallback(() => {
        setExpression("");
    }, []);

    const backspace = useCallback(() => {
        setExpression(prev => prev.slice(0, -1));
    }, []);

    const calculate = useCallback(() => {
        setExpression(evaluateExpression(expression));
    }, [expression]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if ("0123456789+-*/%".includes(e.key) || e.key === ".") {
                append(e.key);
            }
            if (e.key === "Enter") calculate();
            if (e.key === "Backspace") backspace();
            if (e.key === "Escape") clear();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [append, calculate, backspace, clear,]);


    return {
        expression,
        append,
        clear,
        backspace,
        calculate,
    };
}

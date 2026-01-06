import { useState } from "react";
import { evaluateExpression } from "../utils/evaluate";

export function useCalculator() {
    const [expression, setExpression] = useState<string>("");

    const append = (value: string) => {
        setExpression(prev => prev + value);
    };

    const clear = () => {
        setExpression("");
    };

    const backspace = () => {
        setExpression(prev => prev.slice(0, -1));
    };

    const calculate = () => {
        setExpression(evaluateExpression(expression));
    };

    return {
        expression,
        append,
        clear,
        backspace,
        calculate,
    };
}

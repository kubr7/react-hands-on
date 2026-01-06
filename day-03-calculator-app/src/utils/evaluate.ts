export function evaluateExpression(expression: string): string {
    if (!expression) return "0";

    try {
        const sanitized = expression.replace(/[^-()\d/*+%.]/g, "");

        const result = Function(`"use strict"; return (${sanitized})`)();

        if (!isFinite(result)) return "Error";

        return result.toString();
    } catch {
        return "Error";
    }
}
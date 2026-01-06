export function evaluateExpression(expression: string): string {
    try {
        // Prevent invalid evaluation
        if (!expression) return "0";

        // eslint-disable-next-line no-new-func
        const result = Function(`return ${expression}`)();

        if (result === Infinity || isNaN(result)) {
            return "Error";
        }

        return result.toString();
    } catch {
        return "Error";
    }
}

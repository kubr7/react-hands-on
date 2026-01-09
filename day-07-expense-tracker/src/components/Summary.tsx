import type { Expense } from "../types/expense";
import { formatCurrency } from "../utils/currency";

interface Props {
    expenses: Expense[];
}

export default function Summary({ expenses }: Props) {
    const income = expenses
        .filter(e => e.type === "income")
        .reduce((sum, e) => sum + e.amount, 0);

    const expense = expenses
        .filter(e => e.type === "expense")
        .reduce((sum, e) => sum + e.amount, 0);

    const balance = income - expense;

    return (
        <div className="summary">
            <p>Income: {formatCurrency(income)}</p>
            <p>Expense: {formatCurrency(expense)}</p>
            <p>Balance: {formatCurrency(balance)}</p>
        </div>
    );
}

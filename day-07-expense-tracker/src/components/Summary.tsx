import type { Expense } from "../types/expense";

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
            <p>Income: ₹{income}</p>
            <p>Expense: ₹{expense}</p>
            <h3>Balance: ₹{balance}</h3>
        </div>
    );
}

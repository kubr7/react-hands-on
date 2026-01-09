import type { Expense } from "../types/expense";

interface Props {
    expenses: Expense[];
}

export default function ExpenseList({ expenses }: Props) {
    if (expenses.length === 0) return <p>No records yet</p>;

    return (
        <ul>
            {expenses.map((e) => (
                <li key={e.id}>
                    <span>{e.title}</span>
                    <span>{e.type === "income" ? "+" : "-"}₹{e.amount}</span>
                </li>
            ))}
        </ul>
    );
}

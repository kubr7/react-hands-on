import type { Expense } from "../types/expense";

interface Props {
    expenses: Expense[];
}

export default function ExpenseList({ expenses }: Props) {
    if (expenses.length === 0) return <p>No records yet</p>;

    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      });
      

    return (
        <ul>
            {expenses.map((e) => (
                <li key={e.id} className={`expense ${e.type}`}>
                    <span>{e.title}</span>
                    <span>{e.type === "income" ? "+" : "-"}{formatter.format(e.amount)}</span>
                    <small>{new Date(e.date).toLocaleDateString()}</small>
                </li>
            ))}
        </ul>
    );
}

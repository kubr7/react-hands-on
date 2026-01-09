import type { Expense } from "../types/expense";
import { formatCurrency } from "../utils/currency";

interface Props {
    expenses: Expense[];
}

export default function ExpenseList({ expenses }: Props) {
    if (expenses.length === 0) return <p>No records yet</p>;


    return (
        <ul className="transactions">
            {expenses.map((e) => (
                <li className={`expense ${e.type}`}>
                    <div className="expense-header">
                        <span className="expense-title">{e.title}</span>
                        <span className="expense-amount">
                            {e.type === "income" ? "+" : "-"}{formatCurrency(e.amount)}
                        </span>
                    </div>
                    <div className="expense-meta">
                        {e.category && <span className="category">{e.category}</span>}
                        <small>{new Date(e.date).toLocaleDateString()}</small>
                    </div>
                </li>
            ))}
        </ul>
    );
}

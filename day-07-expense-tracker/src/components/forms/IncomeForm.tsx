import { useState } from "react";
import type { Expense } from "../../types/expense";

interface Props {
    onAdd: (expense: Expense) => void;
}

export default function IncomeForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !amount) return;

        onAdd({
            id: crypto.randomUUID(),
            title,
            amount: Number(amount),
            type: "income",
            category: "salary",
            notes: "Monthly income",
            date: new Date().toISOString(),
        });

        setTitle("");
        setAmount("");
    };

    return (
        <form className="form income" onSubmit={submit}>
            <h3>➕ Add Income</h3>

            <input
                placeholder="Source"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />

            <button>Add Income</button>
        </form>
    );
}

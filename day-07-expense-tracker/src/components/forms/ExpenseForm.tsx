import { useState } from "react";
import type { Expense } from "../../types/expense";

interface Props {
    onAdd: (expense: Expense) => void;
}

export default function ExpenseForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<Expense["category"]>();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !amount) return;

        onAdd({
            id: crypto.randomUUID(),
            title,
            amount: Number(amount),
            type: "expense",
            category,
            date: new Date().toISOString(),
        });

        setTitle("");
        setAmount("");
    };

    return (
        <form className="form" onSubmit={submit}>
            <div className="form-controls">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <select value={category} onChange={e => setCategory(e.target.value as any)}>
                    <option value="food">Food</option>
                    <option value="rent">Rent</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option>
                </select>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <button>Add Expense</button>
        </form>
    );
}

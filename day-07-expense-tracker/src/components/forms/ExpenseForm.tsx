import { useState } from "react";
import type { Expense } from "../../types/expense";

interface Props {
    onAdd: (expense: Expense) => void;
}

export default function ExpenseForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<Expense["category"]>();
    const [notes, setNotes] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !amount) return;

        onAdd({
            id: crypto.randomUUID(),
            title,
            amount: Number(amount),
            type: "expense",
            category,
            notes,
            date: new Date().toISOString(),
        });

        setTitle("");
        setAmount("");
        setNotes("");
    };

    return (
        <form className="form expense" onSubmit={submit}>
            <h3>➖ Add Expense</h3>

            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />

            <select value={category} onChange={e => setCategory(e.target.value as any)}>
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="travel">Travel</option>
                <option value="other">Other</option>
            </select>

            <textarea
                placeholder="Notes (optional)"
                value={notes}
                onChange={e => setNotes(e.target.value)}
            />

            <button>Add Expense</button>
        </form>
    );
}

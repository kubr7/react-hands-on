import { useState } from "react";
import type { Expense, ExpenseType } from "../types/expense";

interface Props {
    onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<ExpenseType>("expense");
    const [category, setCategory] = useState<"food" | "rent" | "travel">("food");
    const [notes, setNotes] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !amount) return;

        onAddExpense({
            id: crypto.randomUUID(),
            title,
            amount: Number(amount),
            type,
            category,
            notes: notes.trim() || undefined,
            date: new Date().toISOString(),
        });

        setTitle("");
        setAmount("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select value={type} onChange={(e) => setType(e.target.value as ExpenseType)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
            >
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="travel">Travel</option>
            </select>

            <textarea
                placeholder="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />

            <button>Add</button>
        </form>
    );
}

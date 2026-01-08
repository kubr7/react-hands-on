import { useState } from "react";
import { Expense, ExpenseType } from "../types/expense";

interface Props {
    onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<ExpenseType>("expense");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !amount) return;

        onAddExpense({
            id: crypto.randomUUID(),
            title,
            amount: Number(amount),
            type,
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

            <button>Add</button>
        </form>
    );
}

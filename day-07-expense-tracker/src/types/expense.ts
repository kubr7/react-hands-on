export type ExpenseType = "income" | "expense";

export interface Expense {
    readonly id: string;
    title: string;
    amount: number;
    type: ExpenseType;
    category?: "food" | "rent" | "travel" | "salary" | "fuel" | "other";
    notes?: string;
    date: string;
}

import { useState } from "react";
import type { Expense } from "./types/expense";
import Header from "./components/Header";
import ExpenseForm from "./components/forms/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import './App.css'
import "./styles/app.css";
import IncomeForm from "./components/forms/IncomeForm";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const addExpense = (expense: Expense) => {
    setExpenses(prev => {
      const updated = [expense, ...prev];
      localStorage.setItem("expenses", JSON.stringify(updated));
      return updated;
    });
  };


  return (
    <div className="container">
      <Header />
      <Summary expenses={expenses} />
      <IncomeForm onAdd={addExpense} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
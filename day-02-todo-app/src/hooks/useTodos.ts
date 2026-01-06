import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";

export function useTodos() {
  // Initialize from localStorage immediately (lazy init)
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] =
    useState<"all" | "active" | "completed">("all");

  // Only persist changes (no load effect needed)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    if (!title.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
  };
}

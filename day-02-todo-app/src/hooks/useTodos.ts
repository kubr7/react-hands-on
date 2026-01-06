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

  // Only persist changes (no load effect needed) Save to localStorage (on change)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CRUD operations
  // Add a new todo
  const addTodo = (title: string) => {
    if (!title.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  };

  // Toggle completion status
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(task => task.id !== id));
  };

  // Filtered todos based on current filter
  const filteredTodos = todos.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
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

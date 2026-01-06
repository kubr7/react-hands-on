import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    // Load from localStorage (on first render)
    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    // Save to localStorage (on change)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Add todo
    const addTodo = (title: string) => {
        if (!title.trim()) return;

        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                title,
                completed: false,
            },
        ]);
    };

    // Toggle todo
    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    // Delete todo
    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    // Filtered todos (derived state)
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
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

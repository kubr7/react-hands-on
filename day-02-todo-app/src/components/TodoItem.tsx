import type { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
    return (
        <li className={todo.completed ? "completed" : ""}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span>{todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}</span>
            <button onClick={() => onDelete(todo.id)}><Trash2 className="trash" /></button>
        </li>
    );
};

export default TodoItem;

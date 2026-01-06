import type { Todo } from "../types/todo";

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
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
    );
};

export default TodoItem;

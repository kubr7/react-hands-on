import { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        onAdd(value);
        setValue("");
    };

    return (
        <div className="todo-input">
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TodoInput;

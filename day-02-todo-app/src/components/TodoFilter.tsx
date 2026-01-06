interface Props {
    filter: "all" | "active" | "completed";
    setFilter: (f: "all" | "active" | "completed") => void;
}

const TodoFilter = ({ filter, setFilter }: Props) => {
    return (
        <div className="filters">
            {["all", "active", "completed"].map(f => (
                <button
                    key={f}
                    className={filter === f ? "active" : ""}
                    onClick={() => setFilter(f as any)}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default TodoFilter;

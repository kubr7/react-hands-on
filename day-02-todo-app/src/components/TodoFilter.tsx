interface Props {
    filter: "all" | "active" | "completed";
    setFilter: (f: "all" | "active" | "completed") => void;
}

const FILTERS = ["all", "active", "completed"] as const;

const TodoFilter = ({ filter, setFilter }: Props) => {
    return (
        <div className="filters">
            {FILTERS.map(f => (
                <button
                    key={f}
                    className={filter === f ? "active" : ""}
                    onClick={() => setFilter(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default TodoFilter;

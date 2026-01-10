interface Props {
    query: string;
    onChange: (value: string) => void;
}

export default function SearchForm({ query, onChange }: Props) {
    return (
        <div className="search-form">
            <input
                placeholder="Search movies"
                value={query}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

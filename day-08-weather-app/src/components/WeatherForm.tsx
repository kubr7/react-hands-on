import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
    unit: "metric" | "imperial";
    setUnit: (u: "metric" | "imperial") => void;
}

export default function WeatherForm({ onSearch, unit, setUnit }: Props) {
    const [city, setCity] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedCity = city.trim();

        if (!trimmedCity) {
            setError("Enter city name first");
            return;
        }

        setError(null);
        onSearch(trimmedCity);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-controls">
                <input
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                        if (error) setError(null);
                    }}
                />

                <button
                    type="button"
                    onClick={() =>
                        setUnit(unit === "metric" ? "imperial" : "metric")
                    }
                >
                    {unit === "metric" ? "°C" : "°F"}
                </button>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit">Search</button>
        </form>
        </>
    );
}

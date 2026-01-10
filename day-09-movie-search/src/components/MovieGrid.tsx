import type { Movie } from "../types/movie";

interface Props {
    movies: Movie[];
    total: number;
    loading: boolean;
    onLoadMore: () => void;
}

export default function MovieGrid({
    movies,
    total,
    loading,
    onLoadMore,
}: Props) {
    return (
        <>
            <div className="grid">
                {movies.map((m) => (
                    <div key={m.imdbID} className="movie-card">
                        <img src={m.Poster} alt={m.Title} />
                        <p>
                            {m.Title} ({m.Year})
                        </p>
                    </div>
                ))}
            </div>

            {movies.length < total && !loading && (
                <div className="button-container">
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            )}
        </>
    );
}

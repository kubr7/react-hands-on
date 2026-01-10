import { useEffect, useState } from "react";
import type { Movie } from "./types/movie";
import { searchMovies } from "./services/movieService";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (!debouncedQuery) return;

    setMovies([]);
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchMovies(debouncedQuery, page);
        setMovies(prev => [...prev, ...data.movies]);
        setTotal(data.total);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [debouncedQuery, page]);

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        placeholder="Search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      <div className="grid">
        {movies.map((m) => (
          <div key={m.imdbID}>
            <img src={m.Poster} alt={m.Title} />
            <p>{m.Title} ({m.Year})</p>
          </div>
        ))}
      </div>

      {movies.length < total && !loading && (
        <button onClick={() => setPage(p => p + 1)}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;

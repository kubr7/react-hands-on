import { useEffect, useState } from "react";
import type { Movie } from "./types/movie";
import { searchMovies } from "./services/movieService";
import { useDebounce } from "./hooks/useDebounce";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import MovieGrid from "./components/MovieGrid";
import "./styles/movie.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query);

  // Reset on new search
  useEffect(() => {
    if (!debouncedQuery) return;
    setMovies([]);
    setPage(1);
  }, [debouncedQuery]);

  // Fetch movies
  useEffect(() => {
    if (!debouncedQuery) return;

    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchMovies(debouncedQuery, page);
        setMovies((prev) => [...prev, ...data.movies]);
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
    <div className="app-container">
      <Header />

      <SearchForm query={query} onChange={setQuery} />

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}

      <MovieGrid
        movies={movies}
        total={total}
        loading={loading}
        onLoadMore={() => setPage((p) => p + 1)}
      />
    </div>
  );
}

export default App;

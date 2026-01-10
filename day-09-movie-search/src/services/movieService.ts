import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function searchMovies(query: string, page: number) {
    const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
    );

    const data = await res.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }

    return {
        movies: data.Search as Movie[],
        total: Number(data.totalResults),
    };
}

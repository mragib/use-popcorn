import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const key = "b2962e3e";

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setError("");
          setLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong to fetching data");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("No Movie Found");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      }

      if (query.length < 3) {
        setError("");
        setMovies([]);
        return;
      }

      fetchMovie();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, loading, error };
}

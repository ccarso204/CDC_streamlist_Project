import React, { useEffect, useState } from "react";

function TMDB() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fd846db51359fe6420f865ba6bfc8a80&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error fetching TMDB data:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TMDB;

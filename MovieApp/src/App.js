import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // // Alternativa bez isLoading state-a kao primer funkcije koja ne koristi async
  // const fetchMovieHandler = () => {
  //   console.log("fetchMovieHandler");

  //   // Default method is Get
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       console.log("fetchMovieHandler response:", response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("fetchMovieHandler data:", data);
  //       const transformedMovies = data.results.map(movieData =>{
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releseDate: movieData.relese_date
  //         }
  //       });
  //       console.log("fetchMovieHandler transformedMovies:",transformedMovies);
  //       setMovies(transformedMovies);
  //     });
  // };

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    console.log("fetchMovieHandler");

    // Default method is Get

    try {
      const response = await fetch("https://swapi.dev/api/films");
      console.log("fetchMovieHandler response:", response);
      if (response.ok === false) {
        throw new Error("Something went Wong!");
      }

      const data = await response.json();
      console.log("fetchMovieHandler data:", data);

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releseDate: movieData.relese_date,
        };
      });
      console.log("fetchMovieHandler transformedMovies:", transformedMovies);
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading === false && movies.length > 0 && (
          <MoviesList movies={movies} />
        )}
        {isLoading === false && movies.length === 0 && error == null && (
          <p>Movies not loaded</p>
        )}
        {isLoading === true && <p>Loading...</p>}
        {isLoading === false && error && <p>ERROR!!!</p>}
      </section>
    </React.Fragment>
  );
};

export default App;

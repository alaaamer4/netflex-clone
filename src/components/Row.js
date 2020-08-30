import React, { useState, useEffect } from "react";
import axios from "../axios";

const Row = ({ title, fetchURL, isLarge }) => {
  // function to call the data from the api
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchMovies = async (fetchURL) => {
    const res = await axios.get(fetchURL);
    setMovies(res.data.results);
    return res;
  };
  useEffect(() => {
    fetchMovies(fetchURL);
  }, [fetchURL]);

  return (
    <div>
      {/************************* title *******************************/}
      <h1 className="title">{title}</h1>

      {/************************  container ****************************/}
      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`movie_poster ${isLarge && "movie_poster_large"}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;

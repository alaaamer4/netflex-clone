import React, { useEffect, useState } from "react";
import axios from "../axios";
import request from "../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const getMovie = async () => {
    const res = await axios.get(request.fetchNetflexOriginals);
    setMovie(
      res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
    );
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  // truncate function
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <>
      <header
        className="banner"
        style={{
          background: movie
            ? `url(${base_url}${movie?.poster_path}) no-repeat center center/cover`
            : "#333",
          height: "65vh",
        }}
      >
        <div className="banner_container">
          <h1 className="large_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <button className="btn-primary">Play</button>
          <h3 className="banner_description">
            {movie.length !== 0 && truncateString(movie.overview, 150)}
          </h3>
        </div>
        <div className="overlay"></div>
      </header>
    </>
  );
};

export default Banner;

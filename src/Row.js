import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

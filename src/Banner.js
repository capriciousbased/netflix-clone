import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header>
      {/* title */}
      {/* div with 2 buttons */}
      {/* description */}
    </header>
  );
};

export default Banner;

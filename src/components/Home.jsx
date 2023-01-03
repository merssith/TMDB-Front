import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Grid from "./Grid";

const Home = () => {
  const [tvShows, setTvShows] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => res.data)
      .then((movies) => setMovies(movies))
      .catch((err) => console.error(err));
    axios
      .get("/api/tvShows")
      .then((res) => res.data)
      .then((tvShows) => setTvShows(tvShows))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p>Movies</p>
      <Grid content={movies} type="Movie" />
      <p>TV Shows</p>
      <Grid content={tvShows} type="TvShow" />
    </div>
  );
};

export default Home;

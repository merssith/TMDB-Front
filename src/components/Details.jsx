import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "../commons/MovieDetails";
import TvShowDetails from "../commons/TvShowDetails";

const Details = () => {
  function GetUrlParams(option) {
    let location = useLocation();
    let split = location.pathname.split("/");
    if (option === 2) return split[2];
    if (option === 3) return split[3];
  }

  const [data, setData] = useState([]);

  let type = GetUrlParams(2);
  let id = GetUrlParams(3);
  let route;
  if (type === "movie") {
    route = "/api/movies/details/";
  } else {
    route = "/api/tvShows/details/";
  }

  useEffect(() => {
    axios
      .get(route + id)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {type === "movie" ? (
        <MovieDetails data={data} />
      ) : (
        <TvShowDetails data={data} />
      )}
    </div>
  );
};

export default Details;

import React from "react";
import { useSelector } from "react-redux";
import { getGenreName } from "../utils/genres";

const Card = ({ data, type }) => {
  const movieGenres = useSelector((state) => state.movieGenres);
  const tvShowGenres = useSelector((state) => state.tvShowGenres);
  return (
    <div>
      <img src={data.poster_url} alt="poster_image" width="15%" />
      <p> {data.title} </p>
      <p> {data.overview} </p>
      <p> {data.vote_average} </p>
      <p> {data.original_language} </p>
      <div>
        {data.genre
          ? data.genre.map((genre) => (
              <p>{getGenreName(genre, type, movieGenres, tvShowGenres)}</p>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Card;

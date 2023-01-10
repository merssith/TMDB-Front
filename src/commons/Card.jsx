import React from "react";
import { useSelector } from "react-redux";
import { getGenreName } from "../utils/genres";

const Card = ({ data, type }) => {
  const movieGenres = useSelector((state) => state.movieGenres);
  const tvShowGenres = useSelector((state) => state.tvShowGenres);
  return (
    <div>
      <div>
        {data.poster_url.includes(null) ? (
          <img
            src="https://res.cloudinary.com/dsdiadotw/image/upload/v1673364216/TMDB-commonImages/noposter_ndxljj.png"
            alt="poster_image"
            width="15%"
          />
        ) : (
          <img src={data.poster_url} alt="poster_image" width="15%" />
        )}
      </div>
      <p> {data.title} </p>
      <p>{data.overview !== "" ? data.overview : "No overview available"}</p>
      <p>
        {data.vote_average !== 0 ? data.vote_average : "No rating available"}
      </p>
      <div>
        {data.genre
          ? data.genre.map((genre) => (
              <p key={genre}>
                {getGenreName(genre, type, movieGenres, tvShowGenres)}
              </p>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Card;

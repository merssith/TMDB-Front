import React from "react";
import ReactCountryFlag from "react-country-flag";

const TvShowDetails = ({ data }) => {
  return (
    <div>
      <div>
        {data.poster_path == null ? (
          <img
            src="https://res.cloudinary.com/dsdiadotw/image/upload/v1673364216/TMDB-commonImages/noposter_ndxljj.png"
            alt="poster_image"
          />
        ) : (
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
            alt="poster_image"
          />
        )}
      </div>
      <p>{data.name}</p>
      <div>
        {data.production_countries
          ? data.production_countries.map((country) => (
              <p key={country.iso_3166_1}>
                <ReactCountryFlag
                  countryCode={country.iso_3166_1}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title={country.name}
                />
              </p>
            ))
          : ""}
      </div>
      <p>{data.overview}</p>
      <div>
        {data.genres
          ? data.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)
          : ""}
      </div>
    </div>
  );
};

export default TvShowDetails;

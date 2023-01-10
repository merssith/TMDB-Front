import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../store/search";
import { setTypeResults } from "../../store/searchType";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOptions] = useState("movie");

  const searchQueryOnChange = (e) => {
    const searchInput = e.target.value;
    setSearchQuery(searchInput);
  };

  const searchOptionsOnChange = (e) => {
    const searchOptionsInput = e.target.value;
    setSearchOptions(searchOptionsInput);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let route;
    if (searchOption === "movie") {
      route = "/api/movies/search";
    } else {
      route = "/api/tvShows/search";
    }
    axios
      .get(
        route,
        { params: { query: searchQuery } },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("searchResult", JSON.stringify(res.data));
        localStorage.setItem("searchResultType", JSON.stringify(searchOption));
        dispatch(setTypeResults(searchOption));
        dispatch(setSearchResults(res.data));
        navigate(`/searchResults`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={searchQueryOnChange}
        />
        <select
          id="searchOptions"
          name="searchOptions"
          onChange={searchOptionsOnChange}
        >
          <option value="movie">In Movies</option>
          <option value="tvshow">In TV Shows</option>
        </select>
        <input type="submit" onClick={handleSearch} value="Search" />
      </form>
    </div>
  );
};

export default Search;

import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="What are you looking for?" />
        <select id="searchOptions" name="searchOptions">
          <option value="movie">In Movies</option>
          <option value="tvshow">In TV Shows</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;

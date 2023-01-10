import React from "react";
import Grid from "./Grid";
import { useSelector } from "react-redux";

const SearchResult = () => {
  let searchRes = useSelector((state) => state.search);
  let searchResType = useSelector((state) => state.searchType);

  if (Object.keys(searchRes).length === 1)
    searchRes = JSON.parse(localStorage.getItem("searchResult"));
  if (Object.keys(searchResType).length === 1)
    searchResType = JSON.parse(localStorage.getItem("searchResultType"));

  return (
    <div>
      <p>Search Result</p>
      {searchRes !== null ? (
        <Grid content={searchRes} type={searchResType} />
      ) : (
        "Please enter something to search for."
      )}
      {!searchRes.length && "I couldn't find anything with that search term."}
    </div>
  );
};

export default SearchResult;

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import movieGenresReducer from "./movieGenres";
import tvShowGenresReducer from "./tvShowGenres";
import searchReducer from "./search";
import searchTypeReducer from "./searchType";

const store = configureStore({
  reducer: {
    user: userReducer,
    movieGenres: movieGenresReducer,
    tvShowGenres: tvShowGenresReducer,
    search: searchReducer,
    searchType: searchTypeReducer,
  },
});

export default store;

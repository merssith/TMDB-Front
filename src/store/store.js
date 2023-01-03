import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import movieGenresReducer from "./movieGenres";
import tvShowGenresReducer from "./tvShowGenres";

const store = configureStore({
  reducer: {
    user: userReducer,
    movieGenres: movieGenresReducer,
    tvShowGenres: tvShowGenresReducer,
  },
});

export default store;

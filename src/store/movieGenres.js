import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMovieGenres = createAction("SET_MOVIE_GENRES");

const initialState = [
  {
    id: null,
    name: null,
  },
];

const reducer = createReducer(initialState, {
  [setMovieGenres]: (state, action) => action.payload,
});

export default reducer;

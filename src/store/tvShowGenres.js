import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTvShowGenres = createAction("SET_TVSHOW_GENRES");

const initialState = [
  {
    id: null,
    name: null,
  },
];

const reducer = createReducer(initialState, {
  [setTvShowGenres]: (state, action) => action.payload,
});

export default reducer;

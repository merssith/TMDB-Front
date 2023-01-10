import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchResults = createAction("SET_SEARCH_RESULTS");
const initialState = [[{}]];

const reducer = createReducer(initialState, {
  [setSearchResults]: (state, action) => action.payload,
});

export default reducer;

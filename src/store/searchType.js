import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTypeResults = createAction("SET_SEARCH_TYPE_RESULTS");

const initialState = "";

const reducer = createReducer(initialState, {
  [setTypeResults]: (state, action) => action.payload,
});

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
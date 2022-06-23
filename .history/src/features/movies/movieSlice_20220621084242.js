import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
        state
    }
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
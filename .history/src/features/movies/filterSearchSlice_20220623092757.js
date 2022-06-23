import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSearch: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    listSearchHistory: (state, action) => {
      state.listSearch.unshift(action.payload) 
    },
    deleteItemSearchHistory: (state, action) => {
      const newState = state.listSearch.filter(data => data.id !== action.payload.id)
      state.listSearch = newState
    }
  },
});

export const { listSearchHistory } = filterSlice.actions;

export default filterSlice.reducer;

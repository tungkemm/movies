import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsynCMovies",
  async (content) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${content}&type=movie`
      );
      return response.data;
    } catch (error) {
      console.log("loi call api", error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (content) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${content}&type=series`
      );
      return response.data;
    } catch (error) {
      console.log("loi call api", error);
    }
  }
);

export const fetchAsyncMoiveOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMoiveOrShowDetail",
    async (id) => {
      try {
        const response = await movieApi.get(
          `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
      } catch (error) {
        console.log("loi call api", error);
      }
    }
  );

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetSelectMovieOrShow: (state) => {
        state.selectMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Success movies");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Success shows");
      return { ...state, shows: action.payload };
    },
    [fetchAsyncMoiveOrShowDetail.fulfilled]: (state, action) => {
        console.log("Success detail");
        // console.log(action.payload)
        return { ...state, selectMovieOrShow: action.payload };
    },
  },
});

export const { resetSelectMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;

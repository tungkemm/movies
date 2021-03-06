import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import movieReducer from "./movies/movieSlice";
import filterReducer from "./movies/filterSearchSlice";
import loginReducer from "./movies/loginSlice";

const persistLocalConfig = {
  key: "dataMovieApp",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  movies: movieReducer,
  filter: filterReducer,
  login: loginReducer,
});

const persitedReducer = persistReducer(persistLocalConfig, rootReducer);

const store = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./movies/auth.slice";
import { moviesApi } from "./movies/movies.api";
import movies from "./movies/movies.slice";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

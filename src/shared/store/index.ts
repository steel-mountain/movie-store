import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth.slice";
import { moviesApi } from "./slices/movies/movies.api";
import movies from "./slices/movies/movies.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  movies,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

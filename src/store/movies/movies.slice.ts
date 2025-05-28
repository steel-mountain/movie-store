import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../shared/types/movies";

const FVK_KEY = "rfk";

interface IInitialState {
  favourites: IMovies[];
  theme: boolean;
  newPage: number;
}

const initialState: IInitialState = {
  favourites: JSON.parse(localStorage.getItem(FVK_KEY) ?? "[]"),
  theme: true,
  newPage: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavourites: (state, action: PayloadAction<IMovies>) => {
      state.favourites.push(action.payload);
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite: (state, action: PayloadAction<IMovies>) => {
      state.favourites = state.favourites.filter(
        (fv) => fv.id !== action.payload.id
      );
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites));
    },
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
    changeNewPage: (state, action: PayloadAction<number>) => {
      state.newPage = action.payload;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const { addFavourites, removeFavourite, changeTheme, changeNewPage } =
  actions;
export default reducer;

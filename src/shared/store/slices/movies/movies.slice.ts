import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FVK_KEY } from "../../../constants"
import { Movies } from "../../../types"

interface InitialState {
  favourites: Movies[]
  newPage: number
}

const initialState: InitialState = {
  favourites: JSON.parse(localStorage.getItem(FVK_KEY) ?? "[]"),
  newPage: 1,
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavourites: (state, action: PayloadAction<Movies>) => {
      state.favourites.push(action.payload)
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite: (state, action: PayloadAction<Movies>) => {
      state.favourites = state.favourites.filter((fv) => fv.id !== action.payload.id)
      localStorage.setItem(FVK_KEY, JSON.stringify(state.favourites))
    },
    changeNewPage: (state, action: PayloadAction<number>) => {
      state.newPage = action.payload
    },
  },
})

const { actions, reducer } = moviesSlice

export const { addFavourites, removeFavourite, changeNewPage } = actions
export default reducer

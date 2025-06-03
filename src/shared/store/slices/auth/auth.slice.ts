import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserLogin, UserRegister } from "../../../types"
import { fetchAuthLogin, fetchAuthMe, fetchAuthRegister } from "./auth.thunks"

interface InitialState {
  data: UserLogin | null
  status: string
}

const initialState: InitialState = {
  data: null,
  status: "loading",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(fetchAuthLogin.pending, (state) => {
        state.status = "loading"
        state.data = null
      })
      .addCase(fetchAuthLogin.fulfilled, (state, action: PayloadAction<UserLogin>) => {
        state.status = "loaded"
        state.data = action.payload
      })
      .addCase(fetchAuthLogin.rejected, (state) => {
        state.status = "error"
        state.data = null
      })
      // Register
      .addCase(fetchAuthRegister.pending, (state) => {
        state.status = "loading"
        state.data = null
      })
      .addCase(fetchAuthRegister.fulfilled, (state, action: PayloadAction<UserRegister>) => {
        state.status = "loaded"
        state.data = action.payload
      })
      .addCase(fetchAuthRegister.rejected, (state) => {
        state.status = "error"
        state.data = null
      })
      // Me
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading"
        state.data = null
      })
      .addCase(fetchAuthMe.fulfilled, (state, action: PayloadAction<UserLogin>) => {
        state.status = "loaded"
        state.data = action.payload
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "error"
        state.data = null
      })
      .addDefaultCase(() => {})
  },
})

export const { logout } = authSlice.actions

export const authReducer = authSlice.reducer

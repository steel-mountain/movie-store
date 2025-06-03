import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../../api/axios"
import { UserLogin, UserRegister } from "../../../types"

export const fetchAuthLogin = createAsyncThunk("auth/fetchAuthLogin", async (params: UserLogin) => {
  const { data } = await axios.post("/auth/login", params)
  return data
})

export const fetchAuthRegister = createAsyncThunk("auth/fetchAuthRegister", async (params: UserRegister) => {
  const { data } = await axios.post("/auth/register", params)
  return data
})

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me")
  return data
})

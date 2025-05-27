import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IUserRegister, UserLogin } from "./../../models/models-Users";

export const fetchAuthLogin = createAsyncThunk(
  "auth/fetchAuthLogin",
  async (params: UserLogin) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const fetchAuthRegister = createAsyncThunk(
  "auth/fetchAuthRegister",
  async (params: IUserRegister) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

interface IInitialState {
  data: UserLogin | null;
  status: string;
}

const initialState: IInitialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthLogin.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(
        fetchAuthLogin.fulfilled,
        (state, action: PayloadAction<UserLogin>) => {
          state.status = "loaded";
          state.data = action.payload;
        }
      )
      .addCase(fetchAuthLogin.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(
        fetchAuthMe.fulfilled,
        (state, action: PayloadAction<UserLogin>) => {
          state.status = "loaded";
          state.data = action.payload;
        }
      )
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchAuthRegister.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(
        fetchAuthRegister.fulfilled,
        (state, action: PayloadAction<IUserRegister>) => {
          state.status = "loaded";
          state.data = action.payload;
        }
      )
      .addCase(fetchAuthRegister.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addDefaultCase(() => {});
  },
});

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

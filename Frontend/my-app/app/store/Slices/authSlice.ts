import api from "@/app/utils/apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  token: Cookies.get("token") || null,
  isAuthenticated: !!Cookies.get("token"),
  loading: false,
  error: null,
};

// ================= LOGIN =================
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const res = await api.post("/auth/login", userData);

      if (res.data.success) {
        toast.success(res.data.message || "Login Successful");
        return res.data; // ✅ FIX
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

// ================= SIGNUP =================
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", userData);

      if (res.data.success) {
        toast.success(res.data.message || "Signup Successful");
        return res.data; // ✅ FIX
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      Cookies.remove("token");
      toast.success("Logout Successful");
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        Cookies.set("token", action.payload.token);
      })

      // SIGNUP
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        Cookies.set("token", action.payload.token);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
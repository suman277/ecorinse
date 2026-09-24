import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./loginThunk";

const initialState = {
  response: null,
  error: "",
  isLoading: false,
  isAuthenticated: false,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    clearReducer: (state) => {
      return initialState;
    },
    setIsAuthenticated: (state, action) =>
      (state.isAuthenticated = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.response = null;
        ((state.isLoading = true), (state.error = ""));
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isAuthenticated = Boolean(action.payload?.access_token);
        ((state.isLoading = false), (state.error = ""));
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.response = null;
        state.isAuthenticated = false;
        ((state.isLoading = false), (state.error = action.payload));
      });
  },
});

export const { clearReducer } = loginSlice.actions;
export default loginSlice.reducer;

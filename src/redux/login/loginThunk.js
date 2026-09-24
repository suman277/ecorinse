import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "../../apiMethods";
import { getAlertMessage } from "../alert/alertSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginThunk = createAsyncThunk(
  "login-thunk",
  async (payload, thunkAPI) => {
    try {
      const response = await postAPI(`${baseUrl}auth/login`, payload);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Logged in successfully",
          isError: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        getAlertMessage({
          message: error.message,
          isError: true,
        }),
      );
      return thunkAPI.rejectWithValue(error.message)
    }
  },
);

const baseURL = import.meta.env.VITE_BASE_URL;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI } from "../../apiMethods";

export const getPreviousOrders = createAsyncThunk(
  "prev-orders",
  async (query, thunkAPI) => {
    try {
      const response = await getAPI(`${baseURL}order/previous`, query);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

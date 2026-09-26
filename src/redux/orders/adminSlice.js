import { createSlice } from "@reduxjs/toolkit";
import { getPreviousOrders } from "./adminThunk";

const initialState = {
  response: [],
  isLoading: false,
  error: "",
};

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPreviousOrders.pending, (state, action) => {
        state.isLoading = true;
        state.response = null;
        state.error = "";
      })
      .addCase(getPreviousOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload.previous_orders;
        state.error = "";
      })
      .addCase(getPreviousOrders.rejected, (state, action) => {
        state.error = action.payload;
        state.response = null;
        state.isLoading = false;
      });
  },
});

export default adminSlice.reducer;

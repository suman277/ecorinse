import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isError: "",
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    getAlertMessage: (state, action) => {
      state.message = action.payload.message;
      state.isError = action.payload.isError;
    },
  },
});

export const { getAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;

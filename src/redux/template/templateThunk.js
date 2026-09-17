import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI } from "../../apiMethods";
import { getAlertMessage } from "../alert/alertSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getTemplate = createAsyncThunk(
  "template-details",
  async (_, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}template`);
      console.log(response)
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        getAlertMessage({
          message: error.detail,
          isError: true,
        }),
      );
    }
  },
);

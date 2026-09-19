import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, putAPI } from "../../apiMethods";
import { getAlertMessage } from "../alert/alertSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getTemplate = createAsyncThunk(
  "template-details",
  async (_, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}template`);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Template Updated Successfully",
          isError: false,
        }),
      );
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

export const createUpdateTemplate = createAsyncThunk(
  "create-edit-template",
  async (payload, thunkAPI) => {
    try {
      const response = await putAPI(`${baseUrl}template/`, payload);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Template Updated Successfully",
          isError: false,
        }),
      );
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, putAPI } from "../../apiMethods";
import { getAlertMessage } from "../alert/alertSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getTemplateDetails = createAsyncThunk(
  "template-details",
  async (query, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}template/details`, query);
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

export const getTemplates = createAsyncThunk(
  "templates",
  async (_, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}template`);
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

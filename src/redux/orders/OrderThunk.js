import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, postAPI, putAPI } from "../../apiMethods";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getOrders = createAsyncThunk(
  "/orders-list",
  async (query, thunkAPI) => {
    try {
      console.log("Inside get Order api", baseUrl);
      const response = await getAPI(`${baseUrl}order/`, query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getDashboardDetails = createAsyncThunk(
  "dashboard-details",
  async (_, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}order/dashboard`);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getOrderItemDetails = createAsyncThunk(
  "/orders-list-items",
  async (orderId, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}order/item-details/${orderId}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getOrder = createAsyncThunk(
  "/order",
  async (orderId, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}order/${orderId}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createOrder = createAsyncThunk(
  "/create-order",
  async (payload, thunkAPI) => {
    try {
      const response = await postAPI(`${baseUrl}order/`, payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createOrderItems = createAsyncThunk(
  "/create-order-items",
  async ({ orderId, payload }, thunkAPI) => {
    console.log("orderId", orderId);
    console.log("Inside thunk", payload);
    try {
      const response = await postAPI(
        `${baseUrl}order/items/${orderId}`,
        payload,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateOrderItems = createAsyncThunk(
  "/update-order-items",
  async (orderId, payload, thunkAPI) => {
    try {
      const response = await putAPI(
        `${baseUrl}/order/items/${orderId}`,
        payload,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

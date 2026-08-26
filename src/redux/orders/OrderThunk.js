import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, postAPI, putAPI, deleteAPI } from "../../apiMethods";
import { getAlertMessage } from "../alert/alertSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getOrders = createAsyncThunk(
  "/orders-list",
  async (query, thunkAPI) => {
    try {
      const response = await getAPI(`${baseUrl}order/`, query);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Order Fetched Successfully",
          isError: false,
        }),
      );
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
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Order Created Successfully",
          isError: false,
        }),
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(
        getAlertMessage({
          message: error.detail || "An Internal Error Occured",
          isError: true,
        }),
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createOrderItems = createAsyncThunk(
  "/create-order-items",
  async ({ orderId, payload }, thunkAPI) => {
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

export const updateOrder = createAsyncThunk(
  "update-order",
  async ({ orderId, payload }, thunkAPI) => {
    try {
      const response = await putAPI(`${baseUrl}order/${orderId}`, payload);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Order Updated successfully",
          isError: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        getAlertMessage({
          message: error.detail || "An internal error occured",
          isError: true,
        }),
      );
      thunkAPI.rejectWithValue("An internal error occured");
    }
  },
);

export const deleteOrder = createAsyncThunk(
  "delete-api",
  async (id, thunkAPI) => {
    try {
      const response = await deleteAPI(`${baseUrl}order/${id}`);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Order Deleted Successfuly",
          isError: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        getAlertMessage({
          message: error.detail || "An internal error occured",
          isError: true,
        }),
      );
      console.error("An intenal error occured", error.detail);
    }
  },
);

export const validateAddress = createAsyncThunk(
  "validate-address",
  async (query, thunkAPI) => {
    console.log("inside validate api");
    try {
      const response = await getAPI(`${baseUrl}order/validate`, query);
      return response;
    } catch (error) {
      console.log("error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createOrderWithItem = createAsyncThunk(
  "create-order-with-item",
  async (payload, thunkAPI) => {
    console.log("Inside the thunk function")
    try {
      const resposne = await postAPI(`${baseUrl}order/itemsss`, payload);
      thunkAPI.dispatch(
        getAlertMessage({
          message: "Order created successfully",
          isError: false,
        }),
      );
      return resposne;
    } catch (error) {
      console.log("An internal error occured");
    }
  },
);

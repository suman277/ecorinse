import { createSlice } from "@reduxjs/toolkit";
import {
  getOrders,
  getOrderItemDetails,
  getOrder,
  getDashboardDetails,
} from "./OrderThunk";

const initialState = {
  orderList: {
    response: [],
    isLoading: false,
    error: "",
  },
  orderItemDetailsList: {
    response: [],
    isLoading: false,
    error: "",
  },
  order: {
    response: {},
    isLoading: false,
    error: "",
  },
  dashboardDetails: {
    response: {},
    isLoading: false,
    error: "",
  },
};

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    clearOrderList: (state) => {
      state.orderList = initialState.orderList;
    },
    clearOrderItemDetailsList: (state) => {
      state.orderItemDetailsList = initialState.orderItemDetailsList;
    },
    clearOrder: (state) => {
      state.order = initialState.order;
    },
    clearDashBoardDetails: (state) => {
      state.dashboardDetails = initialState.dashboardDetails;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state, action) => {
        state.orderList.isLoading = true;
        state.orderList.error = "";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orderList.response = action.payload;
        state.orderList.isLoading = false;
        state.orderList.error = "";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.orderList.isLoading = false;
        state.orderList.error = action.payload;
      })
      .addCase(getOrderItemDetails.pending, (state, action) => {
        state.orderItemDetailsList.isLoading = true;
        state.orderItemDetailsList.error = "";
      })
      .addCase(getOrderItemDetails.fulfilled, (state, action) => {
        state.orderItemDetailsList.response = action.payload;
        state.orderItemDetailsList.isLoading = false;
        state.orderItemDetailsList.error = "";
      })
      .addCase(getOrderItemDetails.rejected, (state, action) => {
        state.orderItemDetailsList.isLoading = false;
        state.orderItemDetailsList.error = action.payload;
      })
      .addCase(getOrder.pending, (state, action) => {
        state.order.isLoading = true;
        state.order.error = "";
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order.response = action.payload;
        state.order.isLoading = false;
        state.order.error = "";
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.order.isLoading = false;
        state.order.error = action.payload;
      })
      .addCase(getDashboardDetails.pending, (state, action) => {
        state.dashboardDetails.isLoading = true;
        state.dashboardDetails.error = "";
      })
      .addCase(getDashboardDetails.fulfilled, (state, action) => {
        state.dashboardDetails.response = action.payload;
        state.dashboardDetails.isLoading = false;
        state.dashboardDetails.error = "";
      })
      .addCase(getDashboardDetails.rejected, (state, action) => {
        state.dashboardDetails.isLoading = false;
        state.dashboardDetails.error = action.payload;
      });
  },
});

export const { clearOrderList, clearOrderItemDetailsList, clearOrder, clearDashBoardDetails } =
  orderSlice.actions;
export default orderSlice.reducer;

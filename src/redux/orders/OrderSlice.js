import { createSlice } from "@reduxjs/toolkit";
import {
  getOrders,
  getOrderItemDetails,
  getOrder,
  getDashboardDetails,
  validateAddress,
  getInvoice,
  downloadInvoice,
  generateInvoice
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
  addressDetails: {
    response: null,
    isLoading: false,
    error: "",
  },
  checkInvoice: {
    response: null,
    isLoading: false,
    error: "",
  },
  invoiceDetails: {
    response: {},
    isLoading: false,
    error: "",
  },
  generateInvoiceDetails : {
    response : {},
    isLoading : false,
    error : ""
  }
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
    clearAddressDetails: (state) => {
      state.addressDetails = initialState.addressDetails;
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
      })
      .addCase(validateAddress.pending, (state, action) => {
        state.addressDetails.isLoading = true;
        state.addressDetails.error = "";
      })
      .addCase(validateAddress.fulfilled, (state, action) => {
        state.addressDetails.response = action.payload;
        state.addressDetails.isLoading = false;
        state.addressDetails.error = "";
      })
      .addCase(validateAddress.rejected, (state, action) => {
        state.addressDetails.isLoading = false;
        state.addressDetails.error = action.payload || "";
        state.addressDetails.response = null;
      })
      .addCase(getInvoice.pending, (state) => {
        state.checkInvoice.isLoading = true;
        state.checkInvoice.error = "";
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.checkInvoice.isLoading = true;
        state.checkInvoice.error = "";
        state.checkInvoice.response = action.payload.invoice_details;
      })
      .addCase(getInvoice.rejected, (state, action) => {
        state.checkInvoice.isLoading = false;
        state.checkInvoice.error = action.payload || "";
      })
      .addCase(downloadInvoice.pending, (state) => {
        state.invoiceDetails.isLoading = true;
        state.invoiceDetails.error = "";
      })
      .addCase(downloadInvoice.fulfilled, (state, action) => {
        state.invoiceDetails.isLoading = false;
        state.invoiceDetails.error = "";
        state.invoiceDetails.response = action.payload;
      })
      .addCase(downloadInvoice.rejected, (state, action) => {
        state.invoiceDetails.isLoading = false;
        state.invoiceDetails.error = action.payload || "";
      })
        .addCase(generateInvoice.pending, (state) => {
        state.generateInvoiceDetails.isLoading = true;
        state.generateInvoiceDetails.error = "";
      })
      .addCase(generateInvoice.fulfilled, (state, action) => {
        state.generateInvoiceDetails.isLoading = false;
        state.generateInvoiceDetails.error = "";
        state.generateInvoiceDetails.response = action.payload;
      })
      .addCase(generateInvoice.rejected, (state, action) => {
        state.generateInvoiceDetails.isLoading = false;
        state.generateInvoiceDetails.error = action.payload || "";
      });
  },
});

export const {
  clearOrderList,
  clearOrderItemDetailsList,
  clearOrder,
  clearDashBoardDetails,
  clearAddressDetails,
} = orderSlice.actions;
export default orderSlice.reducer;

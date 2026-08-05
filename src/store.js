import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./redux/orders/OrderSlice.js";
import alertSlice from "./redux/alert/alertSlice.js";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    alert: alertSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./redux/orders/OrderSlice.js";
import alertSlice from "./redux/alert/alertSlice.js";
import CartSlice  from "./redux/cart/cartSlice.js";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    alert: alertSlice,
    cart : CartSlice
  },
});

export default store;

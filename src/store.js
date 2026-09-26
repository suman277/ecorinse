import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./redux/orders/OrderSlice.js";
import alertSlice from "./redux/alert/alertSlice.js";
import CartSlice from "./redux/cart/cartSlice.js";
import templateSlice from "./redux/template/templateSlice.js";
import loginSlice from "./redux/login/loginSlice.js";
import adminSlice from "./redux/orders/adminSlice.js";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    alert: alertSlice,
    cart: CartSlice,
    template: templateSlice,
    login: loginSlice,
    admin: adminSlice,
  },
});

export default store;

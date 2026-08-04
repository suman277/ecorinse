import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./redux/orders/OrderSlice.js"

const store = configureStore({
    reducer : {
        orders : orderReducer
    }
})

export default store;
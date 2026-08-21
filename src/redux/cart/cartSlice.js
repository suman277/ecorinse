import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        return;
      }
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addItem, removeItem, deleteItem } = CartSlice.actions;

export default CartSlice.reducer;

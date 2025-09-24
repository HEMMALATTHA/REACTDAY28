// src/store.js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Add product
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Remove product by id
    },
    clearCart: () => {
      return []; // Clear entire cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

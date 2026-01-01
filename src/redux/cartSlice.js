import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

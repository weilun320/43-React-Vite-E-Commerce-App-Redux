import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Check if item is already in the cart
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If item exists in the cart, increment the amount
        state[itemIndex].amount += 1;
      }
      else {
        // If item does not exist in the cart, add it with amount: 1
        const newProduct = { ...action.payload, amount: 1 };
        console.log(newProduct);
        state.push(newProduct);
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.splice(itemIndex, 1);
      }
    },
    addOneQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state[itemIndex].amount += 1;
      }
    },
    minusOneQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state[itemIndex].amount -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, addOneQuantity, minusOneQuantity } = cartSlice.actions;

export default cartSlice.reducer;
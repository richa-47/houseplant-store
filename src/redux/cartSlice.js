import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!state.cartItems.find(p => p.id === item.id)) {
        state.cartItems.push({ ...item, quantity: 1 });
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.cartItems.find(p => p.id === action.payload);
      state.cartItems = state.cartItems.filter(p => p.id !== action.payload);
      state.totalItems -= item.quantity;
      state.totalPrice -= item.quantity * item.price;
    },
    increase: (state, action) => {
      const item = state.cartItems.find(p => p.id === action.payload);
      item.quantity++;
      state.totalItems++;
      state.totalPrice += item.price;
    },
    decrease: (state, action) => {
      const item = state.cartItems.find(p => p.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalItems--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { addToCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;

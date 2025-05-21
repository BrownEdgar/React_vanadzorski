import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@f/products/productsSlice';

const store = configureStore({
  reducer: {
    actions: productSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@f/products/productsSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;

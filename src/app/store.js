import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@f/products/productsSlice';
import featuredSlice from '@f/featured/featuredSlice';

const store = configureStore({
  reducer: {
    actions: productSlice,
    featured: featuredSlice
  },
});

export default store;

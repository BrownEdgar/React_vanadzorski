import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllActions = createAsyncThunk(
  '/products/getAllActions',
  async () => {
    const response = await axios.get('http://localhost:5000/actions');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllActions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;

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
  selectors: {
    getActionById(state) {
      console.log(state);
      return state

    }
  }
});

export const { getActionById } = productSlice.selectors

export default productSlice.reducer;

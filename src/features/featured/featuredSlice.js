import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAllfeatured = createAsyncThunk(
  '/products/getAllfeatures',
  async () => {
    const response = await axios.get('http://localhost:5000/fetured');
    return response.data;
  }
);


const featuredSlice = createSlice({
  name: 'featured',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllfeatured.fulfilled, (state, action) => {
      return action.payload;
    });
  },
})
export default featuredSlice.reducer;

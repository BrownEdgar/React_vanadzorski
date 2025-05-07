import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const getAsyncTwetts = createAsyncThunk('twetts/getAsyncTwetts', async () => {
  const response = await axios.get('http://localhost:5000/twetts');
  return response.data
})

const twettsSlice = createSlice({
  name: "twetts",
  initialState: {
    data: [],
    loading: false
  },
  reducers: {
    deleteTwettById(state, action) {
      state.data = state.data.filter(elem => elem.id !== action.payload.id)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTwetts.pending, (state,) => {
        state.loading = true
      })
      .addCase(getAsyncTwetts.fulfilled, (_, action) => {
        return {
          data: action.payload,
          loading: false
        }
      })
  }
})

export const { deleteTwettById } = twettsSlice.actions

export default twettsSlice.reducer;

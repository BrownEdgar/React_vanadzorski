import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAsyncTwetts = createAsyncThunk('twetts/getAsyncTwetts', async () => {
  const response = await axios.get(import.meta.env.VITE_DB_URL);
  return response.data
})

export const saveTwett = createAsyncThunk('twetts/saveTwett', async (user) => {
  const response = await axios.post(import.meta.env.VITE_DB_URL, user);
  return response.data
})

const twettsSlice = createSlice({
  name: "tweets",
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
      .addCase(getAsyncTwetts.pending, (state) => {
        state.loading = true
      })
      .addCase(getAsyncTwetts.fulfilled, (_, action) => {
        return {
          data: action.payload,
          loading: false
        }
      })
      .addCase(saveTwett.rejected, (_, action) => {
        return {
          data: [],
          loading: false,
          error: action.error.message
        }
      })
  },
  selectors: {
    getAllTwetts: (state, name = "") => {
      if (name) {
        const data = state.data.filter(elem => elem.name === name)
        return { ...state, data }
      }
      return state
    }
  }
})

export const { deleteTwettById } = twettsSlice.actions
export const { getAllTwetts } = twettsSlice.selectors

export default twettsSlice.reducer;



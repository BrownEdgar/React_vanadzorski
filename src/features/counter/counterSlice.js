import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    plus(state, action) {
      state += action.payload
      return state
    },
    minus(state) {
      return state - 1
    }
  }
})

export const { plus, minus } = counterSlice.actions

export default counterSlice.reducer;


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
  },
  selectors: {
    getCurrentCounter: (state) => state
  }
})

export const { plus, minus } = counterSlice.actions
export const { getCurrentCounter } = counterSlice.selectors

export default counterSlice.reducer;


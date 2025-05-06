import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    savePosts(_, action) {
      return action.payload
    },
    deleteAllPosts() {
      return []
    }
  }
})

export const { savePosts, deleteAllPosts } = postsSlice.actions


export default postsSlice.reducer;


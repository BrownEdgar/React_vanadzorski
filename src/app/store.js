import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import twettsSlice from "../features/twetts/twettsSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    tweets: twettsSlice
  }
})
export default store
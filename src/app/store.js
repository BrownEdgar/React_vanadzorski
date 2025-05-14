import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { plus } from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import twettsSlice from "../features/twetts/twettsSlice";


const myMiddleware = (store) => (next) => (action) => {
  // Ստանում է արդի "պահեստի" պարունակությունը 
  // store.getstate()


  if (action.type === 'twetts/saveTwett/pending') {
    console.log(store.getState());
    const { username } = action.payload;
    const twetts = store.getState().twetts.data

    const x = twetts.data.some(elem => elem.username.toLowerCase() === username.toLowerCase())

    if (x) {

      alert('user Exist');
      return
    }
  }
  next(action)
}


const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    tweets: twettsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myMiddleware),
})
export default store
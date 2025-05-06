import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { minus, plus } from './features/counter/counterSlice';
import './App.css'
import Posts from './components/Posts/Posts';
import { deleteAllPosts } from './features/posts/postsSlice';

function App() {
  const x = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const handleclick = () => {
    dispatch(plus(200))
  }

  return (
    <div className="App">
      <h1>WHAT IS REDUX </h1>
      <h1>{x}</h1>
      <button onClick={handleclick}>add</button>
      <button onClick={() => dispatch(deleteAllPosts())}>minus</button>
      <hr />
      <Posts />
    </div>
  );
}

export default App;

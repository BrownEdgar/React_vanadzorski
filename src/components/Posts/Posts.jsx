import axios from 'axios';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { savePosts } from '../../features/posts/postsSlice';

function Posts() {

  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => dispatch(savePosts(res.data)))
  }, [dispatch]);



  return <div className='Posts'>
    {posts.map(elem => {
      return (
        <div className="Posts__item" key={elem.id}>
          <h2>{elem.title}</h2>
          <p>{elem.body}</p>
        </div>
      )
    })}
  </div>;
}

export default Posts;

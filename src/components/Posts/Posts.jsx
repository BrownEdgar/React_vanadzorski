import React, { useState, useEffect } from "react";
import './Posts.css'
import Post from '../Post/Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [currentPost, setcurrentPost] = useState(1)


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
      const data = await response.json()
      setPosts(data)
    }
    fetchData()
  }, [])


  return <div>
    <h1>Posts {currentPost}</h1>
    <button onClick={() => setcurrentPost(currentPost + 1)}>change</button>
    {
      posts.map((elem) => {
        return (
          <Post elem={elem} key={elem.id} />
        )
      })
    }
  </div>;
}

export default Posts;

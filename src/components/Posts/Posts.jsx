import React, { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);


  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await response.json()
    setPosts(data)
  }

  return <div>
    <h1>Posts ok</h1>
    {
      posts.map(({ title, id }) => {
        return <h2 key={id}>{title}</h2>
      })
    }
    <button onClick={fetchData}>get Posts</button>
  </div>;
}

export default Posts;

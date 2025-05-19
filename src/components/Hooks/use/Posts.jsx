'use client'
import { use } from "react";


function Posts() {
  const data = use(fetch('https://jsonplaceholder.typicode.com/posts'))




  return <div>
    <pre>{JSON.stringify(data, null, 1)}</pre>
  </div>;
}

export default Posts;

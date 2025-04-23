import React from "react";
import { useNavigate } from 'react-router';

function Blog() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1)
  }

  return <div>
    <h1>Blog Page</h1>
    <button onClick={handleClick}>All posts</button>
  </div>;
}

export default Blog;

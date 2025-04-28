import React from "react";
import { useNavigate, useOutletContext } from 'react-router';

function Blog() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1)
  }
  const x = useOutletContext()
  console.log("x", x);

  return <div>
    <h1>Blog Page</h1>
    <button onClick={handleClick}>All posts</button>
  </div>;
}

export default Blog;

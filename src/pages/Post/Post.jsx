import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router';

import './Post.scss'
import PostLoader from '../../Components/Loaders/PostLoader';
function Post() {
  const { id } = useParams()
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if (+id && id <= 100) {
      setLoading(true)
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .finally(() => setLoading(false))
    } else {

      setPost({
        id: '?',
        title: `Post  not found 🚫`,
        body: "no content..."
      })
      setLoading(false)
    }
  }, [id]);

  const switchPost = (action) => {
    if (+id && action === 'prev' && +id > 1) {
      navigate(`/posts/${+id - 1}`)
    } else if (+id && action === 'next') {
      navigate(`/posts/${+id + 1}`)
    } else {
      navigate(`/posts/1`)
    }
  }

  return <div>
    <h1>Welcom to the POST N {id}</h1>
    <button className='btn' onClick={() => navigate('/posts')}>All posts</button>
    <div className="Post">

      {loading ? <PostLoader /> : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <span>{post?.id}</span>
        </>
      )}
      <div className='Post__footer'>
        <button className='btn' onClick={() => switchPost('prev')}>prev</button>
        <button className='btn' onClick={() => switchPost('next')}>next</button>
      </div>
    </div>

  </div>;
}

export default Post;

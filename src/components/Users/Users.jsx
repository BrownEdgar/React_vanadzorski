import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePosts } from '../../features/posts/postsSlice'

function Users() {
  const users = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => dispatch(savePosts(res.data)))
  }, [dispatch])
const btn = handleclick()
  return (
    <div className="Users">
      {users.map((elem) => {
        return (
          <div className="Users__item" key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
            <button onClick= {handleclick} ></button>
          </div>
        )
      })}
    </div>
  )
}

export default Users

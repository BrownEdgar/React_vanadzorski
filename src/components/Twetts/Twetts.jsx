
import './Twetts.scss'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTwettById, getAsyncTwetts, saveTwett } from '../../features/twetts/twettsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

function Twetts() {
  const twetts = useSelector((state) => state.tweets)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAsyncTwetts())
  }, []);


  if (twetts.loading) {
    return <h1>Loading....</h1>
  }
  if (twetts.error) {
    return <h1>{twetts.error}</h1>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const user = Object.fromEntries(formdata);
    user.id = Math.round(Math.random() * 1e5)
    user.image = './images/photo2.png'
    // dispatch(saveTwett(user))

    const x = twetts.data.some(elem => elem.username.toLowerCase() === user.username.toLowerCase())
    if (!x) {
      axios.post(import.meta.env.VITE_DB_URL, user)
        .then(res => console.log(res))
    } else {
      alert("userExist")
    }
  }

  return (
    <div className='Twetts'>
      <div className="Twetts__header">
        <p>Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.</p>
        <h1>Don’t just take our word for it {counter}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" id='name' name='name' placeholder='name' />
        <input type="text" id='username' name='username' placeholder='username' />
        <textarea name="description" id="description" placeholder='description' rows={6}></textarea>
        <input type="submit" value="save" />
      </form>

      <div className="Twetts__blog">
        {twetts.data.map(elem => {
          return (
            <div key={elem.id}>
              <div className="blog">
                <img src={elem.image} alt={elem.name} />
                <h3>{elem.name}</h3>
                <p>{elem.username}</p>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </div>

              <div className='Twetts__blog-comment'>
                <p>{elem.description}</p>
                {elem?.extradescription && <p>{elem.extradescription}</p>}
              </div>

              <div>
                <button className='btn btn__delete' onClick={() => {
                  dispatch(deleteTwettById({ id: elem.id }))
                }}>delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Twetts;

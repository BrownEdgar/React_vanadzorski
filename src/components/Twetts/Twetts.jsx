
import './Twetts.scss'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTwettById, getAsyncTwetts } from '../../features/twetts/twettsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Twetts() {
  const twetts = useSelector((state) => state.tweets)
  const dispatch = useDispatch()
  console.log(twetts);

  useEffect(() => {
    dispatch(getAsyncTwetts())
  }, []);


  if (twetts.loading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className='Twetts'>
      <div className="Twetts__header">
        <p>Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.</p>
        <h1>Don’t just take our word for it</h1>
      </div>

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

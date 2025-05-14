
import './Twetts.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTwettById, getAllTwetts, getAsyncTwetts, } from '../../features/twetts/twettsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { getCurrentCounter } from '../../features/counter/counterSlice';
import AddForm from '../AddForm/AddForm';


function Twetts() {
  const twetts = useSelector((state) => getAllTwetts(state))
  const counter = useSelector(getCurrentCounter)
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


  return (
    <div className='Twetts'>
      <div className="Twetts__header">
        <p>Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.</p>
        <h1>Don’t just take our word for it {counter}</h1>
      </div>
      <AddForm />
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

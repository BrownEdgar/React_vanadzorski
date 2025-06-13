
import ArrowToRight from '../../Icons/ArrawIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Cars({ cars, handleDelete }) {
  return (
    <div className='Axios'>
      {
        cars.map((elem) => {
          return (

            <div key={elem.id}>
              <h3>{elem.name} </h3>
              <ul>
                <li><span><ArrowToRight /></span>{elem.id}</li>
                <li><span>color:</span>{elem.color}</li>
                <li><span>price:</span>{elem.price}</li>
              </ul>
              <button className="btn__del" onClick={() => handleDelete(elem.id)}>
                <FontAwesomeIcon icon={faXmark} spin />
              </button>
            </div>
          )
        })
      }
    </div>
  );
}

export default Cars;

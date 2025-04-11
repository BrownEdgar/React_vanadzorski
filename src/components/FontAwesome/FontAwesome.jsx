
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import './FontAwesome.css'


import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons/faUserCheck';
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock';


function FontAwesome() {
  const [toggleIcon, settoggleIcon] = useState(false);


  const hangeChange = () => settoggleIcon(!toggleIcon)

  return <div>
    <ul>
      <li>
        <button onClick={hangeChange}>
          LOGIN  <FontAwesomeIcon icon={faUserCircle} color='#10cd04' size='2xs' listItem />
        </button>
      </li>
      <li>
        <button onClick={hangeChange}>
          LOGIN  <FontAwesomeIcon icon={faUserCheck} color='#10cd04' size='sm' listItem />
        </button>
      </li>
      <li>

        <FontAwesomeIcon icon={faUserDoctor} color='#10cd04' size='sm' />    LOGIN

      </li>
      <li>
        <button onClick={hangeChange}>
          LOGIN  <FontAwesomeIcon icon={faUserClock} color='#10cd04' size='2xl' listItem />
        </button>
      </li>
      <li>
        <button onClick={hangeChange}>
          LOGIN  <FontAwesomeIcon icon={faUserCircle} color='#10cd04' size='10x' listItem />
        </button>
      </li>
    </ul>

  </div>;
}

export default FontAwesome;

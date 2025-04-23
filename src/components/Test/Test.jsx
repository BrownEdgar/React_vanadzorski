import './Test.scss'
import React, { useState, useEffect } from 'react';

function Test() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(x => setdata(x))
  }, [])

  return (
    <div className='Test'>
      {
        data.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default Test;

import React from "react";
import './Pagination.css'
function Pagination({ total, perPage, setPage, page }) {

  const arr = []
  for (let i = 0; i < Math.ceil(total / perPage); i++) {
    arr.push(i + 1)
  }


  return <div className='Pagination'>
    <ul>
      {
        arr.map(n => <li
          key={n}
          onClick={() => setPage(n)}
          className={`${page === n ? "active" : ''} `}
        >
          {n}
        </li>)
      }
    </ul>

  </div>;
}

export default Pagination;

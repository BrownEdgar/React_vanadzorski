import React from "react";
import './Pagination.css'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { faArrowAltCircleRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
function Pagination({ total, perPage, handlePageClick }) {



  return <div className='Pagination'>
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(total / perPage)}
      previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
      renderOnZeroPageCount={null}
      activeClassName="active"
    />

  </div>;
}

export default Pagination;

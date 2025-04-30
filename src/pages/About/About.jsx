import React, { useEffect, useState } from "react";
import { Link, redirect, useLoaderData } from 'react-router';
import './About.scss'
import axios from 'axios';


import Pagination from '../../Components/Pagination/Pagination';
function About() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(2);
  const [perPage, setPerPage] = useState(10);
  const [isLoading, setisLoading] = useState(false);




  useEffect(() => {
    setisLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: perPage,
        _start: (page * perPage) - perPage
      }
    })
      .then(res => setdata(res.data))
      .finally(() => setisLoading(false))
  }, [page]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)

  }

  return <div className='main_flex'>
    <h1>Posts</h1>
    <div className={`Posts ${isLoading ? "Posts__loading" : ""}`}>
      {
        data?.map(elem => {
          return (
            <div key={elem.id}>
              <span>{elem.id}</span>
              <Link to={`${elem.id}`}>{elem.title}</Link>
            </div>
          )
        })
      }
    </div>
    <Pagination perPage={perPage} total={100} handlePageClick={handlePageClick} />

  </div>;
}

// export const fetchData = async (s) => {
//   console.log(s);


//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json()
//   return data
// }


export default About;

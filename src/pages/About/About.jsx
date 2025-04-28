import React, { useEffect, useState } from "react";
import { Link, redirect, useLoaderData } from 'react-router';
import './About.scss'
import axios from 'axios';
import Pagination from '../../Components/Pagination/Pagination';
function About() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(2);
  const [perPage, setPerPage] = useState(1);



  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: perPage,
        _start: (page * perPage) - perPage
      }
    }).then(res => setdata(res.data))
  }, [page]);



  return <div>
    <h1>Posts</h1>
    <div className="Posts">
      {
        data?.map(elem => {
          return (
            <div key={elem.id}>

              <Link to={`${elem.id}`}>{elem.title}</Link>
              <span>{elem.id}</span>
            </div>
          )
        })
      }
    </div>
    <Pagination perPage={perPage} total={100} setPage={setPage} page={page} />
  </div>;
}

// export const fetchData = async (s) => {
//   console.log(s);


//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json()
//   return data
// }


export default About;

import React from "react";
import { useLoaderData } from 'react-router';
import './About.scss'
function About() {
  const data = useLoaderData();


  return <div>
    <h1>Posts</h1>
    <div className="Posts">
      {
        data.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })
      }
    </div>
  </div>;
}

export const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const data = await response.json()
  return data
}


export default About;

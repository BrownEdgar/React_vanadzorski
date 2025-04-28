import React from "react";
import { Link, redirect, useLoaderData } from 'react-router';
import './About.scss'
function About() {
  const data = useLoaderData();


  return <div>
    <h1>Posts</h1>
    <div className="Posts">
      {
        data?.map(elem => {
          return (
            <div key={elem.id}>
              <Link to={`${elem.id}`}>{elem.title}</Link>
            </div>
          )
        })
      }
    </div>
  </div>;
}

export const fetchData = async () => {
  const isLogin = !!localStorage.getItem('login')
  console.log(isLogin);

  if (!isLogin) {
    return redirect('/sign-in');
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()
  return data
}


export default About;

import React from "react";
import { Link } from 'react-router';

function ErrorPage() {
  return <div>
    <h1>404 | not Found 🚫</h1>
    <Link to={'/'} >go home</Link>
  </div>;
}

export default ErrorPage;

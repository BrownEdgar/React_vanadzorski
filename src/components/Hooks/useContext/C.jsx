

import React, { useContext } from "react";
import { MyContext } from './Contexts';

export default function C() {
  const { title } = useContext(MyContext)



  return <div>
    <h1>Component C</h1>
    <button>{title}</button>
  </div>;
}

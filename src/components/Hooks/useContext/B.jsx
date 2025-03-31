

import React, { useContext } from "react";
import C from './C';
import { MyContext } from './Contexts';

export default function B() {
  const { title2 } = useContext(MyContext)
  return <div>
    <h1>{title2}</h1>
    <C />
  </div>;
}

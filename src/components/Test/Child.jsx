import React from "react";

export default function (props) {
  console.log(props);

  return <div><button onClick={() => props.handleIndex(2)}>index</button></div>;
}

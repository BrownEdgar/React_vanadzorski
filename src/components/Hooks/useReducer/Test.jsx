import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "add": return state + 1
    case "minus": return state - 1
    case "devide": return state / action.payload
    default:
      break;
  }
}
function Test() {

  const [state, dispatch] = useReducer(reducer, 0);

  return <div>
    <h1>{state}</h1>
    <button onClick={() => dispatch({ type: "add" })}>add</button>
    <button onClick={() => dispatch({ type: "minus" })}>minus</button>
    <button onClick={() => dispatch({ type: "devide", payload: 2 })}>devide</button>
  </div>;
}

export default Test;

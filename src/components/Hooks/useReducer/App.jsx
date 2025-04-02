/////////////////////////////////////////////////
// 1 . action-ը պարտադիր պետք է լինի object, որը կունենա պարտադիր "type" դաշը, և optional "payload" հատկությունը:
/////////////////////////////////////////////////

import { useReducer } from 'react';
import reducer, { actionTypes, initialState } from './reducer';

Math.round(Math.random() * 1e5)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return Array.from({ length: 10 }, () => Math.round(Math.random() * 100))
  });




  return <div className='App'>
    <h1 className="title">useReducer</h1>
    <hr />
    <h2>state:{JSON.stringify(state)}</h2>
    <button onClick={() => dispatch({ type: actionTypes.SORT })}>SORT</button>
    <button onClick={() => dispatch({ type: actionTypes.PUSH, payload: [Math.round(Math.random() * 15)] })}>PUSH</button>
    <button onClick={() => dispatch({ type: actionTypes.REMOVE_DUBLICATES })}>remove Duplicates</button>

    <button onClick={() => dispatch({
      type: actionTypes.FILTER, payload: {
        callback: (elem) => elem % 2 === 1
      }
    })}>FILTER</button>
    {/* 
    
    <button onClick={() => dispatch({ type: actionTypes.RANDOM })}>random state</button> */}
  </div>;
}

export default App;

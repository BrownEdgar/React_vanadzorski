import { useState } from 'react';
import './Test.scss'
import Child from './Child';


function Test() {
  const [data, setData] = useState(
    [25, 84, 69, 36, 54]
  );



  const handleIndex = (n) => {
    setData(data.toSpliced(n, 1, 68))
  }

  return (
    <div className='Test'>
      <h1>{JSON.stringify(data)}</h1>
      <Child handleIndex={handleIndex} />
    </div>
  );
}

export default Test;

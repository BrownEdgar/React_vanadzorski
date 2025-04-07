import { useState } from 'react';

function Test() {
  const [data, setData] = useState([2, 3, 4]);

  const handleChange = () => {

    const copy = data.map((elem) => elem ** 2)

    setData(copy)
  }

  return (
    <div className='Test'>

      <h1>Arr: {JSON.stringify(data)}</h1>
      <button onClick={handleChange}>change Age</button>
    </div>
  );
}

export default Test;

import { useState, useEffect } from 'react';
import Title from "../UI/Title/Title";


function App() {
  const [fakePosts, setFakePosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [count, setCount] = useState(1);


  useEffect(() => {
    //   useEffect-ի ասինխրոն ֆունկցիայում error-րը չեն բռնվում
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(() => {
    //     setHasError(true)
    //   })
  }, []);

  if (count > 10) {
    throw new Error("some error message")
  }


  return (
    <div className='App'>
      <Title title="React-error-boundary" />
      <h1>count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default App;

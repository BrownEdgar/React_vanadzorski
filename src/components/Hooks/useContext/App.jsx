////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////



import { useState } from 'react';
import A from './A';
import { MyContext } from './Contexts';
import './App.scss'
import B from './B';



function App() {
  const [title, settitle] = useState("UseContext");

  return <div className='App'>
    <h1>App COMPONENT</h1>
    <MyContext value={{ title: title, title2: "Hedding for 'B' component" }}>
      <A />
      <B />
    </MyContext>



  </div>;
}

export default App;

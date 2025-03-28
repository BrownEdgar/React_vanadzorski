////////////////////////////////////////////////////////////
// 1️⃣. setCount =>   այս օրինակում ասինխռոն աշխատող գործընթաց է 
// 2️⃣. կարող է ստանալ նաև ֆւոնկցիա, `setCount((prevCount) => prevCount + 1)`,որի տարբերությւոնուն կայանում է նրանում,որ, այս ձևով փոխելու ժամանակ հաշվի է նստում մինչև այդ արդեն կատարված փոփ. հետ
////////////////////////////////////////////////////////////

//  hook-ի օգտագորխման կաննոները
////////////////////////////////////////////////////////////
// 1️⃣. ցանկացած hook պետք է ստեղծել միայն վերին մակարդակում, այսինքն սովորական fn-ի մեջ չի կարելի hook սարգել  ֆունկցիան պետք է մեծատառով սկսվի կամ `use` նախածանցով
// 2️⃣. hook-ը չեն ստեղծում պայմանից ելնելով:
////////////////////////////////////////////////////////////

import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return Math.round(Math.random() * 1e5);
  });


  const handleClick = () => {

    setCount(2)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 2)
    console.log(count); // 0 հին արժեքը

  }

  return (
    <div className='App'>
      <Title title='useState' />
      <div>
        <h2>count: {count}</h2>
        <button onClick={handleClick}>Add count</button>
      </div>

    </div>
  );
}

export default App;

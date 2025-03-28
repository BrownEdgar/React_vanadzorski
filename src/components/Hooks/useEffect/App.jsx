////////////////////////////////////////////////////////////
// 1️⃣ useEffect =>  React-ի 3 հիմանական hook-ից մեկը:

// 2️⃣ ստանում է 2 պառամետր: անանուն  Ֆունկցիա և կախվածությունների զանգված
// - եթե զանգվածը դատարկ է, նշ.է, որ React-ը ֆունկցիան կկանչի ՄԻԱՅՆ կոմպոնենտի ծնունդի ժամանակ, այլ ոչ թե թարմացումների ժամանակ
// 3️⃣. [quantity] նշ.է,  React-ը ֆունկցիան կկանչի կոմպոնենտի ծնունդի ժամանակ և ամեն անգամ երբ կփոխվի quantity-ի արժեքը, զանգվածում կարող են լինել մի քանի  կախվածություններ
// 4️⃣. Կոմպոնենտում կարող է լինել մի քանի useEffect
// 5️⃣. useEffect-ը նաև կարող է վերադարձնել ֆունկցիա, որը React-ը կկանչի Կոմպոնենտի էջից հեռանալու ժամանակ
////////////////////////////////////////////////////////////


import { useState, useEffect } from 'react';
import Title from '../../UI/Title/Title';

import './App.scss'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
      const data = await response.json();
      setPosts(data)
    }
    fetchData()
    return () => {
      // last word!! unmounting
      console.log("the end");
    }
  }, []);



  return <div className='App'>
    <Title title='useEffect' />
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(elem => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.title}</td>
                  <td>{elem.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  </div>;
}

export default App;

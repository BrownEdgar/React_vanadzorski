import React, { useState } from "react";
import './App.scss'


export default function App() {
  const [users] = useState({
    1: { id: 1, name: "Armen", surname: 'Poghosyan', age: 32, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    2: { id: 2, name: "Ani", surname: 'Poghosyan', age: 30, image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    3: { id: 3, name: "Gagik", surname: 'Asatryan', age: 29, image: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    4: { id: 4, name: "Kikos", surname: 'Urumyan', age: 42, image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  });

  const [currentUser, setcurrentUser] = useState(1);




  return <div className='App'>
    <h1 className='App__title'>Our USERS</h1>
    <div className="grid">
      <div className="buttons">

        {
          Object.keys(users).map((elem) => {
            return <button key={elem} className={currentUser === elem ? "active" : ""} onClick={() => setcurrentUser(elem)}> {users[elem].name}</button>
          })
        }

      </div>
      <div className="user">
        {/* Պայմանով ենք նկարում, եթե user կա ընտրված նոր ցուցադրում է div-ը */}
        {
          currentUser ? (
            <div>
              <figure>
                <img src={users[currentUser].image} alt="" />
                <figcaption>{users[currentUser].name} | {users[currentUser].age} years old</figcaption>
              </figure>
            </div>
          ) : null
        }
      </div>
    </div>
  </div>;
}

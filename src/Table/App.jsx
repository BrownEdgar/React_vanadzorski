import React, { useState, Fragment } from "react";
import './App.css'
export default function App() {
  const [people, setPeople] = useState([
    { id: 1, firstName: 'Mark', lastName: "Otto", email: "markotto@email.com" },
    { id: 2, firstName: 'Jacob', lastName: "Thornton", email: "acobthornton@email.com" },
    { id: 3, firstName: 'Mark', lastName: "Otto", email: "markotto@email.com" },
    { id: 4, firstName: 'Jacob', lastName: "Thornton", email: "acobthornton@email.com" },
    { id: 5, firstName: 'Gary', lastName: "Bird", email: "	garybird@email.com" },
  ]);

  const handleClick = () => {
    const result = people.toSorted((a, b) => a.firstName.localeCompare(b.firstName))
    setPeople(result)
  }


  const handleDelete = (id) => {

    setPeople((prev) => {
      return prev.filter(elem => elem.id !== id)
    })
  }

  return <div className='App'>
    <h1>REACT TABLE EXPAMPLE</h1>
    <div className="buttons">
      <button onClick={handleClick}>SORT TABLE</button>
    </div>
    <div>



      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            people.length > 0 ? (
              <>
                {
                  people.map((elem, index) => {
                    return (
                      <tr key={elem.id}>
                        <td>{index + 1}</td>
                        <td>{elem.firstName}</td>
                        <td>{elem.lastName}</td>
                        <td>{elem.email}</td>
                        <td>
                          <button className='del' onClick={() => handleDelete(elem.id)}>delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </>
            ) :
              <tr>
                <td colSpan={5}>no people 🧑🏼‍💼</td>
              </tr>
          }
        </tbody>
      </table>

      {
        [].map(elem => {
          return (
            <Fragment key={elem}>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit.</p>
            </Fragment>
          )
        })
      }
    </div>

  </div>;
}

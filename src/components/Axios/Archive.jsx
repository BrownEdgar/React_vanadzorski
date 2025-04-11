import React from "react";

function Archive({ archiveCars, handleRestore }) {
  return (
    <div className=" Axios Archive">
      {
        archiveCars.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.name}</h3>
              <ul>
                <li><span>id:</span>{elem.id}</li>
                <li><span>color:</span>{elem.color}</li>
                <li><span>price:</span>{elem.price}</li>
              </ul>
              <button className="btn__restore" onClick={() => handleRestore(elem.id)}>restore</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default Archive;

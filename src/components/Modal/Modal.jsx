import React, { useEffect } from "react";
import './Modal.scss'
function Modal({ toggleModal, deletItem }) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className === "Modal") {
        toggleModal(false)
      }
    }
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    };
  }, [toggleModal]);



  return <div className='Modal'>
    <div className="Modal__content">
      <h1>Are you sure??</h1>
      <button onClick={toggleModal}>Close</button>
      <button onClick={() => {
        deletItem()
        toggleModal()
      }}> YES! delete</button>
    </div>
  </div>;
}

export default Modal;

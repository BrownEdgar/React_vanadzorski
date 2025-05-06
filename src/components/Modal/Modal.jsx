import React, { useEffect } from "react";
import './Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal({ toggleModal, children, icon, theme = 'light' }) {

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
    <div className={`Modal__content Modal__content-${theme}`}>
      {icon && <button className="Modal__close" onClick={() => toggleModal(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>}
      {children}
    </div>
  </div>;
}

export default Modal;

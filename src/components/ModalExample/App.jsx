import React, { useState } from "react";
import Modal from '../Modal/Modal';
import './App.scss'
function App() {
  const [isOpen, setisOpen] = useState(false);
  const [arr, setarr] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const toggleModal = () => setisOpen(!isOpen)
  const deletItem = () => {
    if (currentIndex !== -1) {
      setarr(arr.toSpliced(currentIndex, 1))
    }
  }

  return <div>
    <h1>Modal Example: {currentIndex}</h1>

    {

      arr.map((elem, index) => {
        return (
          <div className='list-item' key={elem}>
            <h3>{elem}</h3>
            <button
              className='B-dange btn-lg'
              onClick={() => {
                toggleModal()
                setCurrentIndex(index)
              }}
            >Delete</button>
          </div>
        )
      })

    }
    {
      isOpen ? <Modal toggleModal={toggleModal} deletItem={deletItem} /> : null
    }
  </div>;
}

export default App;

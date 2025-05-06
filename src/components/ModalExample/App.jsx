import React, { useState } from "react";
import Modal from '../Modal/Modal';
import './App.scss'
function App() {
  const [isOpen, setisOpen] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
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
    <button onClick={() => setisOpen2(!isOpen2)}>Open modal 2</button>
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
      isOpen ? (
        <Modal toggleModal={toggleModal} icon >
          <h1>Are you sure??</h1>
          <button onClick={toggleModal}>Close</button>
          <button onClick={() => {
            deletItem()
            toggleModal()
          }}> YES! delete</button>
        </Modal>
      ) : null
    }

    {
      isOpen2 ? (
        <Modal toggleModal={setisOpen2} icon theme="dark">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cupiditate consectetur non impedit vitae ut totam nam autem, corporis, voluptatibus alias reiciendis. Quos amet aut incidunt fugiat ducimus numquam doloremque.</p>
        </Modal>

      ) : null
    }
  </div>;
}

export default App;

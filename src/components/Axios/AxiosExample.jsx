
import React, { useEffect, useState } from "react";
import { instanse } from './axsiosInstanse';
import './Axios.css'
import Archive from './Archive';
import Cars from './Cars';


function AxiosExample() {
  const [cars, setCars] = useState([]);
  const [archiveCars, setArchiveCars] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    instanse.get('cars')
      .then(res => {
        setCars(res.data)
      })
    instanse.get(`cars`)
      .then(res => {
        setArchiveCars(res.data.filter(car => car.deletedAt))
      })
  }, []);

  const handleDelete = (id) => {
    const data = {
      deletedAt: new Date().toJSON()
    }
    instanse.patch(`cars/${id}`, data)
      .then(() => {
        window.location.reload()
      })
  }

  const handleRestore = (id) => {
    const data = {
      deletedAt: null
    };
    instanse.patch(`cars/${id}`, data)
      .then(() => {
        window.location.reload();
      });
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleChange = (e) => {
    instanse.get(`cars?color=${e.target.value}`)
      .then(res => {
        setCars(res.data)
      })

  }
  return (
    <div className="App">
      <select name="colors" id="colors" onChange={handleChange}>
        <option value="red">red</option>
        <option value="white">white</option>
        <option value="yellow">yellow</option>
        <option value="black">black</option>
      </select>
      <Cars cars={cars} handleDelete={handleDelete} />
      <hr />
      <button onClick={toggleOpen}>show archive <span>{archiveCars.length}</span></button>
      {
        isOpen
          ? <Archive handleRestore={handleRestore} archiveCars={archiveCars} />
          : null
      }
    </div>
  );
}

export default AxiosExample;

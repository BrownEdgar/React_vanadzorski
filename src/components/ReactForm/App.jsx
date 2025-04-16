import React, { useEffect, useState } from "react";
import './App.scss'
import Title from '../UI/Title/Title';
import Users from '../Users/Users';
import { randomUsers } from '../../constants/constants';


function App() {
  const [users, setUsers] = useState(() => {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : randomUsers
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
    return () => {
      localStorage.clear()
    };
  }, [users]);

  const handleDeelete = (id) => {
    const newUsers = users.filter((elem) => {
      return elem.id !== id
    })
    setUsers(newUsers)

  }
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [showPasswordID, setShowPasswordID] = useState(null);

  const togglePasswordId = (id) => {
    if (showPasswordID === id) {
      setShowPasswordID(null)
    } else {
      setShowPasswordID(id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, email } = e.target
    const isUserExist = users.find((elem) => elem.email === email.value.toLowerCase())
    if (isUserExist) {
      setErrors({
        ...errors,
        email: "this.user alredy exist , pleas cheange email"
      })
    } else {
      const user = {
        id: Math.round(Math.random() * 1e5),
        username: username.value,
        password: password.value,
        email: email.value.toLowerCase(),
      }
      setUsers([...users, user])
      e.target.reset()
    }

  }

  return (
    <>
      <Title title='React form' />
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <input type="text" id='username' name='username' placeholder='username' required />
          <input type="email" id='email' name='email' placeholder='email' required />
          <p className='error'>{errors.email ? errors.email : null}</p>
          <input type="password" id='password' name='password' placeholder='password' required />
          <input type="submit" value="save" />
        </form>
        <hr />
        <Users
          data={users}
          setPasswordId={togglePasswordId}
          showPasswordID={showPasswordID}
          handleDeelete={handleDeelete}
        />
      </div>
    </>
  );
}

export default App;

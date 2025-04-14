import React, { useState } from "react";
import './App.scss'


function App() {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, email } = e.target

    const user = {
      id: Math.round(Math.random() * 1e5),
      username: username.value,
      password: password.value,
      email: email.value,
    }
    setValues(user)
    e.target.reset()
  }


  return (
    <div className='App'>
      <h2>{JSON.stringify(values, null, 1)}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id='username' name='username' placeholder='username' required />
        <input type="email" id='email' name='email' placeholder='email' required />
        <input type="password" id='password' name='password' placeholder='password' required />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}

export default App;

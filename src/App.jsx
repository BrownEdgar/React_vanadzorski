import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'

function App() {
  const [login, setLogin] = useState(() => {
    return !!localStorage.getItem('login')
  });


  return (
    <div className='App'>
      <Navbar login={login} />
      <Outlet context={{ login }} />
    </div>
  )
}

export default App

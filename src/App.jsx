import React from 'react'
import './App.css'
import Users from './components/Users/Users'
import Todos from './components/todos/Todos'
import MyForm from './Components/Form/MyForm'

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Users />
      <Todos />
      <MyForm />
    </div>
  )
}

export default App

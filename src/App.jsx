import React from 'react'
import "./app.css"

const Cars = () => {
  return (
    <div className="cars">
      <h2>Cars</h2>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" placeholder="enter name" name="name" />

        <label htmlFor="surname">surname</label>
        <input type="text" placeholder="enter surname" name="surname" />

        <label htmlFor='email'>email</label>
        <input type="email" placeholder="enter email" name="email" />

        <label htmlFor='password'>password</label>
        <input type="password" placeholder="enter password" name="password" />

        <button type="submit">send</button>
      </form>
    </div>
  )
}
export default Cars

import React from "react";
import Button from './Ui/Button'

function Form() {

  return (
    <form>
      <label htmlFor="name">name</label>
      <input type="text" placeholder="enter name" name="name" />

      <label htmlFor="surname">surname</label>
      <input type="text" placeholder="enter surname" name="surname" />

      <label htmlFor='email'>email</label>
      <input type="email" placeholder="enter email" name="email" />

      <label htmlFor='password'>password</label>
      <input type="password" placeholder="enter password" name="password" />

      <Button label="send" size='lg' />
    </form>
  );
}

export default Form;

import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from "react";
import './SignIn.scss'
import { redirect, useNavigate } from 'react-router';


const auth = {
  email: "admin@gmail.com",
  password: 'admin'

}

const initialValues = {
  email: 'admin@gmail.com',
  password: 'admin',
}

function SignIn() {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    if (values.email === auth.email && values.password === auth.password) {
      localStorage.setItem('login', "true");
      navigate('/')
    } else {
      alert("invalid values!")
    }

  }
  return (
    <div className='SignIn'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type='email' id='email' name="email" />
            <ErrorMessage component={'p'} name='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type='password' id='password' name="password" />
            <ErrorMessage component={'p'} name='email' />
          </div>
          <div>
            <input type="submit" value={'Reginster'} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;

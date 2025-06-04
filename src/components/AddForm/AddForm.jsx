// import axios from 'axios';

// import { useSelector } from 'react-redux';
// import { getAllTwetts } from '../../features/twetts/twettsSlice';

// function AddForm() {
//   const twetts = useSelector((state) => getAllTwetts(state))
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formdata = new FormData(e.target)
//     const user = Object.fromEntries(formdata);
//     user.id = Math.round(Math.random() * 1e5)
//     user.image = './images/photo2.png'
//     // dispatch(saveTwett(user))

//     const x = twetts.data.some(elem => elem.username.toLowerCase() === user.username.toLowerCase())
//     if (!x) {
//       axios.post(import.meta.env.VITE_DB_URL, user)
//         .then(() => window.location.reload())
//     } else {
//       alert("userExist")
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" id='name' name='name' placeholder='name' />
//       <input type="text" id='username' name='username' placeholder='username' />
//       <textarea name="description" id="description" placeholder='description' rows={6}></textarea>
//       <input type="submit" value="save" />
//     </form>
//   );
// }

// export default AddForm;


import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from "react";
import { object, string, } from 'yup';

import './AddForm.scss'
const initialValues = {
  username: '',
  email: ''
}

const validationSchema = object({
  username: string().min(3, 'karja axper jan').max(20).required('Պարտադիր է լրացման համար'),
  email: string().email().lowercase('lowercase error').required()
})
function AddForm() {
  const [value, setValue] = useState([{}]);

  const handleSUbmit = (values) => {
    console.log(values);

  }

  return <div>
    <h1>{JSON.stringify(value)}</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSUbmit}
      validateOnChange={false}
      validateOnBlur={true}
    >


      {
        (formik) => {

          return (
            <Form>
              <Field type="text" name="username" placeholder='username' />
              <ErrorMessage name="username">
                {
                  (message) => {
                    return <div>
                      <p className='error'>Error: {message}</p>
                    </div>
                  }
                }
              </ErrorMessage>
              <Field type="email" name="email" placeholder='email' />
              <ErrorMessage name="email" component='p' className='error' />
              <input type="submit" value="save" disabled={!formik.isValid || !formik.dirty} />
            </Form>
          )
        }
      }

    </Formik>
  </div>;
}

export default AddForm;

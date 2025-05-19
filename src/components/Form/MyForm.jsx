import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { object, string } from 'yup'
const initialValues = {
  name: '',
  email: '',
  password: '',
}
const validate = object({
  name: string().required('partadir e'),
  email: string().email().required('partadir e'),
  password: string().min(8).max(20).matches(/[A-Z]/, 'password@ petq e parunaki mecatar').required(),
})
function MyForm() {
  const handleSubmit = (values, formik) => {
    formik.resetForm()

    console.log(values)
  }
  return (
    <div>
      <Formik validationSchema={validate} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={'p'} />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component={'p'} />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component={'p'} />
          <Field name="submit" type="submit" value="save" />
        </Form>
      </Formik>
    </div>
  )
}

export default MyForm

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ errors, touched, status }) {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    if (status) {
      setSmurfs([...smurfs, status])
    }
  }, [status])
  
  return (
    <div className="user-form">
      <h1>Smurf Form</h1>
      <Form>
        {touched.name && errors.name && <p>{errors.name}</p> }
        <Field type="text" name="name" placeholder="Name"/>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type="number" name="age" placeholder="Age"/>
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field type="text" name="height" placeholder="height"/>
        
        <button type="submit">Submit Smurf</button>
      </Form>


    </div>
  )
}

const FormikSmurfForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || '',
      age: values.age || '',
      height: values.height || ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    age: Yup.string()
      .required("age is required"),
    height: Yup.string()
      .required("height is required")
  }),
  
  handleSubmit(values, { setStatus }) {
    // console.log(values);
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(response => {
        console.log("RESPONSE", response.data)
        setStatus(response.data)
      })
      .catch(error => {
        console.log("ERROR:", error)
      })
  }
})(SmurfForm)

export default FormikSmurfForm;
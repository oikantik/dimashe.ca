import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  body: Yup.string().required("Required"),
});

export const SignupForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}>
      {({ errors, touched }) => (
        <Form>
          <Field name='firstName' />
          <ErrorMessage name='firstName' component='div' />
          <Field name='lastName' />
          <ErrorMessage name='lastName' component='div' />
          <Field name='email' type='email' />
          <ErrorMessage name='email' component='div' />
          <Field as='textarea' name='body' />
          <ErrorMessage name='body' component='div' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

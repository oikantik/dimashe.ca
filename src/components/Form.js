import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Typography } from "@material-ui/core";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  body: Yup.string().required("Required"),
});

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "1.5rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  formTitle: {
    color: "#ffffff",
    marginBottom: "1.5rem",
  },
  form: {
    background: "#ffffff",
    borderRadius: "4px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  formLabel: {
    marginBottom: ".5rem",
  },
  formInput: {
    marginBottom: "1rem",
  },
  formTextArea: { marginBottom: "1rem" },
}));

export const SignupForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Typography variant='h5' className={classes.formTitle}>
        Contact Us
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          body: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <label className={classes.formLabel}>Name *</label>
            <Field name='name' className={classes.formInput} />
            <ErrorMessage name='name' component='div' />
            <label className={classes.formLabel}>Email *</label>
            <Field name='email' type='email' className={classes.formInput} />
            <ErrorMessage name='email' component='div' />
            <label className={classes.formLabel}>Your message</label>
            <Field as='textarea' name='body' className={classes.formTextArea} />
            <ErrorMessage name='body' component='div' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

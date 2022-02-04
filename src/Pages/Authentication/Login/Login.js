import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import Button from "../../../Components/Button/Button";

export default function Login() {
  window.scrollBy(0, 0);
  return (
    <div className="register-container">
      <h1>Login</h1>
      <h3>Login to your account</h3>
      <p>
        Welcome! Thank You for getting back to log in. We have the best
        recommendations for you.
      </p>
      <hr />
      <div className="form-container">
        <Formik
          initialValues={{
            phoneNumber: "",
            username: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) errors.email = "Required";
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            )
              errors.email = "Invalid email address";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-input-group">
                <div className="form-input">
                  <label>Username</label>
                  <Field type="username" name="username" placeholder="Email or Phone Number" required/>
                  <ErrorMessage name="username" component="div" />
                </div>
                <div className="form-input">
                  <label>Password</label>
                  <Field type="password" name="password" placeholder="password" required/>
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>

              <div className="argreements-container">
                <div className="argreement-container">
                  <input type="checkbox" />
                  <span className="agreement">Remember me</span>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>

              <p className="account">
                Don't have an account?
                <Link to="/register">
                  <span className="action-link">Register</span>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

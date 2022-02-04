import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./Register.css";
import Button from "../../../Components/Button/Button";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../../Redux/Actions/Actions";

export default function Register() {
  window.scrollTo(0,0);
  const dispatch = useDispatch();
  return (
    <div className="register-container">
      <h1>Register</h1>
      <h3>Manage all your lottery efficiently</h3>
      <p>
        Let's get you all set up so you can verify your personal accountand
        begin setting up your profile.
      </p>
      <hr />
      <div className="form-container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
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
            dispatch(registerUserAction(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-input-group">
                <div className="form-input">
                  <label>First Name</label>
                  <Field type="text" name="firstName" label="Name" />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="form-input">
                  <label>Last Name</label>
                  <Field type="text" name="lastName" />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>

              <div className="form-input-group">
                <div className="form-input">
                  <label>Phone Number</label>
                  <Field type="number" name="phoneNumber" />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>
                <div className="form-input">
                  <label>Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>

              <div className="form-input-group">
                <div className="form-input">
                  <label>Password</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="form-input">
                  <label>Confirm Password</label>
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" />
                </div>
              </div>

              <div className="argreements-container">
                <div className="argreement-container">
                  <input type="checkbox" />
                  <span className="agreement">
                    Yes, I want to receive Lottery Display emails
                  </span>
                </div>

                <div className="argreement-container">
                  <input type="checkbox" />
                  <span className="agreement">
                    I agree to all the{" "}
                    <span className="terms">Term, Privacy Policy</span> and{" "}
                    <span className="terms">Fees</span>
                  </span>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Create Account
              </Button>

              <p className="account">
                Already have an account?
                <Link to="/login">
                  <span className="action-link">Log in</span>
                </Link>
              </p>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

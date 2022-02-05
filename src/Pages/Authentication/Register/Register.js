import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./Register.css";
import Button from "../../../Components/Button/Button";
import { registerUserAction } from "../../../Redux/Actions/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

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
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            password1: "",
            password2: "",
          }}
          validate={(values) => {
            const errors = {};
            console.log(values.password1);
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.password1 !== values.password2) {
              errors.password2 = "Password mismatch";
            }
            return errors;
          }}
          onSubmit={(values) => {
            const { checkbox, ...data } = values;
            dispatch(registerUserAction(data));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-input-group">
                <div className="form-input">
                  <label>First Name</label>
                  <Field type="text" name="first_name" label="Name" required />
                  <ErrorMessage name="first_name" component="div" />
                </div>
                <div className="form-input">
                  <label>Last Name</label>
                  <Field type="text" name="last_name" required />
                  <ErrorMessage name="last_name" component="div" />
                </div>
              </div>

              <div className="form-input-group">
                <div className="form-input">
                  <label>Phone Number</label>
                  <Field type="number" name="phone" required />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div className="form-input">
                  <label>Email</label>
                  <Field type="email" name="email" required />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>

              <div className="form-input-group">
                <div className="form-input">
                  <label>Password</label>
                  <div className="password-field">
                    <Field
                      type={showPassword1 ? "text" : "password"}
                      name="password1"
                      required
                    />
                    <span onClick={handleShowPassword1}>
                      {showPassword1 ? "Hide" : "Show"}
                    </span>
                  </div>
                  <ErrorMessage name="password1" component="div" />
                </div>
                <div className="form-input">
                  <label>Confirm Password</label>
                  <div className="password-field">
                    <Field
                      type={showPassword2 ? "text" : "password"}
                      name="password2"
                      required
                    />
                    <span onClick={handleShowPassword2}>
                      {showPassword2 ? "Hide" : "Show"}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password2"
                    component="div"
                    className="error"
                  />
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
                  <Field type="checkbox" name="checkbox" required />
                  <ErrorMessage name="checkbox" component="div" />
                  <span className="agreement">
                    I agree to all the{" "}
                    <span className="terms">Term, Privacy Policy</span> and{" "}
                    <span className="terms">Fees</span>
                  </span>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin={true} />
                ) : (
                  "Create Account"
                )}
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

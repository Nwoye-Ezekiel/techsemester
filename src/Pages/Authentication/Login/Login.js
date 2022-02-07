import React, { useState, useEffect } from "react";
import "../Register/Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { loginUserAction } from "../../../Redux/Actions/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const authedUser = useSelector((state) => state.user.authedUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("rememberMe")) {
      if (localStorage.getItem("rememberMe") !== null) {
        let data = JSON.parse(localStorage.getItem("rememberMe"));
        setEmail(data.email);
        setPassword(data.password);
        setCheckbox(data.checkbox);
        console.log(data);
      }
    }
  }, []);

  useEffect(() => {
    if (authedUser) {
      history.push("/home");
    }
    //eslint-disable-next-line
  }, [authedUser]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

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
          enableReinitialize={true}
          initialValues={{
            email: email,
            password: password,
          }}
          validate={(values) => {
            console.log(values);
            const errors = {};
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            const data = {
              email: values.email,
              password: values.password,
              checkbox: checkbox,
            };
            let credentials = JSON.stringify(data);
            if (checkbox === true)
              localStorage.setItem("rememberMe", credentials);
            else localStorage.removeItem("rememberMe");
            dispatch(loginUserAction(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-input-group">
                <div className="form-input">
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="form-input">
                  <label>Password</label>
                  <div className="password-field">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <span onClick={handleShowPassword}>
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>

              <div className="argreements-container">
                <div className="argreement-container">
                  <input
                    name="checkbox"
                    type="checkbox"
                    checked={checkbox}
                    onChange={handleCheckboxChange}
                  />
                  <span className="agreement">Remember me</span>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin={true} />
                ) : (
                  "Login"
                )}
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

import "./index.css";
import React from "react";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Home from "./Pages/Home/Home";
import Intro from "./Pages/Intro/Intro";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Intro} path="/" />
        <Layout>
          <Route exact component={Login} path="/login" />
          <Route exact component={Register} path="/register" />
          <Route exact component={Home} path="/home" />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;

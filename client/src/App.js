import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Alert from "./components/layout/Alert";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Alert />
          <Login />
        </Route>
        <Route exact path="/register">
          <Alert />
          <Register />
        </Route>
      </Fragment>
    </Router>
  );
};

export default App;

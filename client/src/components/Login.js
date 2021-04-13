import React from "react";
import Navbar from "./Navbar";
import { Paper, TextField } from "@material-ui/core";
const Login = () => {
  return (
    <>
      <div className="re1">
        <Navbar />

        <div className="register">
          <h1 className="heading">Login</h1> <br /> <br />
          <br />
          <TextField id="standard-basic" label="email" /> <br />
          <br />
          <TextField id="standard-basic" label="password" /> <br />
          <br />
          <button className="get_started">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Login;

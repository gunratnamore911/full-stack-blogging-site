import React from "react";
import "./Register.css";
import Navbar from "./Navbar";
import { Paper, TextField } from "@material-ui/core";
const Register = () => {
  return (
    <>
      <div className="re1">
        <Navbar />

        <div className="register">
          <h1 className="heading">Register / Sign Up</h1> <br /> <br />
          <TextField id="standard-basic" label="name">
            ra
          </TextField>
          <br />
          <br />
          <TextField id="standard-basic" label="email" /> <br />
          <br />
          <TextField id="standard-basic" label="password" /> <br />
          <br />
          <TextField id="standard-basic" label="confirm password" /> <br />
          <br />
          <button className="get_started">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Register;

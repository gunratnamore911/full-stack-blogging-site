import React, { useState } from "react";
import Navbar from "./Navbar";
import { Paper, TextField } from "@material-ui/core";
const Login = () => {
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="re1">
        <Navbar />

        <div className="register">
          <h1 className="heading">Login</h1> <br /> <br />
          <br />
          <form onSubmit={(e) => onsubmit(e)}>
            <TextField
              type="text"
              name="email"
              id="standard-basic"
              label="email"
              value={email}
              onChange={(e) => onChange(e)}
            />{" "}
            <br />
            <br />
            <TextField
              type="password"
              name="password"
              id="standard-basic"
              label="password"
              value={password}
              onChange={(e) => onChange(e)}
            />{" "}
            <br />
            <br />
            <button className="get_started">Sign In</button>
          </form>{" "}
        </div>
      </div>
    </>
  );
};

export default Login;

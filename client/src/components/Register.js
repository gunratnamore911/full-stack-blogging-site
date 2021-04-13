import React, { useState } from "react";
import "./Register.css";
import Navbar from "./Navbar";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password2)
      props.setAlert("Password do not match", "danger");
    else props.register({ name, email, password });
  };

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div className="re1">
        <Navbar />

        <div className="register">
          <h1 className="heading">Register / Sign Up</h1> <br /> <br />
          <form onSubmit={(e) => onsubmit(e)}>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              label="name"
              value={name}
              onChange={(e) => onChange(e)}
            ></TextField>
            <br />
            <br />
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
            <TextField
              type="password"
              name="password2"
              id="standard-basic"
              label="confirm password"
              value={password2}
              onChange={(e) => onChange(e)}
            />{" "}
            <br />
            <br />
            <button className="get_started">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default connect(null, { setAlert, register })(Register);

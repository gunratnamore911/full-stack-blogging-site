import React, { Fragment } from "react";
import "./Home.css";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="Homy">
        <div className="first">
          <h1>Blog. Share. Improve.</h1>
          <button className="get_started">Get Started</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

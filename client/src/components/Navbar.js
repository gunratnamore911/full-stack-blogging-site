import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const logo = "</> Blogger";
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div className="logo">{logo}</div>
      <ul className="links">
        <li className="showup">
          <a href="#">About</a>
        </li>
        <li className="showup">
          <a href="#">Login</a>
        </li>
        <li className="showup">
          <a href="#">Register</a>
        </li>
        <li className="showup">
          <a href="#">Home</a>
        </li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
};

export default Navbar;

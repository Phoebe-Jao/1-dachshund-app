import React from "react";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img
          src={require("../images/logo.png")}
          className="navbar--logoImage"
          alt="A cartoon depiction of a Dachshund head facing forward"
        />
        <h1 className="navbar--logoTitle">Navbar goes here</h1>
      </div>
      <ul className="navbar--menu">
        <li>About</li>
        <li>Bark</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;

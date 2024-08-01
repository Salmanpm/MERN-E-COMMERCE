import React from "react";
import nav_logo from "../../assets/logo-new.png";
import nav_profile from "../../assets/nav-profile.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="nav-logo" src={nav_logo} alt="" />
      <img className="nav-profile" src={nav_profile} alt="" />
    </div>
  );
};

export default Navbar;

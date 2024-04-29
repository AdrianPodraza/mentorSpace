import NavItem from "./NavItem";
import Logo from "./Logo";

import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav">
      <Logo />

      <div className="stripe"></div>
      <NavItem name="HOME" number="00" />
      <NavItem name="DESTINATION" number="01" />
      <NavItem name="CREW" number="02" />
      <NavItem name="TECHNOLOGY" number="03" />
    </div>
  );
}

export default NavBar;

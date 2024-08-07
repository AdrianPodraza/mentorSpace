import NavItem from "./NavItem";
import Logo from "./Logo";

import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="wrap">
      <div className="nav">
        <Logo />

        <div className="stripe"></div>
        <NavItem
          path="/home"
          name="HOME"
          number="00"
          activeClass="active"
          navItemClasss="nav-item"
          nonActive="home-nav-nonActive"
        />
        <NavItem
          path="/destination"
          name="DESTINATION"
          number="01"
          activeClass="active"
          navItemClasss="nav-item"
          nonActive="home-nav-nonActive"
        />
        <NavItem
          path="/crew"
          name="CREW"
          number="02"
          activeClass="active"
          navItemClasss="nav-item"
          nonActive="home-nav-nonActive"
        />
        <NavItem
          path="/technology"
          name="TECHNOLOGY"
          number="03"
          activeClass="active"
          navItemClasss="nav-item"
          nonActive="home-nav-nonActive"
        />
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import NavItem from "./NavItem";

function PlanetNav() {
  return (
    <div>
      <NavItem
        path="/destination/moon"
        name="MOON"
        activeClass="active"
        navItemClasss="nav-item-planet"
        nonActive="home-nav-nonActive"
      />
      <NavItem
        path="/destination/mars"
        name="MARS"
        activeClass="active"
        navItemClasss="nav-item-planet"
        nonActive="home-nav-nonActive"
      />
      <NavItem
        path="/destination/europa"
        name="EUROPA"
        activeClass="active"
        navItemClasss="nav-item-planet"
        nonActive="home-nav-nonActive"
      />
      <NavItem
        path="/destination/titan"
        name="TITAN"
        activeClass="active"
        navItemClasss="nav-item-planet"
        nonActive="home-nav-nonActive"
      />
    </div>
  );
}

export default PlanetNav;

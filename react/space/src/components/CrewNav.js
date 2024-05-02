import React from "react";
import NavItem from "./NavItem";

function CrewNav() {
  return (
    <div className="crew-nav">
      <NavItem
        path="/crew/douglas-hurley"
        activeClass="crew-active"
        navItemClass="crew-item"
        nonActive="crew-item-none-active"
      />
      <NavItem
        path="/crew/mark-shuttleworth"
        activeClass="crew-active"
        navItemClass="crew-item"
        nonActive="crew-item-none-active"
      />
      <NavItem
        path="/crew/victor-glover"
        activeClass="crew-active"
        navItemClass="crew-item"
        nonActive="crew-item-none-active"
      />
      <NavItem
        path="/crew/anousheh-ansari"
        activeClass="crew-active"
        navItemClass="crew-item"
        nonActive="crew-item-none-active"
      />
    </div>
  );
}

export default CrewNav;

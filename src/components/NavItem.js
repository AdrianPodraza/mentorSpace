import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({
  path,
  number,
  name,
  activeClass,
  navItemClass,
  nonActive = "",
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? activeClass : nonActive)}
    >
      <div className={navItemClass}>
        {number && <span className="number">{number}</span>}
        {name && <span className="name">{name}</span>}
      </div>
    </NavLink>
  );
}

export default NavItem;

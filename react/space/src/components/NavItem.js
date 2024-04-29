import React from "react";
function NavItem({ number, name }) {
  return (
    <div>
      <span className="number">{number}</span>{" "}
      <span className="name">{name}</span>
    </div>
  );
}

export default NavItem;

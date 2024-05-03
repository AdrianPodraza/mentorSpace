import React from "react"
import Logo from "./Logo"

function HamburgerLogo ({handleClickMenu,hamburgerVisible}) {

   
  return (
    <div className="hamburger-logo">
      <Logo/>
      <div className={hamburgerVisible?'hamburger-icon':'hamburger-icon-close'} onClick={handleClickMenu}>

      <img src='./assets/shared/icon-hamburger.svg' alt='menu' />
      </div>
    </div>
  )
};

export default HamburgerLogo

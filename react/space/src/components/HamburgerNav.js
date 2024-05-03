import "./HamburgerNav.css"
import NavItem from "./NavItem";
import { useEffect } from "react";
import { useRef } from "react";

function HamburgerNav({handleClickMenu,showSideBar,setShowSideBar}) {
  const hamburgerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)&&showSideBar) {
        // Kliknięto poza obszarem .hamburger, więc zamykamy menu
       setShowSideBar(false);
      }
    };

    // Dodajemy nasłuchiwanie kliknięcia na cały dokument
    document.addEventListener('click', handleClickOutside);

    // Czyszczenie nasłuchiwacza po odmontowaniu komponentu
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickMenu]);


  return (
    <div  className={showSideBar?"hamburger show":"hamburger"}>
      <div ref={hamburgerRef} className="hamburger-con">
        <img className="close" src='./assets/shared/icon-close.svg' alt='close' onClick={handleClickMenu} />
        <NavItem
          path="/home"
          name="HOME"
          number="00"
          activeClass="hamburger-active"
          navItemClasss="hamburger-nav-item"
        />
        <NavItem
          path="/destination"
          name="DESTINATION"
          number="01"
          activeClass="hamburger-active"
          navItemClasss="hamburger-nav-item"
        />
        <NavItem
          path="/crew"
          name="CREW"
          number="02"
          activeClass="hamburger-active"
          navItemClasss="hamburger-nav-item"
        />
        <NavItem
          path="/technology"
          name="TECHNOLOGY"
          number="03"
          activeClass="hamburger-active"
          navItemClasss="hamburger-nav-item"
        />
      </div>
    </div>
  );
}

export default HamburgerNav;

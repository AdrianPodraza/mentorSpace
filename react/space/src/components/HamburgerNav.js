import Logo from "./Logo.js";
import NavItem from "./NavItem";
function HamburgerNav() {
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

export default HamburgerNav;

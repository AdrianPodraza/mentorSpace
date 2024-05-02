import NavItem from "./NavItem";
function TechnologyNav() {
  return (
    <div>
      <NavItem
        path="/technology/launch-vehicle"
        number="1"
        activeClass="technology-active"
        nonActive="technology-nonActive"
        navItemClass="nav-item-technology"
      />
      <NavItem
        path="/technology/spaceport"
        number="2"
        activeClass="technology-active"
        nonActive="technology-nonActive"
        navItemClass="nav-item-technology"
      />
      <NavItem
        path="/technology/space-capsule"
        number="3"
        activeClass="technology-active"
        nonActive="technology-nonActive"
        navItemClass="nav-item-technology"
      />
    </div>
  );
}

export default TechnologyNav;

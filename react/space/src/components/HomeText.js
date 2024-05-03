import "./HomeText.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function HomeText() {
  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    const phoneQuery = window.matchMedia("(max-width: 667px)");
    const setBodyBackground = () => {
      if (tabletQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/home/background-home-tablet.jpg)";
      } else if (phoneQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/home/background-home-mobile.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(./assets/home/background-home-desktop.jpg)";
      }
    };
    setBodyBackground();
    const handleResize = () => {
      setBodyBackground();
    };
    window.addEventListener("resize", handleResize);

    // Clean up by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    }; // Set background on component mount
  }, []);

  return (
    <div className="home-con">
    
      <div className="con">
        <span className="travel">SO, YOU WANT TO TRAVEL TO</span>

        <h1>SPACE</h1>

        <span>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </span>
      </div>
      <Link to="/destination">
        <div className="explore">EXPLORE</div>
      </Link>
    </div>
  );
}

export default HomeText;

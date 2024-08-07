import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Destination.css";
import PlanetNav from "../components/PlanetNav";

function Destination() {
  const { planetName = "MOON" } = useParams();
  const [planetData, setPlanetData] = useState(null);
  useEffect(() => {
    fetchPlanetData();
  }, [planetName]);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    const phoneQuery = window.matchMedia("(max-width: 667px)");
    const setBodyBackground = () => {
      if (tabletQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/destination/background-destination-tablet.jpg)";
      } else if (phoneQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/destination/background-destination-mobile.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(./assets/destination/background-destination-desktop.jpg)";
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

  const fetchPlanetData = async () => {
    try {
      const response = await fetch(`/data/data.json`);
      const data = await response.json();
      setPlanetData(data);
    } catch (error) {
      console.error("Error loading planet data:", error);
    }
  };

  if (!planetData) {
    return <div>Loading...</div>;
  }

  const selectedDestination = planetData.destinations.find(
    (dest) => dest.name.toUpperCase() === planetName.toUpperCase()
  );

  return (
    <div>
      <div className="upper-des">
        <span className="num-des">01</span>
        <span className="title-des">PICK YOUR DESTINATION</span>
      </div>
      <div className="planet-con-des">
        <img
          src={selectedDestination.images.webp}
          alt={selectedDestination.name}
          className="planet"
        ></img>
        <div className="description-des">
          <div className="nav-planet">
            <PlanetNav />
          </div>
          <span className="planet-name">
            {selectedDestination.name.toUpperCase()}
          </span>
          <span className="planet-description">
            {selectedDestination.description}
          </span>
          <div className="stats">
            <div className="stats-con">
              <p>AVG. DISTANCE</p>
              <span>{selectedDestination.distance.toUpperCase()}</span>
            </div>
            <div className="stats-con">
              <p>EST. TRAVEL TIME</p>
              <span>{selectedDestination.travel.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;

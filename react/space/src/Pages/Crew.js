import "./Crew.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CrewNav from "./../components/CrewNav.js";

function Crew() {
  const { crewName = "Douglas-Hurley" } = useParams();
  const [crewData, setCrewData] = useState(null);
  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    const phoneQuery = window.matchMedia("(max-width: 667px)");
    const setBodyBackground = () => {
      if (tabletQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/crew/background-crew-tablet.jpg)";
      } else if (phoneQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/crew/background-crew-mobile.jpg)";
      } else {
        document.body.style.backgroundImage =
          "url(./assets/crew/background-crew-desktop.jpg)";
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

  useEffect(() => {
    fetchCrewData();
  }, [crewName]);

  const fetchCrewData = async () => {
    try {
      const response = await fetch(`/data/data.json`);
      const data = await response.json();
      setCrewData(data);
    } catch (error) {
      console.error("Error loading planet data:", error);
    }
  };

  if (!crewData) {
    return <div>Loading...</div>;
  }

  const selectedCrew = crewData.crew.find(
    (crew) =>
      crew.name.toUpperCase() === crewName.split("-").join(" ").toUpperCase()
  );

  return (
    <div>
      <div className="upper-des">
        <span className="num-des">02</span>
        <span className="title-des">MEET YOUR CREW</span>
      </div>
      <div className="crew-flex">
        <div className="crew-con">
          <span className="crew-status">{selectedCrew.role.toUpperCase()}</span>
          <span className="crew-name">{selectedCrew.name.toUpperCase()}</span>
          <span className="crew-desc">{selectedCrew.bio}</span>
          <CrewNav />
        </div>
        <div className="crew-image-con">
          <img src={selectedCrew.images.webp} alt="crew-member" />
        </div>
      </div>
    </div>
  );
}

export default Crew;

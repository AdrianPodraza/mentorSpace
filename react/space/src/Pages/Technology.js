import "./Technology.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TechnologyNav from "../components/TechnologyNav";

function Technology() {
  const { techName = "launch-vehicle" } = useParams();
  const [techData, setTechData] = useState(null);
  const [imageStyle, setImageStyle] = useState("portrait"); // Definiujesz imageStyle jako stan komponentu

  useEffect(() => {
    fetchTechData();
  }, [techName]);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    const phoneQuery = window.matchMedia("(max-width: 667px)");

    const setBodyBackground = () => {
      if (tabletQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/technology/background-technology-desktop.jpg)";
        setImageStyle("landscape"); // Ustawiasz imageStyle na landscape dla małych urządzeń
      } else if (phoneQuery.matches) {
        document.body.style.backgroundImage =
          "url(./assets/technology/background-technology-mobile.jpg)";
        setImageStyle("landscape");
      } else {
        document.body.style.backgroundImage =
          "url(./assets/technology/background-technology-desktop.jpg)";
        setImageStyle("portrait"); // W przeciwnym razie ustawiasz imageStyle na portrait
      }
    };

    setBodyBackground(); // Wywołujesz funkcję ustawiania tła i stylu obrazka

    const handleResize = () => {
      setBodyBackground();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchTechData = async () => {
    try {
      const response = await fetch(`/data/data.json`);
      const data = await response.json();
      setTechData(data);
    } catch (error) {
      console.error("Error loading planet data:", error);
    }
  };

  if (!techData) {
    return <div>Loading...</div>;
  }

  const selectedTech = techData.technology.find(
    (tech) =>
      tech.name.toUpperCase() === techName.split("-").join(" ").toUpperCase()
  );

  return (
    <div>
      <div className="upper-des">
        <span className="num-des">03</span>
        <span className="title-des">SPACE LAUNCH 101s</span>
      </div>
      <div>
        <div className="technology-flex-img">
          <div className="technology-con">
            <div className="technology-nav-con">
              <TechnologyNav />
            </div>
            <span className="technology-title"> THE TERMINOLOGY...</span>
            <span className="crew-name">
              {" "}
              {selectedTech.name.toUpperCase()}
            </span>
            <span className="planet-description">
              {selectedTech.description}
            </span>
          </div>
          <div className="technology-img">
            <img src={selectedTech.images[imageStyle]} alt="rocket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;

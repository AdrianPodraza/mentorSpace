import React from "react";
import { useEffect } from "react";

import HomeText from "../components/HomeText";
function Wrapper() {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(./images/background-home-desktop.jpg)";
  }, []);
  return <HomeText />;
}

export default Wrapper;

import React from "react";
import styles from "./Wrapper.module.css";
import NavBar from "../components/NavBar";
import HomeText from "../components/HomeText";
function Wrapper() {
  return (
    <>
      <div className={styles.wrapper}>
        <NavBar />
      </div>
      <HomeText />
    </>
  );
}

export default Wrapper;

import React from "react"
import styles from './Wrapper.module.css'; 
import NavBar from "../components/NavBar";
function Wrapper () {
  return (
    <div className={styles.wrapper}>
        <NavBar/>
      
    </div>
  )
};

export default Wrapper

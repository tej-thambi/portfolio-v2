import React from "react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import mountain from "../../images/mountain4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.backgroundContainer}>
      <img src={mountain} alt="Background" className={styles.backgroundImage} />
      <div className={styles.header}>
        <h1 className={styles.name}>TEJ THAMBI</h1>
        <div className={styles.desc}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: ["COMPUTER SCIENCE STUDENT", "ENGINEER", "DEVELOPER"],
            }}
          />
        </div>
      </div>
      <div className={styles.navButtons}>
        <Link to="/">
          <button className={styles.navButton}>HOME</button>
        </Link>
        <Link to="/projects">
          <button className={styles.navButton}>PROJECTS</button>
        </Link>
        <Link to="/resume">
          <button className={styles.navButton}>RESUME</button>
        </Link>
        <Link to="/contact">
          <button className={styles.navButton}>CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

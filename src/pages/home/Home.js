import React from "react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import mountain from "../../images/mountain.jpg";

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
        <button className={styles.navButton}>HOME</button>
        <button className={styles.navButton}>PROJECTS</button>
        <button className={styles.navButton}>RESUME</button>
        <button className={styles.navButton}>ABOUT</button>
      </div>
    </div>
  );
};

export default Home;

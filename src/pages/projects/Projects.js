import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./project-card/ProjectCard";
import eatImage from "../../images/eat.png";
import bswipe from "../../images/bswipe.png";
import bwalk from "../../images/bwalk.png";
import stock from "../../images/stock-sage.png";

const Projects = () => {
  const eat = {
    link: "https://tej-thambi.github.io/eat-site/",
    image: eatImage,
    title: "",
    description:
      "Eatinerary is a mobile app designed for foodies who love to explore new restaurants, while also keeping track of their own experiences. It allows users to keep track of the restaurants they've visited, the dishes they've tried, and follow other users to see their experiences.",
    tech: "React Native, Firebase Firestore, Redux, Expo",
  };

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.navButtons}>
        <button className={styles.navButton}>HOME</button>
        <button className={styles.navButton}>PROJECTS</button>
        <button className={styles.navButton}>RESUME</button>
        <button className={styles.navButton}>ABOUT</button>
      </div>
      <div className={styles.header}>
        <h1 className={styles.name}>PROJECTS</h1>
      </div>
      <div className={styles.projectCards}>
        <div className={styles.eat}>
          <ProjectCard
            link={eat.link}
            image={eat.image}
            title={eat.title}
            description={eat.description}
            tech={eat.tech}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

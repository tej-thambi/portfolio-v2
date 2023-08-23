import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./project-card/ProjectCard";
import eatImage from "../../images/eat2.png";
import bswipeImage from "../../images/bswipe.png";
import bwalkImage from "../../images/bwalk.png";
import stockImage from "../../images/stock-sage.png";
import portImage from "../../images/port.png";
import { Link } from "react-router-dom";
// import mountain2 from "../../images/mountain2.jpg";

const Projects = () => {
  const eat = {
    link: "https://tej-thambi.github.io/eat-site/",
    image: eatImage,
    title: "",
    description:
      "Eatinerary is a mobile app designed for foodies who love to explore new restaurants, while also keeping track of their own experiences. It allows users to keep track of the restaurants they've visited, the dishes they've tried, and follow other users to see their experiences.",
    tech: "React Native, Firebase Firestore, Redux, Expo",
  };
  const bswipe = {
    link: "https://github.com/vikrampuliyadi/swipes_app",
    image: bswipeImage,
    title: "BSwipe",
    description:
      "A platform designed to facilitate the buying and selling of dining hall meal swipes at UCLA. BSwipe is the ultimate solution for UCLA students seeking a streamlined way to manage their dining hall meal swipes.",
    tech: "MongoDB Atlas, Express JS, React JS, Node JS",
  };
  const bwalk = {
    link: "https://github.com/classjek/bruinwalk_linguistic_analysis",
    image: bwalkImage,
    title: "Computational Linguistic Analysis of Bruinwalk",
    description:
      "A Machine Learning powered analysis of UCLA’s professor review system, Bruinwalk, to analyze trends in reviews",
    tech: "Tools: Python, Tensorflow keras, Word2Vec, Google Cloud Platform",
  };

  const stock = {
    link: "https://tej-thambi-stock-sage-main-3gd0we.streamlit.app/",
    image: stockImage,
    title: "Stock Sage",
    description:
      "Stock Sage is a web app designed to help users stay ahead of the market. Stock Sage tracks stock market data, makes machine learning powered predictions about the next four years, and gathers all the latest financial news. Stock Sage: Your all-in-one stock market companion.",
    tech: "Python3, Streamlit, Prophet, Marketaux API",
  };

  const port = {
    link: "https://github.com/tej-thambi/portfolio-v2",
    image: portImage,
    title: "Portfolio",
    tech: "React, CSS",
  };

  return (
    <div className={styles.backgroundContainer}>
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
        <div className={styles.bwalk}>
          <ProjectCard
            link={bwalk.link}
            image={bwalk.image}
            title={bwalk.title}
            description={bwalk.description}
            tech={bwalk.tech}
          />
        </div>
        <div className={styles.stock}>
          <ProjectCard
            link={stock.link}
            image={stock.image}
            title={stock.title}
            description={stock.description}
            tech={stock.tech}
          />
        </div>
        <div className={styles.bswipe}>
          <ProjectCard
            link={bswipe.link}
            image={bswipe.image}
            title={bswipe.title}
            description={bswipe.description}
            tech={bswipe.tech}
          />
        </div>
        <div className={styles.port}>
          <ProjectCard
            link={port.link}
            image={port.image}
            title={port.title}
            tech={port.tech}
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
        <Link to="/photography">
          <button className={styles.navButton}>PHOTOGRAPHY</button>
        </Link>
        <Link to="/contact">
          <button className={styles.navButton}>CONTACT</button>
        </Link>
      </div>
      <div className={styles.padding}></div>
    </div>
  );
};

export default Projects;

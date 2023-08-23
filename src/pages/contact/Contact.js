import React from "react";
import styles from "./Contact.module.css";
import mountain from "../../images/mountain.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={styles.backgroundContainer}>
      <img src={mountain} alt="Background" className={styles.backgroundImage} />
      <div className={styles.header}>
        <h1 className={styles.name}>CONTACT</h1>
        <div className={styles.buttons}>
          <a
            href="https://www.linkedin.com/in/tej-thambi-4839521a9/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.contactButton}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
          <a
            href="https://github.com/tej-thambi"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.contactButton}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
          <a
            href="mailto:tejthambi09@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.contactButton}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
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
    </div>
  );
};

export default Contact;

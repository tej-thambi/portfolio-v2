import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ link, image, title, description, tech }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <div className={styles.background}>
          <div className={styles.card}>
            <img src={image} alt={title} className={styles.projectImage} />
            <div className={styles.text}>
              <h2 className={styles.projectTitle}>{title}</h2>
              <p className={styles.projectDescription}>{description}</p>
              <p className={styles.techUsed}>Tech: {tech}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

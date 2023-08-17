import React from "react";
import styles from "./ResumeCard.module.css";

const ResumeCard = ({ company, title, description, image, link }) => {
  return (
    <div className={styles.background}>
      <div className={styles.text}>
        <h1 className={styles.compant}>{company}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
      </div>
      {image && (
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img src={image} alt={title} className={styles.resumeImage} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeCard;

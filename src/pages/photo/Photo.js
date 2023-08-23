import React from "react";
import styles from "./Photo.module.css";
import ResponsiveGallery from "react-responsive-gallery";
import { Link } from "react-router-dom";
import img1 from "./photos/IMG_0085.jpg";
import img2 from "./photos/IMG_6778.jpg";
import img3 from "./photos/IMG_0871.jpg";
import img4 from "./photos/IMG_2575.jpg";
import img5 from "./photos/IMG_0172.jpg";
import img6 from "./photos/IMG_0377.jpg";
import img7 from "./photos/IMG_4257.jpg";
import img8 from "./photos/IMG_8647.jpg";
import img9 from "./photos/IMG_0156.jpg";
import img10 from "./photos/IMG_9666.jpg";
import img11 from "./photos/IMG_9864.jpg";
import img13 from "./photos/IMG_1927.jpg";
import img12 from "./photos/IMG_0123.jpg";
import img14 from "./photos/IMG_0070.jpg";

const Photo = () => {
  const images = [
    {
      src: img1,
      description: "Burlington, 2023",
    },
    {
      src: img2,
      description: "Los Angeles, 2022",
    },
    {
      src: img3,
      description: "New York, 2020",
    },
    {
      src: img4,
      description: "Los Angeles, 2022",
    },
    {
      src: img5,
      description: "Burlington, 2023",
    },
    {
      src: img6,
      description: "London, 2023",
    },
    {
      src: img7,
      description: "New York, 2020",
    },
    {
      src: img8,
      description: "Los Angeles, 2022",
    },
    {
      src: img9,
      description: "Burlington, 2023",
    },
    {
      src: img10,
      description: "London, 2023",
    },
    {
      src: img11,
      description: "Los Angeles, 2023",
    },
    {
      src: img12,
      description: "Shanghai, 2014",
    },
    {
      src: img13,
      description: "Burlington, 2023",
    },
    {
      src: img14,
      description: "Burlington, 2023",
    },
  ];
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.gallery}>
        <ResponsiveGallery
          images={images}
          imagesStyle={styles.images}
          imagesPaddingBottom={{ xs: 8, s: 8, m: 8, l: 8, xl: 8, xxl: 8 }}
          useLightBox={true}
        />
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

export default Photo;

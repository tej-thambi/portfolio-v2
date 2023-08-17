import React from "react";
import styles from "./Resume.module.css";
import ResumeCard from "./resume-card/ResumeCard";
import uvmImage from "../../images/uvm.jpeg";
import poppinImage from "../../images/poppin.png";
import fcImage from "../../images/fc.png";
import airesImage from "../../images/aires.jpg";
import { Link } from "react-router-dom";
// import mountain2 from "../../images/mountain2.jpg";

const Resume = () => {
  const uvm = {
    company: "Vermont Conversation Lab",
    title: "Machine Learning Intern",
    description:
      "Writing software to conduct computational linguistics analyses on psychedelic assisted therapy sessions to draw conclusions about awe, and writing machine learning models to detect awe",
    image: uvmImage,
    link: "https://vermontconversationlab.com/",
  };
  const poppin = {
    company: "Poppin' Technologies",
    title: "Software Engineering Intern",
    description: (
      <div>
        Developing web version of Poppin app using Vite, TypeScript, and React{" "}
        <br />
        Learning about software development life cycle and collaborating with
        other developers
      </div>
    ),
    image: poppinImage,
    link: "https://joinpoppin.com/",
  };
  const fc = {
    company: "Fullcourt",
    title: "Junior Developer",
    description: (
      <div>
        Developing push-notification system using TypeScript and React Native to
        increase user engagement <br />
        Learning about startup environment while contributing to growth
      </div>
    ),
    image: fcImage,
    link: "https://www.50four.com/",
  };
  const aires = {
    company: "AI Robotics Ethics Society",
    title: "Director of Marketing",
    description: (
      <div>
        Attends and facilitates weekly discussions about AI and its role in
        society <br />
        Manages newsletter with members to share new developments explore new
        ideas in AI
      </div>
    ),
    image: airesImage,
    link: "https://airesucla8.wixsite.com/mysite",
  };
  const ucla = {
    company: "University of California, Los Angeles",
    title: (
      <div>
        Computer Science and Linguistics Major <br />
        Mandarin Minor
      </div>
    ),
    description:
      "Third-year student with a 3.8 GPA, received Dean’s Honors for multiple quarters",
  };
  const churchill = {
    company: "Winston Churchill High School",
    description: (
      <div>
        Unweighted GPA: 3.94 Weighted GPA: 4.71 <br />
        Varsity Boys Volleyball, Chinese Honor Society Vice President, Academic
        Athletes Co-President, Homework Club Tutor, SPICE Club Vice President
      </div>
    ),
  };

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.header}>
        <h1 className={styles.name}>RESUME</h1>
      </div>
      <div className={styles.resumeCards}>
        <div className={styles.uvm}>
          <ResumeCard
            company={uvm.company}
            title={uvm.title}
            description={uvm.description}
            image={uvm.image}
            link={uvm.link}
          />
        </div>
        <div className={styles.poppin}>
          <ResumeCard
            company={poppin.company}
            title={poppin.title}
            description={poppin.description}
            image={poppin.image}
            link={poppin.link}
          />
        </div>
        <div className={styles.fc}>
          <ResumeCard
            company={fc.company}
            title={fc.title}
            description={fc.description}
            image={fc.image}
            link={fc.link}
          />
        </div>
        <div className={styles.aires}>
          <ResumeCard
            company={aires.company}
            title={aires.title}
            description={aires.description}
            image={aires.image}
            link={aires.link}
          />
        </div>
        <div className={styles.ucla}>
          <ResumeCard
            company={ucla.company}
            title={ucla.title}
            description={ucla.description}
          />
        </div>
        <div className={styles.churchill}>
          <ResumeCard
            company={churchill.company}
            description={churchill.description}
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
      <div className={styles.padding}></div>
    </div>
  );
};

export default Resume;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import Photo from "./pages/photo/Photo";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className={styles.container}>
      <Home />
      <Projects />
    </div>
  );
}

export default App;

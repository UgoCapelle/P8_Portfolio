import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import "../styles/Portfolio.css";

function Portfolio({ isDarkMode, toggleDarkMode }) {
  return (
    <motion.div
      className={`portfolio ${isDarkMode ? "dark-mode" : "light-mode"}`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="content">
        <section className="intro-section">
          <h2>Bienvenue sur mon portfolio!</h2>
          <p>ceci est un texte placeholder le temps de finir le site</p>
        </section>
        <section className="project-section bg-color-1">
          <h3>Projet 1</h3>
          <p>ceci est un texte placeholder le temps de finir le site</p>
        </section>
        <section className="project-section bg-color-2">
          <h3>Projet 2</h3>
          <p>ceci est un texte placeholder le temps de finir le site</p>
        </section>
        <section className="project-section bg-color-3">
          <h3>Projet 3</h3>
          <p>ceci est un texte placeholder le temps de finir le site</p>
        </section>
      </main>
    </motion.div>
  );
}

export default Portfolio;

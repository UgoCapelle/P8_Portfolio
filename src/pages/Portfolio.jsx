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
        <h2>Mon Portfolio</h2>
        <p>Voici quelques-uns de mes projets.</p>
      </main>
    </motion.div>
  );
}

export default Portfolio;

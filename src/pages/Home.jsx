import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Toggle from "../components/Toggle";
import "../styles/Home.css";

function Home({ isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`home ${isDarkMode ? "dark-mode" : "light-mode"}`}
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <h1>Ugo Capelle</h1>
      <button className="open-portfolio" onClick={() => navigate('/portfolio')}>
        Ouvrir le Portfolio
      </button>
      <div className="toggle-wrapper">
        <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </motion.div>
  );
}

export default Home;

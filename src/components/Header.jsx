import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import "../styles/Header.css";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Link to="/" className="title-link">
        <h1 className="title">Ugo Capelle</h1>
      </Link>
      <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}

export default Header;

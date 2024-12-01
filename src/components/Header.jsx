import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import "../styles/Header.css";
import logoBlanc from "../assets/UCBLANC.png";
import logoNoir from "../assets/UCNOIR.png";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Link to="/" className="title-link">
        <img
          src={isDarkMode ? logoBlanc : logoNoir}
          alt="Ugo Capelle Logo"
          className="logo"
        />
      </Link>
      <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}

export default Header;

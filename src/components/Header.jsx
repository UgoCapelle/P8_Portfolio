import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import "../styles/Header.css";

import githubBlanc from "../assets/githubblanc.png";
import githubNoir from "../assets/githubnoir.png";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Link to="/" className="title-link">
        <h1 className="title">Ugo Capelle</h1>
      </Link>
      <div className="right-section">
        <a
          href="https://github.com/UgoCapelle"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-header"
        >
          GitHub
          <img
            src={isDarkMode ? githubBlanc : githubNoir}
            alt="GitHub Logo"
            className="github-icon"
          />
        </a>
        <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
}

export default Header;

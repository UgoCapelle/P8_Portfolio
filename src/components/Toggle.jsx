import React from "react";
import "../styles/toggle.css";

function Toggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="toggle-container">
      <span className="icon sun">☀️</span>
      <div
        className={`toggle ${isDarkMode ? "active" : ""}`}
        onClick={toggleDarkMode}
      >
        <div className="slider"></div>
      </div>
      <span className="icon moon">🌙</span>
    </div>
  );
}

export default Toggle;

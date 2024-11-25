import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Ugo Capelle</h1>
      <button className="open-portfolio">Ouvrir le Portfolio</button>
      <div className="toggle-container">
        <span className="icon sun">☀️</span> {}
        <div
          className={`toggle ${isDarkMode ? "active" : ""}`}
          onClick={toggleDarkMode}
        >
          <div className="slider"></div>
        </div>
        <span className="icon moon">🌙</span> {}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./styles/App.css";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Portfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                  <Footer isDarkMode={isDarkMode} />
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;

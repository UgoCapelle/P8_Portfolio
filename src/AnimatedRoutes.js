import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function AnimatedRoutes({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
      </Routes>

      {!isHomePage && <Footer isDarkMode={isDarkMode} />}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

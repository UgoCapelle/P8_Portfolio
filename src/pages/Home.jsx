import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Toggle from "../components/Toggle";
import "../styles/Home.css";
import { v4 as uuidv4 } from 'uuid';

function Home({ isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [inkDrops, setInkDrops] = useState([]);
  const buttonRef = useRef(null);

  const addInkDrop = useCallback((e) => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      if (
        e.clientX >= buttonRect.left &&
        e.clientX <= buttonRect.right &&
        e.clientY >= buttonRect.top &&
        e.clientY <= buttonRect.bottom
      ) {
        return;
      }
    }

    const newDrop = {
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 30 + 15,
      id: Date.now(),
      duration: Math.random() * 3 + 2
    };
    setInkDrops(prevDrops => [...prevDrops, newDrop]);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', addInkDrop);
    return () => {
      window.removeEventListener('mousemove', addInkDrop);
    };
  }, [addInkDrop]);

  const handlePortfolioClick = () => {
    localStorage.setItem('comingFromHome', 'true');
    navigate('/portfolio');
  };

  return (
    <motion.div
      className={`home ${isDarkMode ? "dark-mode" : "light-mode"}`}
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="content-wrapper">
        <h1>Ugo Capelle</h1>
        <button ref={buttonRef} className="open-portfolio" onClick={handlePortfolioClick}>
          Ouvrir le Portfolio
        </button>
      </div>
      <div className="toggle-wrapper">
        <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      {inkDrops.map(drop => (
        <div
          key={uuidv4()}
          className="ink-drop"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            animationDuration: `${drop.duration}s`
          }}
        />
      ))}
    </motion.div>
  );
}

export default Home;

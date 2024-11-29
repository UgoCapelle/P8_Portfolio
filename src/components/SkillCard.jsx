import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import '../styles/SkillCard.css';

const SkillCard = ({ image, title }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  return (
    <motion.div 
      ref={ref}
      className="skill-card"
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div style={{ transform: "translateZ(30px)" }}>
        <img src={image} alt={title} className="skill-image" />
        <p>{title}</p>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;


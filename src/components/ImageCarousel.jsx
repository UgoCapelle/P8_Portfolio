import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(true);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) handlePrevious();
    else if (info.offset.x < -50) handleNext();
  };

  const getItemPosition = (index) => {
    const totalImages = images.length;
    const relativeIndex = (index - currentIndex + totalImages) % totalImages;

    if (relativeIndex === 0) return 0;
    if (relativeIndex === 1) return 100;
    if (relativeIndex === totalImages - 1) return -100;

    return relativeIndex > 1 ? 200 : -200;
  };

  useEffect(() => {
    setIsPrevButtonVisible(currentIndex !== 0);
    setIsNextButtonVisible(currentIndex !== images.length - 1);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="image-carousel-container">
        <button
          className="carousel-button left"
          onClick={handlePrevious}
          tabIndex={isPrevButtonVisible ? 0 : -1}
          aria-label="Précédent"
          aria-hidden={!isPrevButtonVisible}>
          <ChevronLeft size={32} />
        </button>
        <div className="carousel-wrapper">
          <AnimatePresence>
            {images.map((image, index) => {
              const position = getItemPosition(index);
              const isCentered = position === 0;
              const isAdjacent = Math.abs(position) === 100;

              return (
                <motion.div
                  key={index}
                  initial={{
                    x: `${position}%`,
                    scale: isCentered ? 1 : 0.8,
                    zIndex: isCentered ? 10 : 5,
                    opacity: isCentered ? 1 : isAdjacent ? 0.7 : 0.4
                  }}
                  animate={{
                    x: `${position}%`,
                    scale: isCentered ? 1 : 0.8,
                    zIndex: isCentered ? 10 : 5,
                    opacity: isCentered ? 1 : isAdjacent ? 0.7 : 0.4
                  }}
                  exit={{
                    x: `${position}%`,
                    scale: isCentered ? 1 : 0.8,
                    zIndex: isCentered ? 10 : 5,
                    opacity: 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="carousel-item"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                >
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <button
          className="carousel-button right"
          onClick={handleNext}
          tabIndex={isNextButtonVisible ? 0 : -1}
          aria-label="Suivant"
          aria-hidden={!isNextButtonVisible}>
          <ChevronRight size={32} />
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
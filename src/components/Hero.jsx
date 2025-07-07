import React from 'react'; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/farm.png";
import img2 from "../assets/buildings.jpg";
import img3 from "../assets/beach.jpg";
import img4 from "../assets/snow.jpg";
import PreviewBox from "./PreviewBox";
import SlideText from './SlideText';
const images = [img1, img2, img3, img4];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % images.length;
      setNextIndex(next);
      setTimeout(() => {
        setIndex(next);
        setNextIndex(null);
      }, 800); // match transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => { 
    const next = (index + 1) % images.length;
    setNextIndex(next);
    setTimeout(() => {
      setIndex(next);
      setNextIndex(null);
    }, 800);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden h-[730px] lg:h-[900px]">
      {/* Current Image */}
      <img
        src={images[index]}
        alt="current"
        className="w-full h-full object-cover absolute z-0"
      />  

      <SlideText index={index} />

      {/* Incoming Next Image */}
      <AnimatePresence>
        {nextIndex !== null && (
          <motion.img
            key={nextIndex}
            src={images[nextIndex]}
            alt="next"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover origin-center absolute z-10"
          />
        )}
      </AnimatePresence>

      <div className="relative w-full h-[90vh] lg:h-[112vh] overflow-hidden">

          <PreviewBox
            nextImg={images[(index + 1) % images.length]}
            index={index}
            total={images.length}
            onClick={handleNext}
          />
        
      </div>
    </div>
  );
}

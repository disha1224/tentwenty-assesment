import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import product4 from '../assets/product-4.png';
import product5 from '../assets/product-5.png';
import product6 from '../assets/product-6.png';

const slides = [
  { image: product1, title: 'Client 1', location: 'Dubai, United Arab Emirates' },
  { image: product2, title: 'Client 2', location: 'New York, USA' },
  { image: product3, title: 'Client 3', location: 'Berlin, Germany' },
  { image: product4, title: 'Client 4', location: 'London, England' },
  { image: product5, title: 'Client 5', location: 'Paris, France' },
  { image: product6, title: 'Client 6', location: 'Mosul, Iraq' }
];

export default function Products() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

let isScrolling = false;

const handleWheel = (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && index < slides.length - 1) {
    setIndex((prev) => prev + 1);
  } else if (e.deltaY < 0 && index > 0) {
    setIndex((prev) => prev - 1);
  }

  isScrolling = true;
  setTimeout(() => (isScrolling = false), 9000); // Adjust delay (ms) to slow scroll
};


  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [index]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div>
           <motion.section
            className="py-12 px-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-[30px] lg:text-[56px] font-normal mb-3 lg:mb-6 mt-[33px] lg:mt-[100px]" variants={textVariant}>
              Quality Products
            </motion.h2>
            <motion.p className="lg:max-w-[750px] mx-8 lg:mx-auto mb-10 text-[16px] lg:text-[24px] font-normal text-center" style={{ color: "#7A7777" }} variants={textVariant}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </motion.section>
    <section className="px-6 text-center">

      <div
        ref={containerRef}
        className="relative w-full flex justify-center items-center overflow-hidden h-[500px]"
      >
        {slides.map((slide, i) => {
          const offset = i - index;
          const scale = i === index ? 1 : 0.8;
          const rotate = offset * 6;
          const translateX = offset * 600;
          const translateY = Math.abs(offset) * 30;

          return (
            <motion.div
              key={i}
              className="absolute w-[400px] h-[600px] rounded-xl overflow-hidden shadow-lg bg-white"
              style={{ zIndex: slides.length - Math.abs(offset) }}
              animate={{
                x: translateX,
                y: translateY,
                scale,
                rotate,
                opacity: Math.abs(offset) > 2 ? 0 : 1
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold">{slides[index].title}</h3>
        <p className="text-gray-500">{slides[index].location}</p>
      </motion.div>
    </section>
    </div>
  );
}

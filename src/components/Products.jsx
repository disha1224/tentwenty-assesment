import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    const children = Array.from(container.children);
    const containerCenter = container.offsetWidth / 2;

    let minDist = Infinity;
    let activeIndex = 0;

    children.forEach((child, i) => {
      const box = child.getBoundingClientRect();
      const center = box.left + box.width / 2;
      const dist = Math.abs(center - window.innerWidth / 2);
      if (dist < minDist) {
        minDist = dist;
        activeIndex = i;
      }
    });

    setIndex(activeIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <motion.section
        className="py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-[30px] lg:text-[56px] font-normal mb-3 lg:mb-6 mt-[33px] lg:mt-[100px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Quality Products
        </motion.h2>
        <motion.p
          className="lg:max-w-[750px] mx-8 lg:mx-auto mb-10 text-[16px] lg:text-[24px] font-normal text-center"
          style={{ color: "#7A7777" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </motion.section>

      <section className="px-6 text-center pb-6">
        <div
          ref={scrollRef}
          className="flex gap-[90px] overflow-x-scroll no-scrollbar px-6 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory', overflowY: 'hidden' }}
        >
          {slides.map((slide, i) => {
            const offset = i - index;
            const rotate = offset * 6; // negative = left tilt, positive = right
            const scale = i === index ? 1 : 1;

            return (
              <motion.div
                key={i}
                style={{
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }}
                className="flex-shrink-0 w-[230px] lg:w-[435px] h-[330px] lg:h-[620px] overflow-hidden shadow-lg bg-white scroll-snap-align-center"
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full" />
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

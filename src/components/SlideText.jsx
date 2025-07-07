import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const textVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: 'easeIn' } }
};

export default function SlideText({ index }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index} // re-triggers animation on each slide change
                className="absolute top-45 left-[28px] lg:top-87 lg:left-[134px] text-white z-20 mb-4"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
            >
                <motion.p className="font-normal text-[14px] lg:text-[16px]" variants={textVariants}>
                    Welcome To TenTwenty Farms
                </motion.p>

                <motion.h1
                    className="font-normal text-[46px] lg:text-[64px] leading-[1.2]"
                    variants={textVariants}
                >From Our <br className="lg:hidden" /> Farms <br /> To Your Hands
                </motion.h1>
            </motion.div>
        </AnimatePresence>
    );
}

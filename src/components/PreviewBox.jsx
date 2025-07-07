import React from 'react';
import { motion } from 'framer-motion';

export default function PreviewBox({ nextImg, index, total, onClick }) {
    const animationKey = nextImg; // Reset animation when image changes

    return (
        <div className="absolute bottom-2 left-[24px] lg:left-[136px] flex items-center gap-8 z-30">
            {/* Container with animated border */}
            <div className="relative p-[19px] border border-white/30">
                {/* Border animation segments */}
                {/* Top Center to Bottom Left (Vertical Left) */}
                <motion.div
                    key={animationKey + "-top"}
                    className="absolute -top-[4px] -left-[4px] w-[120px] lg:w-[140px] h-[8px] bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "linear", delay: 1 }}
                />

                <motion.div
                    key={animationKey + "-right"}
                    className="absolute -top-[4px] left-[calc(100%-4px)] w-[8px] h-[120px] lg:h-[140px] bg-white origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: "linear", delay: 2 }}
                />

<               motion.div
                    key={animationKey + "-bottom"}
                    className="absolute -bottom-[4px] -right-[4px] w-[120px] lg:w-[140px] h-[8px] bg-white origin-right"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "linear", delay: 3 }}
                />

                <motion.div
                    key={animationKey + "-left"}
                    className="absolute bottom-[-4px] left-[-4px] w-[8px] h-[120px] lg:h-[140px] bg-white origin-bottom"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: "linear", delay: 4 }}
                />

                {/* Box with image */}
                <div
                    className="relative w-[80px] lg:w-[96px] h-[80px] lg:h-[97px] border border-white/30 cursor-pointer"
                    onClick={onClick}
                >
                    <img
                        src={nextImg}
                        alt="Next"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-normal text-[16px]">
                        Next
                    </span>
                </div>
            </div>

            {/* Counter */}
            <div className="flex items-center text-white font-light tracking-wide text-sm">
                <span className='font-normal text-[16px] '>{String(index + 1).padStart(2, '0')}</span>
                <div className="w-[124px] h-px bg-white mx-2" />
                <span className='font-normal text-[16px] '>{String(total).padStart(2, '0')}</span>
            </div>
        </div>
    );
}

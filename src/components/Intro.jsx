import React from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center z-[9999] bg-gradient-to-br from-black via-bg-main to-bg-sub"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.2,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <motion.div
                className="text-center transition-all duration-1000 ease-in-out"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="text-4xl font-normal text-white mb-2 drop-shadow-md">
                    안녕하세요,
                    <motion.span
                        className="ml-2 bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        웹 개발자
                    </motion.span>
                </div>
                <motion.div
                    className="text-[5.5rem] font-extrabold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                    onAnimationComplete={() => setTimeout(onComplete, 1000)}
                >
                    <span className="bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent inline-block">
                        양준혁
                    </span>
                    <span className="text-white">입니다</span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Intro;

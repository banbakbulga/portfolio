import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-bg-main rounded-full shadow-lg border-none flex items-center justify-center cursor-pointer z-[100] hover:bg-accent transition-colors"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;

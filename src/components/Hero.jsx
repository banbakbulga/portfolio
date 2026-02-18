import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import profileImage from '../img/양준혁 증사 배경제거.png';

const FloatingElement = ({ text, delay, className }) => (
    <motion.div
        className={`absolute bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-3xl text-text-sub text-sm font-semibold border border-border-main shadow-lg ${className}`}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        {text}
    </motion.div>
);

const Hero = ({ onOpenContactModal, setCopyNotification }) => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.contact-icon-wrapper')) {
                setShowEmailTooltip(false);
                setShowPhoneTooltip(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyNotification({ show: true, message: `${type}을 복사했습니다.` });
        } catch (err) {
            console.error('복사 실패:', err);
            setCopyNotification({ show: true, message: '복사에 실패했습니다.' });
        }
    };

    const copyEmail = () => copyToClipboard('junh9126@gmail.com', '메일 주소');
    const copyPhone = () => copyToClipboard('010-5766-1639', '전화번호');

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-main via-bg-sub to-bg-third relative overflow-hidden">
            {/* Background grain effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-0" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`
            }}></div>

            <div className="w-full max-w-[1200px] px-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
                    <motion.div
                        className="text-text-main"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="text-lg font-normal mb-2 text-text-sub"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            안녕하세요,
                            <motion.span
                                className="ml-2 bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                웹 개발자
                            </motion.span>
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight flex flex-wrap gap-x-1"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.8
                                    }
                                }
                            }}
                        >
                            <div className="flex">
                                {["양", "준", "혁"].map((char, index) => (
                                    <motion.span
                                        key={`name-${index}`}
                                        className="bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent inline-block"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: [0.2, 0.65, 0.3, 0.9]
                                                }
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex">
                                {["입", "니", "다"].map((char, index) => (
                                    <motion.span
                                        key={`greeting-${index}`}
                                        className="text-white inline-block"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: [0.2, 0.65, 0.3, 0.9]
                                                }
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.h1>
                        <motion.p
                            className="text-lg leading-relaxed mb-10 text-text-sub max-w-[500px] mx-auto md:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <br />
                            사용자 경험을 중요시하는 마인드,
                            <br />창의적이고 직관적인 웹 애플리케이션을 개발합니다.
                            <br />데이터를 활용한 혁신적인 솔루션을 제공합니다.
                        </motion.p>
                        <motion.div
                            className="flex gap-6 justify-center md:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <motion.a
                                href="https://github.com/banbakbulga"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-text-sub text-2xl p-2 transition-all duration-300 hover:text-secondary hover:-translate-y-1"
                            >
                                <FaGithub />
                            </motion.a>

                            <div className="contact-icon-wrapper relative inline-block">
                                <motion.button
                                    onClick={copyEmail}
                                    onMouseEnter={() => setShowEmailTooltip(true)}
                                    onMouseLeave={() => setShowEmailTooltip(false)}
                                    aria-label="Email 복사"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-none text-text-sub text-2xl p-2 cursor-pointer transition-all duration-300 hover:text-secondary hover:-translate-y-1"
                                >
                                    <FaEnvelope />
                                </motion.button>
                                <AnimatePresence>
                                    {showEmailTooltip && (
                                        <motion.div
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-bg-third text-text-main px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg border border-border-main z-50"
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span>junh9126@gmail.com</span>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-third"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="contact-icon-wrapper relative inline-block">
                                <motion.button
                                    onClick={copyPhone}
                                    onMouseEnter={() => setShowPhoneTooltip(true)}
                                    onMouseLeave={() => setShowPhoneTooltip(false)}
                                    aria-label="전화번호 복사"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-none text-text-sub text-2xl p-2 cursor-pointer transition-all duration-300 hover:text-secondary hover:-translate-y-1"
                                >
                                    <FaPhone />
                                </motion.button>
                                <AnimatePresence>
                                    {showPhoneTooltip && (
                                        <motion.div
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-bg-third text-text-main px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg border border-border-main z-50"
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span>010-5766-1639</span>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-third"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <div className="relative z-0">
                            <motion.div
                                className="relative group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.6 }}
                                onClick={onOpenContactModal}
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 py-1 px-3 text-xs font-medium z-10 transition-all duration-300 text-text-sub opacity-0 group-hover:opacity-100 group-hover:-translate-y-1">Click me</div>
                                <div className="w-[280px] md:w-[420px] h-auto relative">
                                    <img
                                        src={profileImage}
                                        alt="양준혁 프로필 사진"
                                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.005]"
                                    />
                                </div>
                                <motion.div
                                    className="absolute bottom-[-15px] left-[54%] -translate-x-1/2 bg-gradient-to-br from-secondary to-accent text-bg-main px-7 py-3 rounded-full text-base font-bold shadow-[0_8px_25px_rgba(100,255,218,0.3)] border-2 border-border-main whitespace-nowrap"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5, duration: 0.6 }}
                                >
                                    <span>Available for work</span>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Floating Elements (Hidden on mobile) */}
                        <div className="hidden md:block absolute inset-0 pointer-events-none">
                            {/* Simplified floating elements with Tailwind animations if config allows or inline styles */}
                            {/* Since we can't easily do complex keyframes in Tailwind without config, I'll use framer-motion here which is already used */}
                            <FloatingElement text="React" delay={0} className="top-[15%] right-[5%]" />
                            <FloatingElement text="UI/UX" delay={1} className="top-[40%] left-[-5%]" />
                            <FloatingElement text="Data" delay={2} className="bottom-[40%] right-[5%]" />
                            <FloatingElement text="LLM" delay={0.5} className="bottom-[15%] left-[5%]" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <AnimatePresence>
                    {showScrollIndicator && (
                        <motion.div
                            className="fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 2, duration: 0.3 }}
                        >
                            <div className="text-text-sub text-sm font-medium drop-shadow-md tracking-wide">더 알아보기</div>
                            <motion.div
                                className="text-text-sub opacity-80"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};



export default Hero;

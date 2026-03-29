import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import profileImage from '../img/양준혁 증사 배경제거.png';

const IconButton = ({ icon: Icon, tooltip, onClick, onMouseEnter, onMouseLeave, showTooltip }) => (
    <div className="relative inline-flex items-center justify-center w-10 h-10 group">
        <motion.button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-sub text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-text-main cursor-pointer outline-none"
        >
            <Icon />
        </motion.button>
        <AnimatePresence>
            {showTooltip && (
                <motion.div
                    initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full mb-2.5 left-1/2 px-3 py-1.5 bg-bg-sub border border-white/10 rounded-lg text-xs text-text-main shadow-lg whitespace-nowrap z-50 pointer-events-none"
                >
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-bg-sub"></div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const Hero = ({ onOpenContactModal, setCopyNotification }) => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollIndicator(window.scrollY < 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyNotification({ show: true, message: `${type}을 복사했습니다.` });
        } catch (err) {
            setCopyNotification({ show: true, message: '복사에 실패했습니다.' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Subtle gradient overlay — no flashy glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-sub/30 via-transparent to-bg-sub/20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 mt-20 md:mt-0">
                {/* Left: Typography & CTAs */}
                <motion.div
                    className="flex-1 w-full text-center md:text-left z-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                        </span>
                        <span className="text-text-sub text-[11px] font-mono tracking-wider uppercase">Available for work</span>
                    </motion.div>

                    <h1 className="text-[2.8rem] sm:text-[4rem] lg:text-[5rem] font-bold tracking-tight leading-[1.1] text-text-main mb-6">
                        <motion.span 
                            className="block"
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
                        >Frontend</motion.span>
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-text-sub to-text-light"
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
                        >Developer.</motion.span>
                    </h1>

                    <motion.p 
                        className="text-base sm:text-lg text-text-sub font-light leading-relaxed max-w-[480px] mx-auto md:mx-0 mb-10"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        안녕하세요, 웹 개발자 <strong className="font-medium text-text-main">양준혁</strong>입니다.<br className="hidden md:block"/>
                        사용자 중심의 직관적 UX와 복잡한 데이터 시각화를 연결하는 <br className="hidden md:block"/>
                        완성도 높은 웹 인터랙션 경험을 만듭니다.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <a 
                            href="#projects" 
                            className="group flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-bg-main font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors duration-200 outline-none no-underline"
                        >
                            View Projects
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5 text-xs" />
                        </a>

                        <div className="flex gap-2">
                            <motion.a
                                href="https://github.com/banbakbulga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-sub text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-text-main"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                            </motion.a>
                            <IconButton 
                                icon={FaEnvelope} 
                                tooltip="junh9126@gmail.com" 
                                onClick={() => copyToClipboard('junh9126@gmail.com', '이메일')}
                                onMouseEnter={() => setShowEmailTooltip(true)}
                                onMouseLeave={() => setShowEmailTooltip(false)}
                                showTooltip={showEmailTooltip}
                            />
                            <IconButton 
                                icon={FaPhone} 
                                tooltip="010-5766-1639" 
                                onClick={() => copyToClipboard('010-5766-1639', '전화번호')}
                                onMouseEnter={() => setShowPhoneTooltip(true)}
                                onMouseLeave={() => setShowPhoneTooltip(false)}
                                showTooltip={showPhoneTooltip}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image */}
                <motion.div 
                    className="flex-1 w-full relative flex justify-center items-center mt-8 md:mt-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
                >
                    <div className="relative w-[260px] md:w-[360px]">
                        {/* Very subtle ambient glow - barely visible */}
                        <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl scale-110 pointer-events-none"></div>
                        
                        <motion.div 
                            className="relative z-10 w-full cursor-pointer group"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            onClick={onOpenContactModal}
                        >
                            <img 
                                src={profileImage} 
                                alt="양준혁 프로필" 
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="px-3 py-1.5 bg-bg-sub/90 backdrop-blur-sm border border-white/10 text-text-main text-xs rounded-md shadow-lg">
                                    Contact Me
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            {/* Minimal Scroll Indicator */}
            <AnimatePresence>
                {showScrollIndicator && (
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none"
                        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <div className="w-px h-10 relative overflow-hidden bg-white/10">
                            <motion.div 
                                className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"
                                animate={{ y: [-20, 40] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.25em] text-text-light">Scroll</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;

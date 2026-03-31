import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import cityImage from '../img/city.PNG';

const Hero = ({ onOpenContactModal, setCopyNotification }) => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [imageRevealed, setImageRevealed] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollIndicator(window.scrollY < 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setImageRevealed(true), 1600);
        return () => clearTimeout(timer);
    }, []);

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyNotification({ show: true, message: `${type}을 복사했습니다.` });
        } catch (err) {
            setCopyNotification({ show: true, message: '복사에 실패했습니다.' });
        }
    };

    const revealEase = [0.25, 0.4, 0.25, 1];

    return (
        <section id="home" className="min-h-screen flex flex-col justify-start relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 pt-10 md:pt-14">
                {/* Line 1 */}
                <div className="overflow-hidden">
                    <motion.div
                        className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-text-main leading-[1.15] tracking-tight"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: revealEase }}
                    >
                        치밀한 설계와 기술로,
                    </motion.div>
                </div>

                {/* Line 2 - image slides in between text */}
                <div className="overflow-hidden">
                    <motion.div
                        className={`text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-text-main leading-[1.15] tracking-tight flex items-center transition-[gap] duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${imageRevealed ? 'gap-2 sm:gap-3 md:gap-5' : 'gap-[0.5em]'}`}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: revealEase }}
                    >
                        <span>사용자가</span>
                        <span
                            className={`inline-block overflow-hidden flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] h-[42px] sm:h-[54px] md:h-[72px] lg:h-[92px] xl:h-[102px] ${imageRevealed ? 'w-[65px] sm:w-[85px] md:w-[125px] lg:w-[165px] xl:w-[185px]' : 'w-0'}`}
                        >
                            <img
                                src={cityImage}
                                alt="city"
                                className="w-[65px] sm:w-[85px] md:w-[125px] lg:w-[165px] xl:w-[185px] h-full object-cover object-center"
                            />
                        </span>
                        <span>머무르는</span>
                    </motion.div>
                </div>

                {/* Line 3 */}
                <div className="overflow-hidden">
                    <motion.div
                        className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-text-main leading-[1.15] tracking-tight"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: revealEase }}
                    >
                        웹 경험을 만듭니다.
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="absolute bottom-10 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 flex items-end justify-between z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                {/* Left: Available + Name */}
                <div className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    </span>
                    <span className="text-text-sub text-xs font-mono tracking-wider">양준혁 — Web Developer</span>
                </div>

                {/* Right: Nav + Contact */}
                <div className="flex flex-col items-end gap-6">
                    {/* Section Nav */}
                    <nav className="flex flex-col items-end gap-4">
                        {[
                            { label: "About", id: "about" },
                            { label: "Career", id: "career" },
                            { label: "Projects", id: "projects" },
                        ].map((item, idx) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-text-light text-lg font-mono tracking-wider hover:text-text-main transition-colors duration-300 no-underline"
                            >
                                <span className="text-white/20 mr-4">{String(idx + 1).padStart(2, '0')}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Icons */}
                    <div className="flex gap-2">
                        <a
                            href="https://github.com/banbakbulga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-text-light text-sm transition-all duration-300 hover:text-text-main"
                        >
                            <FaGithub />
                        </a>
                        <button
                            onClick={() => copyToClipboard('junh9126@gmail.com', '이메일')}
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-text-light text-sm transition-all duration-300 hover:text-text-main cursor-pointer outline-none bg-transparent border-none"
                        >
                            <FaEnvelope />
                        </button>
                        <button
                            onClick={() => copyToClipboard('010-5766-1639', '전화번호')}
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-text-light text-sm transition-all duration-300 hover:text-text-main cursor-pointer outline-none bg-transparent border-none"
                        >
                            <FaPhone />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <AnimatePresence>
                {showScrollIndicator && (
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <div className="w-px h-12 relative overflow-hidden bg-white/20">
                            <motion.div
                                className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/70 to-transparent"
                                animate={{ y: [-24, 48] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-text-sub">Scroll</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;

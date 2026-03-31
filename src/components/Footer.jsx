import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-32 pb-12 overflow-hidden">
            <div className="w-full max-w-[68.75rem] mx-auto px-6 relative z-10">

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <p className="text-text-light text-xs font-mono uppercase tracking-[0.2em] mb-6">
                        Contact
                    </p>
                    <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold text-text-main leading-[1.1] tracking-tight mb-8">
                        함께 만들어갈<br />
                        이야기를 기다립니다.
                    </h2>
                    <a
                        href="mailto:junh9126@gmail.com"
                        className="inline-flex items-center gap-2 text-text-sub hover:text-white transition-colors duration-300 text-sm md:text-base group no-underline"
                    >
                        <span className="font-mono">junh9126@gmail.com</span>
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-white/[0.06]" />

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 gap-6">
                    <div className="flex flex-col gap-1.5">
                        <p className="text-text-light text-xs">
                            &copy; {new Date().getFullYear()} Yang Jun Hyuk
                        </p>
                        <p className="text-white/15 text-[0.625rem] font-mono tracking-wider">
                            Built with React & Tailwind
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/banbakbulga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/30 hover:text-white hover:border-white/25 transition-all duration-300 no-underline"
                        >
                            <FaGithub className="text-sm" />
                        </a>
                        <a
                            href="mailto:junh9126@gmail.com"
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/30 hover:text-white hover:border-white/25 transition-all duration-300 no-underline"
                        >
                            <FaEnvelope className="text-xs" />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/30 hover:text-white hover:border-white/25 transition-all duration-300 ml-2"
                        >
                            <FaArrowUp className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

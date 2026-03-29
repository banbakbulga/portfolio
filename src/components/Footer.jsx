import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="relative pt-24 pb-10 overflow-hidden border-t border-white/5">
            <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main mb-4">
                        Let's Work Together.
                    </h2>
                    
                    <p className="text-base text-text-sub font-light max-w-lg mx-auto leading-relaxed mb-10">
                        기술과 사용자 경험의 조화를 통해 <br className="hidden md:block"/>
                        의미 있는 디지털 프로덕트를 만들어가겠습니다.
                    </p>

                    <div className="flex items-center gap-3 mb-20">
                        <a 
                            href="mailto:junh9126@gmail.com" 
                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-bg-main rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200 no-underline"
                        >
                            <FaEnvelope className="text-sm" />
                            Email Me
                        </a>
                        <a 
                            href="https://github.com/banbakbulga" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-text-sub hover:bg-white/10 hover:text-text-main transition-all duration-200 text-lg no-underline"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 text-xs text-text-light gap-3">
                    <p>&copy; {new Date().getFullYear()} Yang Jun Hyuk. All rights reserved.</p>
                    <p className="font-mono text-[10px] tracking-widest uppercase">Built with React & Tailwind</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaPython, FaGithub, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai, SiPostgresql, SiElectron, SiFlutter, SiTypescript } from 'react-icons/si';
import mimoticonImage from '../img/미모티콘.png';

const About = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillList = [
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Electron", icon: SiElectron, color: "#47848F" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Python", icon: FaPython, color: "#3776ab" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "OpenAI", icon: SiOpenai, color: "#412991" },
        { name: "GitHub", icon: FaGithub, color: "#e2e8f0" }
    ];

    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.015)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className="text-text-light text-xs font-mono tracking-widest uppercase mb-3 block">About</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                        About Me
                    </h2>
                    <div className="w-8 h-px bg-text-light mt-4"></div>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20 mb-24">
                    
                    {/* Left: Avatar + Tags */}
                    <motion.div 
                        className="w-full lg:w-1/3 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
                            <div className="absolute inset-0 rounded-full bg-bg-sub border border-white/5 overflow-hidden flex items-center justify-center p-3">
                                <img
                                    src={mimoticonImage}
                                    alt="미모티콘"
                                    className="w-[80%] h-[80%] object-contain drop-shadow-md"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {["협력과_소통", "사용자_경험", "데이터_활용", "끊임없는_성장"].map((tag, idx) => (
                                <motion.span
                                    key={tag}
                                    className="text-text-sub px-3 py-1.5 rounded-md text-xs font-medium bg-white/[0.03] border border-white/5 transition-colors duration-300 hover:border-white/15 hover:text-text-main cursor-default"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                                    viewport={{ once: true }}
                                >
                                    #{tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Value Cards */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                keyword: "협력과 소통",
                                desc: "서로 다른 언어와 사고방식을 이해하고 연결할 때, 비로소 진짜 협력이 이루어진다고 믿습니다."
                            },
                            {
                                keyword: "데이터 활용",
                                desc: "거대한 파도 속에서도 의미 있는 패턴을 찾아내고 질서를 세우며, 가치 있는 정보로 만듭니다."
                            },
                            {
                                keyword: "사용자 경험",
                                desc: "복잡한 정보를 정리하고, 사람과 기술이 자연스럽게 이어지는 흐름을 만드는 것을 좋아합니다."
                            },
                            {
                                keyword: "끊임없는 성장",
                                desc: "프론트엔드와 백엔드를 넘나들며, 더 나은 협업과 사용자 경험을 위해 기술적 한계를 넓혀갑니다."
                            }
                        ].map((card, index) => (
                            <motion.div 
                                key={index} 
                                className="group h-[180px] [perspective:1000px] cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.08 * index }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div className="relative w-full h-full transition-all duration-600 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-bg-sub/50 border border-white/5 rounded-xl [backface-visibility:hidden]">
                                        <h4 className="text-lg font-semibold text-text-main tracking-wide">
                                            {card.keyword}
                                        </h4>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 bg-bg-sub border border-white/10 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                        <p className="text-text-sub text-sm leading-relaxed text-center break-keep">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <motion.div 
                    className="pt-12 border-t border-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-lg font-semibold text-text-main mb-8 tracking-tight">
                        Skills & Tools
                    </h3>
                    
                    <div className="flex justify-start gap-4 md:gap-5 flex-wrap max-w-[800px]">
                        {skillList.map((skill, idx) => (
                            <motion.div
                                key={skill.name}
                                className="relative group w-12 h-12"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.03 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div className="w-full h-full flex items-center justify-center bg-white/[0.03] border border-white/5 rounded-lg transition-all duration-200 group-hover:bg-white/[0.08] group-hover:border-white/15 cursor-pointer">
                                    <skill.icon
                                        className="text-xl transition-all duration-200 opacity-60 group-hover:opacity-100"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                
                                <AnimatePresence>
                                    {hoveredSkill === skill.name && (
                                        <motion.div
                                            className="absolute top-full mt-2 left-1/2 px-2.5 py-1 bg-bg-sub text-text-main rounded-md text-[11px] font-medium shadow-lg border border-white/10 z-50 pointer-events-none whitespace-nowrap"
                                            initial={{ opacity: 0, y: -5, x: "-50%" }}
                                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                                            exit={{ opacity: 0, y: -5, x: "-50%" }}
                                            transition={{ duration: 0.12 }}
                                        >
                                            {skill.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

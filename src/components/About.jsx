import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai } from 'react-icons/si';
import mimoticonImage from '../img/미모티콘.png';

const About = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillList = [
        { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "Python", icon: FaPython, color: "#3776ab" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "OpenAI", icon: SiOpenai, color: "#412991" },
        { name: "GitHub", icon: FaGithub, color: "#ffffff" }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-br from-bg-sub to-bg-third min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[1200px] px-5">
                <motion.h2
                    className="text-center text-4xl mb-12 text-text-main font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About me
                </motion.h2>
                <motion.div
                    className="flex flex-col items-center gap-10 max-w-[800px] mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* 1. Memoji */}
                    <motion.div
                        className="w-full flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={mimoticonImage}
                            alt="미모티콘"
                            className="max-w-full h-auto max-h-[250px] object-contain"
                        />
                    </motion.div>

                    {/* 2. Hashtags */}
                    <motion.div
                        className="flex justify-center gap-4 flex-wrap mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {["협력과_소통", "사용자_경험", "데이터_활용", "끊임없는_성장"].map((tag) => (
                            <motion.span
                                key={tag}
                                className="text-text-main px-4 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-default bg-white/5 border border-white/10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                #{tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* 3. Keyword & Description Flip Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
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
                            <div key={index} className="group h-[220px] [perspective:1000px]">
                                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md [backface-visibility:hidden]">
                                        <h4 className="text-2xl font-bold text-text-main">{card.keyword}</h4>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 bg-white/10 border border-secondary/30 rounded-2xl backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                        <p className="text-text-sub text-base leading-relaxed text-center break-keep">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* 4. Skills */}
                    <div className="w-full text-center mt-4">
                        <motion.h3
                            className="text-2xl mb-6 text-text-main font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Skills & Tools
                        </motion.h3>
                        <motion.div
                            className="flex justify-center gap-5 flex-wrap"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {skillList.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex items-center justify-center w-12 h-12 p-3 bg-white/5 backdrop-blur-md border border-border-main rounded-xl relative transition-all duration-300 hover:bg-white/10 hover:border-secondary hover:shadow-[0_8px_25px_rgba(100,255,218,0.2)]"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <skill.icon
                                        className="text-2xl transition-all duration-300"
                                        style={{ color: skill.color }}
                                    />
                                    <AnimatePresence>
                                        {hoveredSkill === skill.name && (
                                            <motion.div
                                                className="absolute top-[125%] left-1/2 -translate-x-1/2 bg-bg-third text-text-main px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg border border-border-main z-50 pointer-events-none backdrop-blur-sm"
                                                initial={{ opacity: 0, y: 5, x: "-50%", scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                                exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.9 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {skill.name}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-6 border-transparent border-b-bg-third"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

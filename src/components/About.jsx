import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaGithub, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai, SiPostgresql, SiElectron, SiFlutter, SiTypescript } from 'react-icons/si';
import profileImage from '../img/양준혁 증사 배경제거.png';

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

const values = [
    {
        keyword: "협력과 소통",
        desc: "서로 다른 언어와 사고방식을 이해하고 연결할 때, 비로소 진짜 협력이 이루어진다고 믿습니다. 기획자, 디자이너, 개발자 사이의 간극을 좁히며 함께 더 나은 결과물을 만들어갑니다."
    },
    {
        keyword: "데이터 활용",
        desc: "거대한 파도 속에서도 의미 있는 패턴을 찾아내고 질서를 세우며, 가치 있는 정보로 만듭니다. 데이터가 말하는 이야기를 읽고, 그것을 사용자에게 전달하는 과정을 설계합니다."
    },
    {
        keyword: "사용자 경험",
        desc: "복잡한 정보를 정리하고, 사람과 기술이 자연스럽게 이어지는 흐름을 만드는 것을 좋아합니다. 기술은 보이지 않아야 하고, 경험만 남아야 한다고 생각합니다."
    },
    {
        keyword: "끊임없는 성장",
        desc: "프론트엔드와 백엔드를 넘나들며, 더 나은 협업과 사용자 경험을 위해 기술적 한계를 넓혀갑니다. 새로운 기술을 두려워하지 않고, 필요한 곳에 적재적소로 활용합니다."
    }
];

const About = () => {
    return (
        <section id="about" className="py-32 md:py-40 relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">

                {/* Section Label */}
                <motion.span
                    className="text-text-light text-xs font-mono tracking-widest uppercase mb-6 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    About
                </motion.span>

                {/* Large Heading - Hero style typography */}
                <motion.h2
                    className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold text-text-main leading-[1.2] tracking-tight mb-20 md:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    사용자와 기술 사이,<br />
                    그 연결을 설계합니다.
                </motion.h2>

                {/* Intro: Text + Avatar */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 md:mb-32">

                    {/* Left: Introduction text */}
                    <motion.div
                        className="lg:w-3/5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="text-text-sub text-base md:text-lg leading-[1.8] mb-6 break-keep">
                            복잡한 문제 속에서 본질을 찾아내고, 그것을 직관적인 인터페이스로 풀어내는 과정에 매력을 느낍니다.
                            단순히 동작하는 코드를 넘어, 사용자가 자연스럽게 머무르고 싶은 경험을 만드는 것이 저의 목표입니다.
                        </p>
                        <p className="text-text-sub text-base md:text-lg leading-[1.8] mb-6 break-keep">
                            프론트엔드부터 백엔드, 데이터 파이프라인까지 — 경계를 두지 않고 필요한 기술을 익히며 문제를 해결합니다.
                            React와 TypeScript로 인터랙티브한 UI를 구축하고, FastAPI와 PostgreSQL로 안정적인 서버를 설계하며,
                            Docker로 일관된 개발 환경을 유지합니다.
                        </p>
                        <p className="text-text-sub text-base md:text-lg leading-[1.8] mb-6 break-keep">
                            최근에는 LLM과 RAG 기술에 깊은 관심을 가지고 있습니다.
                            대규모 언어 모델을 활용한 지능형 챗봇을 설계하고, RAG 파이프라인을 통해 도메인 특화된 정보를 정확하게 전달하는 시스템을 구축합니다.
                            AI가 단순한 도구를 넘어, 사용자와 자연스럽게 소통하는 경험을 만드는 데 집중하고 있습니다.
                        </p>
                        <p className="text-text-sub text-base md:text-lg leading-[1.8] break-keep">
                            기술은 도구일 뿐, 중요한 것은 그 도구로 어떤 가치를 만들어내느냐입니다.
                            치밀한 설계와 끊임없는 개선을 통해, 사람과 기술이 자연스럽게 이어지는 경험을 만들겠습니다.
                        </p>
                    </motion.div>

                    {/* Right: Avatar */}
                    <motion.div
                        className="lg:w-2/5 flex justify-center lg:justify-end items-start lg:pr-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <img
                            src={profileImage}
                            alt="프로필"
                            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Values - Editorial numbered list */}
                <div className="border-t border-white/[0.06] pt-16 md:pt-20 mb-24 md:mb-32">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8 md:py-10 border-b border-white/[0.06] group"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <span className="text-white/15 font-mono text-sm shrink-0 pt-1">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h4 className="text-text-main text-lg md:text-xl font-semibold mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                                    {v.keyword}
                                </h4>
                                <p className="text-text-sub text-sm md:text-base leading-relaxed break-keep">
                                    {v.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className="text-text-light text-xs font-mono tracking-widest uppercase mb-8 block">
                        Skills & Tools
                    </span>

                    <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, idx) => (
                            <motion.div
                                key={skill.name}
                                className="group relative"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.04 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-white/5 rounded-lg transition-all duration-200 group-hover:bg-white/[0.08] group-hover:border-white/15 cursor-pointer">
                                    <skill.icon
                                        className="text-xl transition-all duration-200 opacity-50 group-hover:opacity-100"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-bg-sub text-text-main rounded-md text-[11px] font-medium shadow-lg border border-white/10 z-50 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    {skill.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

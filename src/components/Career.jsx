import React from 'react';
import { motion } from 'framer-motion';

const careerItems = [
    {
        title: "LUMOS 소프트웨어 개발팀",
        period: "2026.01 - 현재",
        role: "Frontend & Backend Developer",
        description: "\"LOLPAGO\" 웹사이트 개발 및 롤파고 프로그램(리그오브레전드 코칭 시스템) 개발을 진행하고 있습니다. 추가적으로 다양한 외주 업무도 함께 수행중입니다."
    },
    {
        title: "한국타이어앤테크놀로지 R&D DX팀",
        period: "2025.09 - 2025.12",
        role: "Intern",
        description: "R&D DX팀에서 인턴으로 근무하며 데이터 전처리와 문서 관리 자동화 관련 다양한 업무를 수행했습니다. 사내 챗봇 고도화 작업을 통해 실무 경험을 쌓았습니다."
    },
    {
        title: "NHN 백엔드 아카데미",
        period: "2024.07 - 2024.12",
        role: "Backend Developer",
        description: "Spring Boot를 통한 전반적인 백엔드에 대해 학습했으며, 팀 프로젝트로 '도서 구매 웹사이트'를 진행했습니다. 백엔드 시스템 설계, 데이터베이스 모델링, REST API 개발을 담당했으며, 우수상을 수상했습니다."
    },
];

const Career = () => {
    return (
        <section id="career" className="py-32 md:py-40 relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">

                {/* Section Label */}
                <motion.span
                    className="text-text-light text-xs font-mono tracking-widest uppercase mb-6 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Career
                </motion.span>

                {/* Large Heading */}
                <motion.h2
                    className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold text-text-main leading-[1.2] tracking-tight mb-20 md:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    걸어온 길,<br />
                    쌓아온 경험.
                </motion.h2>

                {/* Career Items */}
                <div className="border-t border-white/[0.06]">
                    {careerItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-4 md:gap-12 py-10 md:py-14 border-b border-white/[0.06]"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {/* Left: Period + Number */}
                            <div className="flex flex-col gap-2">
                                <span className="text-white/15 font-mono text-sm">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-text-light text-sm font-mono tracking-wider">
                                    {item.period}
                                </span>
                            </div>

                            {/* Right: Content */}
                            <div>
                                <h3 className="text-text-main text-xl md:text-2xl font-semibold mb-1 tracking-tight group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <span className="text-text-light text-xs font-mono tracking-wider uppercase mb-4 block">
                                    {item.role}
                                </span>
                                <p className="text-text-sub text-sm md:text-base leading-relaxed break-keep">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;

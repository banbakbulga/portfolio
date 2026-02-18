import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
    const careerItems = [
        {
            title: "LUMOS 소프트웨어 개발팀",
            period: "2026.01 - 현재",
            description: "\"LOLPAGO\" 웹사이트 개발 및 롤파고 프로그램(리그오브레전드 코칭 시스템) 개발을 진행하고 있습니다."
        },
        {
            title: "한국타이어앤테크놀로지 R&D DX팀 인턴",
            period: "2025.09 - 2025.12",
            description: <>R&D DX팀에서 인턴으로 근무하며 데이터 전처리와 문서 관리 자동화 관련 다양한 업무를 수행했습니다.<br />사내 챗봇 고도화 작업을 통해 실무 경험을 쌓았습니다.</>
        },
        {
            title: "충남대학교 컴퓨터융합학부 학부연구생 인턴",
            period: "2025.03 - 2025.08",
            description: <>데이터 네트워크 연구실에서 학부연구생으로 근무했습니다.<br />기존 라디오 아카이브 데이터를 활용한 라디오 다시듣기 웹사이트를 단독으로 개발하여 실무 프로젝트 경험을 쌓았습니다.</>
        },
        {
            title: "NHN 백엔드 아카데미",
            period: "2024.07 - 2024.12",
            description: "NHN 백엔드 아카데미에서 Spring Boot를 통한 전반적인 백엔드에 대해 학습했으며 이후 팀 프로젝트로 '도서 구매 웹사이트' 프로젝트를 진행했습니다. Spring Boot 기반 백엔드 시스템 설계와 구현, 데이터베이스 모델링, REST API 개발을 담당했으며, 기능별 브랜치 전략과 코드 리뷰를 통한 협업 프로세스를 경험했으며, 우수상을 수상했습니다."
        },
        {
            title: "충남대학교 컴퓨터융합학부 부학생회장",
            period: "2024.01 - 2024.12",
            description: <>학부 학생회 부회장으로서 학생 자치와 학부 운영을 총괄했습니다.<br />학생 의견을 수렴해 학과와의 소통 창구 역할을 수행하고, 복지·학업 지원 개선안을 제안했습니다. 신입생 OT, MT, 체육대회, 엔지니어링 페어 등 주요 행사를 기획·운영하며 프로그램 구성과 예산 관리를 담당했습니다.</>
        },
        {
            title: "병역 복무 (KATUSA)",
            period: "2021.01 - 2022.07",
            description: <>KATUSA로 복무하며 병장 계급으로 만기제대했습니다.<br />민간기업과의 통역 및 보급 업무를 수행했으며, 군 복무 기간 동안 책임감과 협업 능력을 기를 수 있었습니다.</>
        },
        {
            title: "충남대학교 컴퓨터융합학부",
            period: "2020.03 - 2026.02 (졸업예정)",
            description: "컴퓨터융합학부에서 기본적인 프로그래밍 언어를 배우고, 알고리즘 문제를 풀며 개발 기초를 다진 후 다양한 팀 프로젝트와 졸업프로젝트를 통해 실무 중심의 개발 경험을 쌓았습니다. 협업 기반의 프로젝트 운영과 체계적인 개발 프로세스를 학습하며 종합적인 개발 역량을 향상시켰습니다."
        }
    ];

    return (
        <section id="career" className="py-24 bg-gradient-to-br from-bg-main to-bg-sub min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[1200px] px-5">
                <motion.h2
                    className="text-center text-4xl mb-4 text-text-main font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Career
                </motion.h2>
                <motion.div
                    className="text-center text-sm font-medium text-text-sub mb-8 opacity-70 tracking-widest uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Timeline
                </motion.div>
                <motion.div
                    className="relative max-w-[1300px] mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Center Line connected to timeline-items */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent -translate-x-1/2"></div>
                    {/* Mobile Line left aligned */}
                    <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>

                    {careerItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:flex-row md:even:flex-row-reverse max-md:flex-col max-md:items-start max-md:pl-12`}
                        >
                            {/* Marker */}
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-secondary to-accent rounded-full border-[3px] border-bg-main z-10 shadow-[0_0_20px_rgba(100,255,218,0.5)]"></div>
                            {/* Mobile Marker */}
                            <div className="md:hidden absolute left-5 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-secondary to-accent rounded-full border-[3px] border-bg-main z-10 shadow-[0_0_20px_rgba(100,255,218,0.5)]"></div>

                            <div className={`w-full md:w-[calc(50%-1.5rem)] bg-white/5 backdrop-blur-md border border-border-main rounded-2xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-secondary ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                                <h3 className="text-text-main text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-secondary text-sm font-medium mb-4">{item.period}</p>
                                <p className="text-text-sub text-base leading-relaxed m-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Career;

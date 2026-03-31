import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaNetworkWired, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai, SiSpring, SiMysql, SiRedis, SiElasticsearch, SiTailwindcss, SiFlask, SiPostgresql, SiVite } from 'react-icons/si';

import kakaoImage from '../img/kakao.png';
import heukbeakImage from '../img/heukbeak.png';
import bgp1Image from '../img/bgp1.png';
import bgp2Image from '../img/bgp2.png';
import bgp3Image from '../img/bgp3.png';
import radio1Image from '../img/radio1.png';
import radio2Image from '../img/radio2.png';
import radio3Image from '../img/radio3.png';
import radio4Image from '../img/radio4.png';
import chatbot1Image from '../img/chatbot1.png';
import portfolioImage from '../img/portfolio.png';
import dolbyImage from '../img/돌비.png';
import lolpagoImage from '../img/롤파고.png';
import resoImage from '../img/르쏘.png';
import lolpagoAppImage from '../img/롤파고앱.png';
import lolpagoApp2Image from '../img/롤파고앱2.png';
import lolpagoApp3Image from '../img/롤파고앱3.png';
import lolpagoApp4Image from '../img/롤파고앱4.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryRef = useRef(null);

    const scroll = useCallback((direction) => {
        if (!galleryRef.current) return;
        const scrollAmount = galleryRef.current.offsetWidth * 0.6;
        galleryRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }, []);
    const projects = [
        {
            id: 1,
            title: "카카오톡 UI 클론 코딩",
            description: "HTML과 CSS를 활용해 카카오톡 메인 UI를 클론하고 나만의 디자인을 적용한 프론트엔드 프로젝트입니다.",
            image: kakaoImage,
            tech: ["HTML", "CSS"],
            link: "https://banbakbulga.github.io/kokoa/",
            github: "https://github.com/banbakbulga/kokoa",
            category: "frontend",
            featured: true
        },
        {
            id: 2,
            title: "NHN 아카데미 흑백문고",
            description: "고객이 책을 검색하고 주문할 수 있는 인터넷 서점을 Spring Boot 마이크로서비스 아키텍처로 개발했습니다.",
            image: heukbeakImage,
            tech: ["Java", "Spring Boot", "MySQL", "Redis", "Elasticsearch"],
            link: "https://github.com/nhnacademy-be7-heukbaekbook",
            github: "https://github.com/nhnacademy-be7-heukbaekbook",
            category: "backend",
            featured: true
        },
        {
            id: 3,
            title: "LLM 기반 BGP 분석 챗봇",
            description: "LLM을 활용해 BGP 데이터를 분석하고 사용자 질의에 답변하는 챗봇을 개발하고 있습니다.",
            image: bgp1Image,
            tech: ["Python", "OpenAI", "FastAPI", "MongoDB", "React", "JavaScript"],
            link: "",
            github: "https://github.com/bgp-llama/bgp-llama",
            category: "ai",
            featured: true
        },
        {
            id: 4,
            title: "라디오 다시듣기 사이트",
            description: "AI 기반 라디오 방송 디지털 아카이브 플랫폼입니다. Whisper와 GPT로 라디오 방송을 자동 조각화하고 React 기반 인터페이스로 탐색 가능한 아카이브를 구현했습니다.",
            image: radio1Image,
            tech: ["React", "Python", "Flask", "MongoDB", "OpenAI", "TailwindCSS"],
            link: "https://banbakbulga.github.io/podcast2/",
            github: "https://github.com/banbakbulga/podcast2",
            category: "frontend",
            featured: true
        },
        {
            id: 5,
            title: "MCP/RAG 기반 챗봇 모음 사이트(슈퍼차차)",
            description: "MCP 기반 지능형 챗봇 통합 플랫폼입니다. 챗봇 자동 매칭 및 챗봇을 생성·공유할 수 있는 참여형 플랫폼입니다.",
            image: chatbot1Image,
            tech: ["React", "JavaScript", "FastAPI", "OpenAI", "SQLite", "MCP"],
            link: "https://bgp-llama.github.io/llm-contest-fe/",
            github: "https://github.com/bgp-llama/llm-contest-fe",
            category: "ai",
            featured: true
        },
        {
            id: 6,
            title: "포트폴리오 웹사이트",
            description: "개인 포트폴리오 웹사이트입니다. React와 JavaScript를 활용한 반응형 디자인을 구현했습니다.",
            image: portfolioImage,
            tech: ["React", "JavaScript", "GitHub Pages"],
            link: "https://banbakbulga.github.io/portfolio/",
            github: "https://github.com/banbakbulga/portfolio",
            category: "frontend",
            featured: true
        },
        {
            id: 9,
            title: "돌비시네마 예매 알림봇",
            description: "메가박스 돌비시네마 예매 오픈을 실시간 감지하여 텔레그램으로 즉시 알려주는 자동화 봇입니다.",
            image: dolbyImage,
            tech: ["Python", "Telegram Bot", "aiohttp", "SQLite", "Docker"],
            link: "",
            github: "https://github.com/banbakbulga/dolby-bot",
            category: "backend",
            featured: true
        },
        {
            id: 10,
            title: "RESO (르쏘) 글로벌 비즈니스 에이전시",
            description: "삼성, 에르메스 등 글로벌 TOP 파트너사를 위한 하이엔드 에이전시 웹사이트입니다. 고도의 마이크로 인터랙션과 울트라 와이드 반응형 설계를 적용했습니다.",
            image: resoImage,
            tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
            link: "",
            github: "",
            category: "frontend",
            featured: true
        },
        {
            id: 7,
            title: "롤파고(LOLPAGO)",
            description: "Riot API 기반의 게임 데이터 분석 플랫폼에서 각종 통계를 시각화하는 인터랙티브 프론트엔드 UI를 구현했습니다.",
            image: lolpagoImage,
            tech: ["React", "Vite", "JavaScript"],
            link: "https://lolpago.com/",
            github: "",
            category: "frontend",
            featured: true
        },
        {
            id: 8,
            title: "롤파고 데스크톱(LOLPAGO Desktop)",
            description: "리그 오브 레전드와 직접 연동되는 Electron 기반 실시간 AI 코칭 데스크톱 애플리케이션입니다.",
            image: lolpagoAppImage,
            tech: ["Electron", "React", "TypeScript", "WebSocket", "TailwindCSS"],
            link: "",
            github: "",
            category: "frontend",
            featured: true
        }
    ];

    const categoryLabel = {
        frontend: 'Frontend',
        backend: 'Backend',
        ai: 'AI / ML',
    };

    const getTechIcon = (tech) => {
        switch (tech) {
            case "HTML": return <FaHtml5 className="text-[#e34f26] text-2xl" />;
            case "CSS": return <FaCss3Alt className="text-[#1572b6] text-2xl" />;
            case "JavaScript": return <FaJs className="text-[#f7df1e] text-2xl" />;
            case "React": return <FaReact className="text-[#61dafb] text-2xl" />;
            case "Node.js": return <FaNodeJs className="text-[#339933] text-2xl" />;
            case "Java": return <FaJava className="text-[#007396] text-2xl" />;
            case "Spring Boot": return <SiSpring className="text-[#6db33f] text-2xl" />;
            case "MySQL": return <SiMysql className="text-[#4479a1] text-2xl" />;
            case "Redis": return <SiRedis className="text-[#dc382d] text-2xl" />;
            case "Elasticsearch": return <SiElasticsearch className="text-[#005571] text-2xl" />;
            case "Python": return <FaPython className="text-[#3776ab] text-2xl" />;
            case "OpenAI": return <SiOpenai className="text-[#412991] text-2xl" />;
            case "FastAPI": return <SiFastapi className="text-[#009688] text-2xl" />;
            case "MongoDB": return <SiMongodb className="text-[#47a248] text-2xl" />;
            case "TailwindCSS": return <SiTailwindcss className="text-[#06b6d4] text-2xl" />;
            case "Flask": return <SiFlask className="text-black text-2xl" />;
            case "SQLite": return <FaDatabase className="text-[#003B57] text-2xl" />;
            case "MCP": return <FaNetworkWired className="text-[#61DAFB] text-2xl" />;
            case "GitHub Pages": return <FaGithub className="text-white text-2xl" />;
            case "PostgreSQL": return <SiPostgresql className="text-[#4169E1] text-2xl" />;
            case "Vite": return <SiVite className="text-[#646CFF] text-2xl" />;
            default: return <span className="text-white text-sm">{tech}</span>;
        }
    };

    return (
        <section id="projects" className="py-32 md:py-40 relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">

                {/* Section Label */}
                <motion.span
                    className="text-text-light text-xs font-mono tracking-widest uppercase mb-6 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Projects
                </motion.span>

                {/* Large Heading */}
                <motion.h2
                    className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold text-text-main leading-[1.2] tracking-tight mb-20 md:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    직접 만들고,<br />
                    직접 증명합니다.
                </motion.h2>

                {/* Horizontal Gallery */}
                <div className="relative">
                    <motion.div
                        ref={galleryRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {[...projects].reverse().map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group flex-shrink-0 cursor-pointer w-[340px] sm:w-[400px] md:w-[480px] lg:w-[540px]"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true, margin: "-50px" }}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-[340px] sm:h-[380px] md:h-[440px] lg:h-[500px] mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Info */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base md:text-lg font-semibold text-text-main tracking-tight group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className="text-white/15 font-mono text-xs shrink-0 ml-3">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <p className="text-text-sub text-xs md:text-sm leading-relaxed break-keep line-clamp-2 mb-3">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1">
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-[0.5625rem] text-text-light font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="px-1.5 py-0.5 text-[0.5625rem] text-text-light font-mono">+{project.tech.length - 3}</span>
                                            )}
                                        </div>
                                        <div className="flex gap-1.5 shrink-0">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-text-light text-xs hover:text-white transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
                                                    <FaGithub />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-text-light text-[0.625rem] hover:text-white transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        setSelectedImage={setSelectedImage}
                    />
                )}
            </AnimatePresence>

            {/* 이미지 확대 모달 */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-[10000] flex justify-center items-center cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="absolute top-5 right-8 text-white text-4xl font-bold cursor-pointer transition-colors hover:text-text-sub" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                    }}>
                        ×
                    </div>
                    <motion.img
                        src={selectedImage}
                        alt="확대된 이미지"
                        className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </section>
    );
};

const ProjectModal = ({ project, onClose, setSelectedImage }) => {
    const SectionTitle = ({ children }) => (
        <h3 className="text-text-main text-sm font-medium uppercase tracking-widest mb-4 pb-3 border-b border-white/[0.06]">{children}</h3>
    );
    const List = ({ children }) => (
        <ul className="text-text-sub text-sm leading-[1.8] pl-5 list-disc [&>li]:mb-2 [&>li]:pl-1">{children}</ul>
    );
    const Strong = ({ children }) => <strong className="text-text-main font-medium">{children}</strong>;
    const Code = ({ children }) => <code className="bg-white/[0.04] text-text-main px-1.5 py-0.5 text-xs font-mono">{children}</code>;
    const TechDescP = ({ children }) => <p className="mb-5 text-sm text-text-sub leading-[1.8]">{children}</p>;
    const SectionCode = ({ children }) => (
        <pre className="bg-white/[0.02] border border-white/[0.06] p-5 overflow-x-auto my-4 text-text-sub font-mono text-xs leading-relaxed whitespace-pre">{children}</pre>
    );
    const Gallery = ({ images }) => (
        <div className="mb-8">
            <SectionTitle>프로젝트 갤러리</SectionTitle>
            <div className="flex gap-3 justify-start flex-wrap">
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`Gallery ${i}`} className="w-[11rem] h-[7rem] object-cover border border-white/[0.06] cursor-pointer transition-all duration-300 hover:border-white/20 hover:opacity-80" onClick={() => setSelectedImage(img)} />
                ))}
            </div>
        </div>
    );

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[2000] p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-[#0e0e0e] border border-white/[0.08] w-full max-w-[60rem] max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Hero Image */}
                <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                    <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <div className="absolute bottom-6 left-8 right-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="px-8 py-8 flex flex-col gap-8">

                        {/* Live Demo Banner */}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-5 py-4 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 no-underline group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-text-main text-sm font-medium">Live Demo 보기</span>
                                </div>
                                <span className="text-text-sub text-xs font-mono group-hover:text-white transition-colors duration-300">{project.link} →</span>
                            </a>
                        )}

                        {project.id === 1 && (
                            <>
                                <div className="mb-6">
                                    <SectionTitle>프로젝트 개요</SectionTitle>
                                    <List>
                                        <li><Strong>프로젝트명:</Strong> 카카오톡 메인 UI 클론</li>
                                        <li><Strong>개발 기간:</Strong> 2023 - 약 2주</li>
                                        <li><Strong>참여 인원:</Strong> 개인 (1인 개발)</li>
                                        <li><Strong>기술 스택:</Strong> HTML5, CSS3</li>
                                        <li><Strong>형태:</Strong> 정적 웹페이지 (JS 없이 순수 프론트엔드)</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List>
                                        <li>카카오톡 메인 화면 구조 구현 (친구목록 / 채팅목록 / 설정화면 / 하단 탭바 등)</li>
                                        <li>CSS <Code>transition</Code>과 <Code>@keyframes</Code>를 활용한 탭 전환 애니메이션</li>
                                        <li>자바스크립트 없이 <Strong>CSS 상태 조합</Strong>으로 읽지 않은 채팅 배지 및 상태 표현</li>
                                        <li>반응형 레이아웃 (모바일 중심 360~430px → 태블릿 768px 확장)</li>
                                        <li>나만의 디자인 적용 — 부드러운 컬러톤, 카드형 리스트, 가독성 개선</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>사용 기술 및 구조</SectionTitle>
                                    <div className="text-primary-dark leading-relaxed">
                                        <TechDescP><Strong>HTML5</Strong>에서는 시맨틱 마크업 (<Code>header</Code>, <Code>nav</Code>, <Code>main</Code>, <Code>section</Code>)을 활용하여 구조를 설계했고, 접근성 속성 (<Code>aria-label</Code>, <Code>aria-current</Code>)을 적용하여 사용자 경험을 개선했습니다.</TechDescP>
                                        <TechDescP><Strong>CSS3</Strong>는 Flexbox와 Grid 레이아웃을 혼합 사용하여 반응형 디자인을 구현했으며, BEM 네이밍 규칙으로 구조적 스타일링을 진행했습니다. CSS 변수를 통해 색상, 간격, 라운드 값을 체계적으로 관리하고, <Code>transition</Code>과 <Code>@keyframes</Code>를 활용하여 부드러운 인터랙션을 구현했습니다.</TechDescP>
                                        <TechDescP><Strong>디자인 개선</Strong> 측면에서는 기존 노란 메인 컬러를 부드러운 중간톤으로 재구성하여 시각적 피로도를 줄였고, 리스트 간격, 폰트 굵기, 라운드 값을 조정하여 가독성을 향상시켰습니다. 또한 SVG 인라인 아이콘을 활용하여 상태 전환을 자연스럽게 표현했습니다.</TechDescP>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>폴더 구조</SectionTitle>
                                    <SectionCode>{`
/css           # 스타일 시트
index.html     # 메인 홈 (탭바 포함)
friends.html   # 친구 목록
chats.html     # 채팅 목록
chat.html      # 채팅 상세
find.html      # 친구/채팅 검색
more.html      # 더보기 화면
setting.html   # 설정 화면
/assets        # 아이콘 및 아바타 이미지
`}</SectionCode>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>트러블슈팅</SectionTitle>
                                    <List>
                                        <li><Strong>문제:</Strong> iOS Safari에서 탭바 위치 흔들림<br /><Strong>해결:</Strong> <Code>position: sticky</Code>로 대체 및 안전영역 padding 추가</li>
                                        <li><Strong>문제:</Strong> 긴 메시지 말줄임 처리 깨짐<br /><Strong>해결:</Strong> <Code>line-clamp</Code> + <Code>overflow:hidden</Code> 조합</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>느낀 점</SectionTitle>
                                    <List>
                                        <li><Strong>기본기 강화:</Strong> HTML/CSS만으로도 충분히 인터랙션 구현 가능</li>
                                        <li><Strong>디자인 시스템 이해:</Strong> 변수 기반 설계로 일관성과 유지보수성 향상</li>
                                        <li><Strong>접근성 설계의 중요성:</Strong> 시맨틱 구조를 초기에 잡으면 수정 비용이 적음</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>개선 및 다음 목표</SectionTitle>
                                    <List>
                                        <li>JavaScript 도입 — 탭 라우팅, 검색, 상태 저장 기능 추가</li>
                                        <li>React / Web Components 기반 컴포넌트화</li>
                                        <li>Playwright 테스트를 통한 시각 회귀 및 접근성 자동화</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>실행 방법</SectionTitle>
                                    <ol className="text-primary-dark leading-relaxed pl-6 list-decimal [&>li]:mb-3">
                                        <li>Live Demo 버튼을 클릭해 프로젝트 실행</li>
                                        <li>전체 화면 시 "Your Screen is Too Big!!" 문구가 뜨면 화면을 가로로 줄이면 로그인 화면 등장</li>
                                    </ol>
                                </div>
                            </>
                        )}

                        {project.id === 2 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> NHN 아카데미 흑백문고</li><li><Strong>개발 기간: </Strong> 2024 (약 6개월)</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (8명)</li><li><Strong>기술 스택:</Strong> Java, Spring Boot, MySQL, Redis, Elasticsearch</li><li><Strong>형태:</Strong> 마이크로서비스 아키텍처 기반 온라인 서점</li></List></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li>도서 검색 및 주문 시스템 구현</li><li>Spring Boot 기반 마이크로서비스 아키텍처 구축</li><li>Elasticsearch를 활용한 고성능 도서 검색 기능</li><li>Redis 캐싱으로 응답 속도 최적화</li><li>Spring Security 기반 인증/인가 시스템</li><li>데이터베이스 모델링 및 REST API 개발</li><li>Git 브랜치 전략과 코드 리뷰를 통한 협업 프로세스</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>Java 21 LTS</Strong>와 <Strong>Spring Boot 3.3.x</Strong>를 기반으로 마이크로서비스 아키텍처를 구축했습니다. Spring Cloud Gateway를 통한 API 게이트웨이, Eureka를 활용한 서비스 디스커버리, Spring Cloud Config로 설정 중앙화를 구현하여 확장 가능한 시스템을 설계했습니다.</TechDescP><TechDescP><Strong>데이터베이스</Strong>는 MySQL 8.x를 메인 DB로 사용하고, Redis를 캐싱 레이어로 활용했습니다. <Strong>Elasticsearch 7.x</Strong>를 통한 전문 검색 기능으로 도서 검색 성능을 최적화했고, JPA Query를 활용하여 효율적인 데이터 접근을 구현했습니다.</TechDescP><TechDescP><Strong>개발 프로세스</Strong>에서는 GitHub Actions를 통한 CI/CD 파이프라인을 구축하고, SonarQube를 활용하여 코드 품질을 관리했습니다. Docker와 NHN Container Registry를 통한 컨테이너화로 배포 자동화를 실현했습니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>시스템 아키텍처</SectionTitle><SectionCode>{`
heukbaekbook-shop        # 상품/주문 서비스
heukbaekbook-auth         # 인증/인가 서비스  
heukbaekbook-frontend     # 프론트엔드
heukbaekbook-gateway      # API 게이트웨이
heukbaekbook-eureka       # 서비스 디스커버리
heukbaekbook-rabbitmq     # 메시지 큐
heukbaekbook-batch        # 배치 처리
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 마이크로서비스 간 통신 지연<br /><Strong>해결:</Strong> OpenFeign 클라이언트 최적화 및 연결 풀 설정</li><li><Strong>문제:</Strong> Elasticsearch 검색 성능 저하<br /><Strong>해결:</Strong> 인덱스 최적화 및 검색 쿼리 튜닝</li><li><Strong>문제:</Strong> Redis 캐시 일관성 문제<br /><Strong>해결:</Strong> TTL 설정 및 캐시 무효화 전략 수립</li></List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle><List><li><Strong>팀 협업의 중요성:</Strong> Git 브랜치 전략과 코드 리뷰를 통한 체계적 개발</li><li><Strong>마이크로서비스 이해:</Strong> 서비스 분리와 API 설계의 복잡성과 장점 경험</li><li><Strong>성능 최적화:</Strong> 캐싱과 검색엔진을 통한 시스템 성능 향상 방법 학습</li></List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>모니터링 시스템 구축 (Prometheus + Grafana)</li><li>Kubernetes 기반 컨테이너 오케스트레이션</li><li>API 문서화 자동화 (Swagger/OpenAPI)</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li>수상 : NHN 백엔드 아카데미 우수상</li><li>기여도 : 쿠폰 시스템 CRUD API 개발 및 프론트엔드 연동</li></List></div>
                            </>
                        )}

                        {project.id === 3 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> LLM 기반 BGP 분석 챗봇</li><li><Strong>개발 기간:</Strong> 2025.03 - 2025.12 (졸업프로젝트)</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (3명)</li><li><Strong>기술 스택:</Strong> Python, OpenAI, FastAPI, MongoDB, React, JavaScript</li><li><Strong>형태:</Strong> AI 챗봇 웹 애플리케이션</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>기존 BGP 분석 도구들은 <Strong>UI가 복잡하고 사용 난이도가 높아</Strong> 네트워크 전문가가 아니면 접근하기 어려웠습니다. 이를 <Strong>자연어 기반 챗봇</Strong> 형태로 재설계하여, 대화만으로 BGP 데이터를 분석하고 네트워크 상태를 진단할 수 있도록 진입 장벽을 낮추었습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li>LLM을 활용한 BGP 데이터 분석 챗봇</li><li>BGP 라우팅 정보 실시간 분석</li><li>자연어 질의응답 시스템</li><li>네트워크 상태 진단 및 추천</li><li>BGP 경로 최적화 제안</li><li>웹 기반 사용자 인터페이스</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>Python</Strong>을 기반으로 FastAPI 프레임워크를 사용하여 RESTful API를 구축했습니다. OpenAI의 GPT 모델을 활용하여 BGP 데이터 분석을 위한 자연어 처리 기능을 구현했고, MongoDB를 통해 대용량 네트워크 데이터를 효율적으로 저장 및 관리합니다.</TechDescP><TechDescP><Strong>React</Strong>와 <Strong>JavaScript</Strong>를 활용한 프론트엔드에서는 실시간 챗봇 인터페이스를 구현했습니다. 사용자가 자연어로 BGP 관련 질문을 입력하면, 백엔드에서 데이터를 분석하고 LLM을 통해 이해하기 쉬운 답변을 제공하는 시스템을 개발했습니다.</TechDescP><TechDescP><Strong>BGP 분석</Strong> 기능은 네트워크 라우팅 정보를 실시간으로 모니터링하고, 경로 최적화 및 네트워크 장애 진단을 위한 인사이트를 제공합니다. 이를 통해 네트워크 관리자가 복잡한 BGP 설정을 더 쉽게 이해하고 관리할 수 있도록 지원합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>시스템 아키텍처</SectionTitle>
                                    <div className="py-6">
                                        {/* User */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">사용자</span>
                                            <p className="text-text-main text-sm mt-1">자연어로 BGP 관련 질문 입력</p>
                                        </div>
                                        <div className="flex justify-center mb-3"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Frontend */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Frontend — React SPA</span>
                                            <div className="grid grid-cols-3 gap-2 mt-4">
                                                {[
                                                    { title: "챗봇 UI", desc: "실시간 대화 인터페이스" },
                                                    { title: "데이터 시각화", desc: "BGP 경로 분석 결과 표시" },
                                                    { title: "상태 관리", desc: "대화 이력 및 세션 관리" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-3">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-3 bg-white/15" />
                                                <span className="text-[10px] text-text-light font-mono">REST API (Axios)</span>
                                                <div className="w-px h-3 bg-white/15" />
                                            </div>
                                        </div>

                                        {/* Backend */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Backend — FastAPI</span>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                                                {[
                                                    { title: "API 엔드포인트", desc: "질의 수신 및 응답 처리" },
                                                    { title: "BGP 분석 서비스", desc: "라우팅 데이터 파싱 & 분석" },
                                                    { title: "LLM 연동 모듈", desc: "프롬프트 생성 & GPT 호출" },
                                                    { title: "캐싱 레이어", desc: "응답 캐싱 & 스트리밍" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom: OpenAI + MongoDB */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">OpenAI GPT</span>
                                                <p className="text-text-sub text-xs mt-2">자연어 분석 & 답변 생성</p>
                                            </div>
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">MongoDB</span>
                                                <p className="text-text-sub text-xs mt-2">BGP 데이터 & 대화 이력 저장</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Query Flow */}
                                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-6 mb-4">질의 처리 흐름</p>
                                    <div className="space-y-2">
                                        {[
                                            { step: "1", label: "질문 입력", desc: "사용자가 자연어로 BGP 질문 (예: 'AS64500의 경로 분석해줘')" },
                                            { step: "2", label: "의도 분류", desc: "FastAPI가 질문을 파싱하고 분석 유형 분류 (경로 조회 / 장애 진단 / 최적화 제안)" },
                                            { step: "3", label: "데이터 조회", desc: "MongoDB에서 관련 BGP 라우팅 데이터를 집계 파이프라인으로 추출" },
                                            { step: "4", label: "LLM 분석", desc: "추출된 데이터 + 프롬프트를 OpenAI GPT에 전달하여 분석 결과 생성" },
                                            { step: "5", label: "응답 스트리밍", desc: "분석 결과를 스트리밍으로 실시간 전달 및 캐싱 저장" },
                                        ].map((item) => (
                                            <div key={item.step} className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 flex items-start gap-3">
                                                <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded shrink-0">{item.step}</span>
                                                <div>
                                                    <p className="text-text-main text-xs font-medium">{item.label}</p>
                                                    <p className="text-white/30 text-[10px] mt-0.5">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> BGP 데이터 파싱 성능 저하<br /><Strong>해결:</Strong> 비동기 처리 및 데이터베이스 인덱싱 최적화</li><li><Strong>문제:</Strong> LLM 응답 지연<br /><Strong>해결:</Strong> 응답 캐싱 및 스트리밍 응답 구현</li><li><Strong>문제:</Strong> 대용량 BGP 데이터 처리<br /><Strong>해결:</Strong> MongoDB 집계 파이프라인 및 페이지네이션 적용</li></List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle><List><li><Strong>AI 활용의 중요성:</Strong> LLM을 통한 복잡한 기술 데이터의 사용자 친화적 해석</li><li><Strong>네트워크 지식:</Strong> BGP 프로토콜에 대한 깊이 있는 이해와 실무 적용</li><li><Strong>풀스택 개발:</Strong> 프론트엔드부터 백엔드, AI까지 종합적인 시스템 구축</li></List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>실시간 BGP 데이터 수집 및 분석 기능 강화</li><li>다양한 네트워크 프로토콜 지원 확대</li><li>시각화 대시보드 및 그래프 기능 추가</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li>개발 상태: 개발 완료</li><li>기여도: UI/UX 디자인, 프론트엔드 개발 및 파이프라인 설계</li><li>특징: LLM과 네트워크 분석의 융합</li></List></div>
                                <Gallery images={[bgp1Image, bgp2Image, bgp3Image]} />
                            </>
                        )}

                        {project.id === 4 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> FM Radio Script Curation Platform</li><li><Strong>개발 기간:</Strong> 2025.03 - 2025.08</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> React, Python, Flask, MongoDB, OpenAI, TailwindCSS</li><li><Strong>형태:</Strong> AI 기반 라디오 방송 디지털 아카이브 플랫폼</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>기존 라디오 다시듣기 서비스는 <Strong>1시간 분량의 방송을 처음부터 끝까지</Strong> 들어야 하는 구조여서, 원하는 부분만 찾아 듣기가 어려웠습니다. 숏폼 콘텐츠 소비 방식에 착안하여, AI가 방송을 의미 단위로 자동 분할하고 태깅하여 <Strong>원하는 부분만 골라 들을 수 있는</Strong> 큐레이션 플랫폼을 만들었습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li>AI 음성 인식: OpenAI Whisper를 활용한 고품질 음성-텍스트 변환</li><li>지능형 조각화: GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅</li><li>음악 메타데이터: Spotify API 연동으로 음악 정보 자동 수집</li><li>영화 정보: OMDb API를 통한 영화 메타데이터 제공</li><li>고급 검색: 날짜, 키워드, 카테고리별 다중 필터링</li><li>실시간 재생: 웹 기반 오디오 플레이어로 구간별 재생</li><li>반응형 디자인: 모든 디바이스에서 최적화된 사용자 경험</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React</Strong>를 메인 UI 프레임워크로 사용하여 SPA(Single Page Application)을 구현했습니다. React Router DOM으로 페이지 라우팅을 관리하고, TailwindCSS로 반응형 디자인을 적용했습니다.</TechDescP><TechDescP><Strong>Python Flask</Strong>를 백엔드 프레임워크로 사용하여 REST API를 구축했습니다. Flask-CORS로 크로스 오리진 요청을 처리하고, MongoDB와 PyMongo를 통해 데이터를 저장 및 관리합니다.</TechDescP><TechDescP><Strong>AI/ML 기술</Strong>로는 OpenAI Whisper를 활용해 음성을 텍스트로 변환하고, GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅합니다. OpenAI Python SDK를 통해 GPT API를 호출하여 지능형 조각화를 구현했습니다.</TechDescP><TechDescP><Strong>외부 API 연동</Strong>으로 Spotify API를 통해 음악 메타데이터를 자동 수집하고, OMDb API로 영화 정보를 검색합니다. Axios를 사용해 HTTP 요청을 처리하고, JWT와 Bcrypt로 사용자 인증 및 보안을 구현했습니다.</TechDescP><TechDescP><Strong>배포 및 개발</Strong>은 GitHub Actions를 통한 CI/CD 자동화와 GitHub Pages를 통한 정적 사이트 호스팅을 사용합니다. PostCSS와 Autoprefixer로 CSS 후처리를 진행합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>프로젝트 구조</SectionTitle><SectionCode>{`
podcast/
├── public/
│   ├── audio/         # MP3 음원 파일들
│   ├── data/          # Whisper 결과 및 GPT 조각화 결과
│   │   ├── 19921104.json
│   │   ├── 19921107.json
│   │   └── dateList.json
├── src/
│   ├── backend/       # Python Flask 백엔드
│   │   ├── app.py
│   │   ├── whisper_gpt.py
│   │   └── search_spotify.py
│   ├── components/    # React 컴포넌트
│   │   ├── Navbar.jsx
│   │   ├── PlayerControls.jsx
│   │   └── ClipCard.jsx
│   ├── pages/         # 페이지 컴포넌트
│   ├── context/       # React Context
│   └── utils/         # 유틸리티 함수
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 긴 라디오 방송 파일의 Whisper 처리 시간<br /><Strong>해결:</Strong> 파일 분할 처리 및 배치 작업으로 처리 시간 단축</li><li><Strong>문제:</Strong> GPT 조각화 시 컨텍스트 손실<br /><Strong>해결:</Strong> 적절한 청크 크기 설정 및 오버랩 처리로 연속성 보장</li><li><Strong>문제:</Strong> Spotify API 호출 제한<br /><Strong>해결:</Strong> 캐싱 시스템 도입 및 API 호출 최적화</li></List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle><List><li><Strong>AI 활용의 혁신성:</Strong> Whisper와 GPT를 조합하여 라디오 방송을 완전히 새로운 형태로 재구성</li><li><Strong>사용자 중심 설계:</Strong> 긴 콘텐츠의 피로감을 해결하는 숏폼 방식의 접근이 사용자 만족도 향상</li><li><Strong>메타데이터의 가치:</Strong> 음악, 영화 정보 자동 수집을 통한 콘텐츠의 부가가치 창출</li></List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>더 많은 라디오 방송 데이터 확장 (다른 연도, 방송사)</li><li>실시간 방송 처리 및 자동 아카이빙 시스템</li><li>사용자 맞춤 추천 알고리즘 개발</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li>개발 상태: 완료</li><li>기여도: 전체 시스템 설계 및 구현</li><li>특징: 웹 기반 라디오 방송 플랫폼</li></List></div>
                                <Gallery images={[radio1Image, radio2Image, radio3Image, radio4Image]} />
                            </>
                        )}

                        {project.id === 5 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> MCP 기반 지능형 챗봇 통합 플랫폼</li><li><Strong>개발 기간:</Strong> 2025.05 - 2025.09</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (3명)</li><li><Strong>기술 스택:</Strong> React, FastAPI, OpenAI, SQLite, FAISS, MCP</li><li><Strong>형태:</Strong> 사용자 참여형 AI 챗봇 플랫폼</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>기존 학내 AI 챗봇은 사용자가 <Strong>카테고리를 직접 선택</Strong>해야 하는 구조였고, 정작 학생들에게 유용한 실질적 정보는 부족하여 활용도가 크게 떨어졌습니다. 이를 개선하여 사용자의 질문 의도를 자동으로 파악해 최적의 챗봇을 매칭하고, 학생 생활에 밀접한 정보까지 폭넓게 제공하는 <Strong>통합 플랫폼</Strong>으로 발전시켰습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li><Strong>지능형 챗봇 추천:</Strong> 사용자 질문 의도를 파악하여 최적의 챗봇을 자동 매칭</li><li><Strong>사용자 참여형 플랫폼:</Strong> 학내 구성원이 직접 챗봇을 생성하고 공유하는 시스템</li><li><Strong>MCP 프로토콜 연동:</Strong> 다양한 정보 시스템과의 표준화된 연결</li><li><Strong>다양한 정보 제공:</Strong> 공식 문서부터 실생활 정보(맛집, 꿀팁 등)까지 폭넓은 커버리지</li><li><Strong>직관적 UI/UX:</Strong> 챗봇 등록, 탐색, 채팅, 슈퍼차차 채팅 등 핵심 기능 구현</li><li><Strong>확장 가능한 아키텍처:</Strong> 기존 차차 시스템과의 연동 및 부서별 맞춤형 챗봇 운영</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React</Strong>를 프론트엔드 프레임워크로 사용하여 사용자 친화적인 인터페이스를 구현했습니다. SPA 구조로 빠른 사용자 경험을 제공하며, TailwindCSS를 활용한 반응형 디자인을 적용했습니다.</TechDescP><TechDescP><Strong>FastAPI</Strong>를 백엔드 프레임워크로 사용하여 RESTful API를 구축했습니다. 비동기 처리를 통한 높은 성능과 자동 API 문서화(Swagger) 기능을 제공합니다.</TechDescP><TechDescP><Strong>OpenAI GPT</Strong>를 핵심 LLM으로 활용하여 고품질의 AI 응답을 생성합니다. MCP(Model Context Protocol)를 통해 다양한 AI 모델과의 표준화된 통신을 구현했습니다.</TechDescP><TechDescP><Strong>SQLite/FAISS</Strong>를 데이터베이스로 사용하여 챗봇 정보와 벡터 임베딩을 효율적으로 저장 및 검색합니다. FAISS를 통한 고속 유사도 검색으로 사용자 의도 파악의 정확도를 높였습니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>시스템 아키텍처</SectionTitle>
                                    <div className="py-6">
                                        {/* User */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">사용자</span>
                                            <p className="text-text-main text-sm mt-1">질문 입력 → 자동으로 최적 챗봇 매칭</p>
                                        </div>
                                        <div className="flex justify-center mb-3"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Frontend */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-3">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Frontend — React SPA</span>
                                                <span className="text-white/20 text-[9px] font-mono">GitHub Pages</span>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                {[
                                                    { title: "챗봇 탐색", desc: "등록된 챗봇 검색 & 탐색" },
                                                    { title: "챗봇 등록", desc: "사용자가 직접 챗봇 생성" },
                                                    { title: "채팅 인터페이스", desc: "실시간 AI 대화 UI" },
                                                    { title: "슈퍼차차", desc: "통합 지능형 채팅" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-3">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-3 bg-white/15" />
                                                <span className="text-[10px] text-text-light font-mono">REST API</span>
                                                <div className="w-px h-3 bg-white/15" />
                                            </div>
                                        </div>

                                        {/* Backend */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-3">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Backend — FastAPI</span>
                                                <span className="text-white/20 text-[9px] font-mono">Render</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[
                                                    { title: "챗봇 CRUD", desc: "챗봇 등록·수정·삭제 관리" },
                                                    { title: "의도 분류 엔진", desc: "FAISS 벡터 유사도 검색" },
                                                    { title: "대화 처리", desc: "GPT 응답 생성 & 스트리밍" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom: External Services */}
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">OpenAI GPT</span>
                                                <p className="text-text-sub text-[10px] mt-2">AI 응답 생성</p>
                                            </div>
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">MCP Server</span>
                                                <p className="text-text-sub text-[10px] mt-2">표준 프로토콜 통신</p>
                                            </div>
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                                <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">SQLite + FAISS</span>
                                                <p className="text-text-sub text-[10px] mt-2">데이터 & 벡터 검색</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Super Chacha Flow */}
                                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-6 mb-4">슈퍼차차 자동 매칭 흐름</p>
                                    <div className="space-y-2">
                                        {[
                                            { step: "1", label: "질문 입력", desc: "사용자가 어떤 챗봇인지 모르는 상태로 자유롭게 질문" },
                                            { step: "2", label: "벡터 임베딩", desc: "질문 텍스트를 OpenAI Embedding으로 벡터화" },
                                            { step: "3", label: "유사도 검색", desc: "FAISS로 등록된 챗봇들의 설명과 벡터 유사도 비교" },
                                            { step: "4", label: "최적 챗봇 매칭", desc: "가장 적합한 챗봇을 자동 선택하고 MCP 프로토콜로 연결" },
                                            { step: "5", label: "응답 생성", desc: "매칭된 챗봇의 컨텍스트 + GPT로 맞춤형 답변 스트리밍" },
                                        ].map((item) => (
                                            <div key={item.step} className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 flex items-start gap-3">
                                                <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded shrink-0">{item.step}</span>
                                                <div>
                                                    <p className="text-text-main text-xs font-medium">{item.label}</p>
                                                    <p className="text-white/30 text-[10px] mt-0.5">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 사용자 의도 파악의 정확도 부족<br /><Strong>해결:</Strong> FAISS 벡터 검색과 MCP 프로토콜을 활용한 지능형 매칭 시스템 구축</li><li><Strong>문제:</Strong> 여러 챗봇 간 일관된 사용자 경험 제공<br /><Strong>해결:</Strong> 통합 인터페이스와 자동 챗봇 추천 시스템으로 단일 채팅창 경험 구현</li><li><Strong>문제:</Strong> 기존 시스템과의 연동 및 확장성<br /><Strong>해결:</Strong> MCP 표준 프로토콜을 통한 모듈화된 아키텍처 설계</li></List></div>
                                <div className="mb-6"><SectionTitle>창의성 및 혁신성</SectionTitle><List><li><Strong>사용자 참여형 플랫폼:</Strong> 기존 단일 정보 제공에서 벗어나 학내 구성원 모두가 정보 생산자가 되는 혁신적 모델</li><li><Strong>정보 통합의 해결책:</Strong> 정보의 파편화와 사각지대 문제를 해결하는 통합 정보 경험 제공</li><li><Strong>지능형 추천 시스템:</Strong> 사용자가 어떤 챗봇에게 질문할지 고민할 필요 없이 자동 매칭</li></List></div>
                                <div className="mb-6"><SectionTitle>학내 사업 연계 가능성</SectionTitle><List><li><Strong>기존 차차 시스템 확장:</Strong> 현재 운영 중인 학내 챗봇과 연동하여 상호보완적 관계 구축</li><li><Strong>부서별 맞춤형 챗봇:</Strong> 도서관, IT헬프데스크, 장학팀 등 각 부서의 업무 특화 챗봇 운영</li><li><Strong>학생 생활 밀착형 서비스:</Strong> 카카오톡 연동을 통한 시설물 고장 접수, 식단 안내, 캠퍼스 길찾기 등</li><li><Strong>추가 개발 계획:</Strong> 부적절한 정보 방지 기능, 모델 종류 확장, 카카오톡 연동 등</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 개발 완료</li><li><Strong>기여도:</Strong> 전체 시스템 아키텍처 설계 및 프론트엔드 개발</li><li><Strong>특징:</Strong> 체계적인 시스템 설계와 구체적인 UI/UX 시각화</li><li><Strong>배포:</Strong> 프론트엔드(GitHub Pages), 백엔드(Render), API 문서(Swagger) 완비</li><li><Strong>수상:</Strong> 생성형 인공지능 챌린지 은상 수상</li></List></div>
                            </>
                        )}

                        {project.id === 6 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> 포트폴리오 웹사이트</li><li><Strong>개발 기간:</Strong> 2025 - 현재</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> React, JavaScript, Framer Motion, CSS3, GitHub Pages</li><li><Strong>형태:</Strong> 반응형 포트폴리오 웹사이트</li></List></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li><Strong>인터랙티브 애니메이션:</Strong> Framer Motion을 활용한 부드러운 페이지 전환 및 요소 애니메이션</li><li><Strong>완전 반응형 디자인:</Strong> 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 사용자 경험</li><li><Strong>프로젝트 갤러리:</Strong> 6개 주요 프로젝트의 상세 정보와 이미지 갤러리 제공</li><li><Strong>경력 타임라인:</Strong> 시각적으로 구성된 경력 및 학력 이력</li><li><Strong>인트로 애니메이션:</Strong> 페이지 로딩 시 감성적인 자기소개 애니메이션</li><li><Strong>다크 테마:</Strong> 현대적이고 세련된 다크 테마 디자인</li><li><Strong>빠른 로딩:</Strong> 최적화된 빌드와 이미지 압축으로 빠른 페이지 로딩</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React 19.2.0</Strong>을 기반으로 한 현대적인 SPA(Single Page Application) 구조로 구현했습니다. 함수형 컴포넌트와 React Hooks를 활용하여 상태 관리를 효율적으로 처리했습니다.</TechDescP><TechDescP><Strong>Framer Motion 12.23.24</Strong>를 통해 페이지 전환, 요소 애니메이션, 스크롤 기반 인터랙션을 구현했습니다. AnimatePresence를 활용한 모달 애니메이션과 whileInView를 통한 스크롤 애니메이션으로 사용자 경험을 향상시켰습니다.</TechDescP><TechDescP><Strong>CSS3</Strong>와 <Strong>TailwindCSS</Strong>를 조합하여 반응형 디자인을 구현했습니다. CSS Grid와 Flexbox를 활용한 레이아웃, CSS 변수를 통한 테마 관리, 미디어 쿼리를 통한 반응형 브레이크포인트 설정을 적용했습니다.</TechDescP><TechDescP><Strong>GitHub Pages</Strong>를 통한 정적 사이트 호스팅과 <Strong>gh-pages</Strong> 패키지를 활용한 자동화된 배포 시스템을 구축했습니다. CI/CD 파이프라인으로 코드 변경 시 자동 배포가 가능합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>프로젝트 구조</SectionTitle><SectionCode>{`
src/
├── pages/
│   ├── Home.js          # 메인 포트폴리오 페이지
│   ├── Home.css         # 메인 스타일
│   ├── About.css        # About 섹션 스타일
│   ├── Career.css       # Career 섹션 스타일
│   └── Projects.css     # Projects 섹션 스타일
├── img/                 # 프로젝트 이미지들
├── App.js               # 메인 앱 컴포넌트
└── index.js             # 앱 진입점

배포 구조:
├── build/               # 프로덕션 빌드 파일
└── gh-pages 브랜치     # GitHub Pages 배포 브랜치
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> Framer Motion 애니메이션 성능 최적화<br /><Strong>해결:</Strong> transform과 opacity 속성만 애니메이션하고, will-change CSS 속성 적용</li><li><Strong>문제:</Strong> 이미지 로딩 최적화<br /><Strong>해결:</Strong> 이미지 압축 및 lazy loading 구현으로 초기 로딩 시간 단축</li><li><Strong>문제:</Strong> 모바일 터치 인터랙션<br /><Strong>해결:</Strong> 터치 이벤트 최적화 및 모바일 전용 인터랙션 패턴 적용</li></List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle><List><li><Strong>애니메이션의 중요성:</Strong> 적절한 애니메이션이 사용자 경험을 크게 향상시킨다는 것을 경험</li><li><Strong>반응형 디자인의 복잡성:</Strong> 다양한 디바이스에서의 일관된 경험 제공의 중요성</li><li><Strong>성능 최적화:</Strong> 사용자 경험과 성능 사이의 균형점을 찾는 것의 중요성</li><li><Strong>자기 브랜딩:</Strong> 포트폴리오를 통해 자신만의 독특한 개성과 스타일을 표현하는 방법 학습</li></List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>PWA(Progressive Web App) 기능 추가로 모바일 앱 같은 경험 제공</li><li>다국어 지원 기능 추가</li><li>블로그 섹션 추가로 기술 글과 경험 공유</li><li>다크/라이트 테마 토글 기능 구현</li><li>SEO 최적화 및 메타 태그 개선</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 지속적 업데이트 중</li><li><Strong>기여도:</Strong> 전체 설계 및 개발</li><li><Strong>특징:</Strong> 현대적인 웹 기술 스택과 사용자 경험 중심 설계</li><li><Strong>배포:</Strong> GitHub Pages 자동 배포</li></List></div>
                            </>
                        )}

                        {project.id === 9 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> 돌비시네마 예매 알림봇</li><li><Strong>개발 기간:</Strong> 2026 - 현재</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> Python, python-telegram-bot, aiohttp, SQLite, Docker, Render, GitHub Actions</li><li><Strong>형태:</Strong> 메가박스 돌비시네마 예매 오픈 실시간 알림 텔레그램 챗봇</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>돌비시네마는 좌석 수가 313석으로 제한되어 있고, 인기 영화의 경우 예매 오픈 직후 매진되는 경우가 빈번합니다. 새로운 날짜의 예매가 언제 열리는지 <Strong>수시로 확인해야 하는 불편함</Strong>을 해소하기 위해, 메가박스 API를 주기적으로 모니터링하고 새 예매가 오픈되면 <Strong>텔레그램으로 즉시 알림</Strong>을 보내주는 자동화 봇을 개발했습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List>
                                        <li><Strong>자동 예매 감지:</Strong> 5분 간격으로 메가박스 API를 폴링하여 새로운 날짜의 예매 오픈을 자동 감지</li>
                                        <li><Strong>실시간 텔레그램 알림:</Strong> 새 예매 감지 시 영화명, 상영관(DOLBY CINEMA [Laser]), 상영 시간대, 잔여 좌석 수를 포맷팅하여 즉시 발송</li>
                                        <li><Strong>중복 알림 방지:</Strong> 인메모리 Set과 SQLite DB를 조합하여 이미 알림을 보낸 날짜는 재발송하지 않도록 이중 관리</li>
                                        <li><Strong>온디맨드 조회:</Strong> /now 명령어로 현재 예매 가능한 전체 날짜·시간표를 즉시 조회 가능</li>
                                        <li><Strong>전국 극장 지원:</Strong> /now 대구, /now 코엑스 등 키워드 기반 퍼지 매칭으로 전국 8개 돌비시네마 관 조회</li>
                                        <li><Strong>재시작 안전성:</Strong> 서버 재시작 시 기존 오픈 날짜를 사전 등록하여 중복 알림 없이 자연스럽게 이어서 동작</li>
                                        <li><Strong>24시간 상시 가동:</Strong> GitHub Actions Cron + 헬스체크 서버로 Render 무료 플랜의 슬립 모드를 우회하여 무중단 운영</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed">
                                    <TechDescP><Strong>Python 3.12</Strong> 기반의 비동기 텔레그램 봇으로, aiohttp를 활용한 논블로킹 API 호출과 JobQueue 기반 스케줄링으로 실시간 모니터링 시스템을 구현했습니다.</TechDescP>
                                    <TechDescP><Strong>비동기 아키텍처:</Strong> async/await 패턴으로 메가박스 API 호출을 논블로킹으로 처리하여 봇 응답성을 유지하면서 주기적 모니터링을 병행합니다.</TechDescP>
                                    <TechDescP><Strong>이중 상태 관리:</Strong> 인메모리 Set으로 빠른 룩업, SQLite DB로 영속성을 확보하는 투 레이어 상태 관리 구조를 설계했습니다.</TechDescP>
                                    <TechDescP><Strong>Keep-Alive 시스템:</Strong> 내장 HTTP 헬스체크 서버를 데몬 스레드로 구동하고, GitHub Actions가 5분마다 핑을 보내 클라우드 서버의 슬립을 방지합니다.</TechDescP>
                                    <TechDescP><Strong>컨테이너화 배포:</Strong> Python 3.12-slim 기반 Docker 이미지로 경량 컨테이너를 구성하여 Render에 자동 배포합니다.</TechDescP>
                                </div></div>
                                <div className="mb-6"><SectionTitle>시스템 흐름</SectionTitle>
                                    <div className="py-6">
                                        {/* Top: GitHub Actions */}
                                        <div className="flex justify-center mb-2">
                                            <div className="bg-white/[0.06] border border-white/15 px-5 py-2.5 text-text-main text-xs font-mono tracking-wide">
                                                GitHub Actions <span className="text-text-light">(5분 Cron)</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-2">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-3 bg-white/15" />
                                                <span className="text-[10px] text-text-light font-mono">HTTP ping</span>
                                                <div className="w-px h-3 bg-white/15" />
                                            </div>
                                        </div>

                                        {/* Main: Render Server */}
                                        <div className="border border-white/10 bg-white/[0.02] p-5 mx-auto max-w-md mb-4">
                                            <p className="text-text-main text-xs font-mono font-medium mb-4 pb-2 border-b border-white/[0.06]">Render Server <span className="text-text-light font-normal">(Docker)</span></p>
                                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                                                <div className="bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-text-sub">Telegram Bot</div>
                                                <div className="bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-text-sub">Health Check</div>
                                                <div className="bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-text-sub col-span-2">
                                                    Auto Scheduler <span className="text-text-light">(5min poll)</span>
                                                    <div className="mt-1.5 text-[10px] text-text-light leading-relaxed">
                                                        API 조회 → 신규 감지 → 포맷 → 알림 발송
                                                    </div>
                                                </div>
                                                <div className="bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-text-sub col-span-2 text-center">SQLite DB</div>
                                            </div>
                                        </div>

                                        {/* Bottom: External APIs */}
                                        <div className="flex justify-center gap-3">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-px h-4 bg-white/15" />
                                                <div className="bg-white/[0.06] border border-white/15 px-4 py-2 text-text-sub text-[11px] font-mono">Megabox API</div>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-px h-4 bg-white/15" />
                                                <div className="bg-white/[0.06] border border-white/15 px-4 py-2 text-text-sub text-[11px] font-mono">Telegram API</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle>
                                    <List>
                                        <li><Strong>문제:</Strong> Render 무료 플랜은 15분간 요청이 없으면 서버가 슬립 모드로 전환되어 자동 체크가 중단됨<br /><Strong>해결:</Strong> 내장 HTTP 헬스체크 서버를 구동하고 GitHub Actions Cron으로 5분마다 핑을 보내 24시간 상시 가동 체계 구축</li>
                                        <li><Strong>문제:</Strong> 서버 재시작 시 이미 오픈된 날짜에 대해 중복 알림이 발송됨<br /><Strong>해결:</Strong> post_init 훅에서 현재 오픈된 날짜를 사전 조회하여 notified_dates에 등록함으로써 재시작 후에도 새 날짜만 알림 발송</li>
                                        <li><Strong>문제:</Strong> 메가박스 API의 영화 제목에 HTML 엔티티가 포함되어 알림 메시지가 깨짐<br /><Strong>해결:</Strong> html.unescape()로 디코딩 처리 후 포맷팅하여 깔끔한 한글 메시지 출력</li>
                                        <li><Strong>문제:</Strong> 알림 메시지가 텔레그램의 4,096자 제한을 초과할 수 있음<br /><Strong>해결:</Strong> 메시지 길이를 체크하여 4,000자 단위로 분할 발송하는 로직 구현</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle>
                                    <List>
                                        <li><Strong>자동화 시스템 설계 역량:</Strong> 폴링 기반 모니터링, 상태 관리, 중복 방지 등 자동화 시스템의 핵심 설계 패턴을 실전에서 체득</li>
                                        <li><Strong>비동기 프로그래밍 숙련:</Strong> Python async/await와 aiohttp를 활용한 논블로킹 I/O 처리로 효율적인 동시성 제어 경험</li>
                                        <li><Strong>클라우드 무료 인프라 활용:</Strong> Render + GitHub Actions 조합으로 비용 없이 24시간 서비스를 운영하는 실용적인 배포 전략 습득</li>
                                        <li><Strong>실사용자 중심 개발:</Strong> 직접 사용하면서 느낀 불편함을 즉각 코드로 해결하는 과정에서 사용자 관점의 기능 설계 중요성 체감</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>다중 사용자 구독 시스템 활성화 (DB 스키마 이미 준비됨)</li><li>특정 영화 키워드 필터링 알림 기능</li><li>예매 오픈 후 잔여 좌석 변화 추이 알림</li><li>웹 대시보드를 통한 알림 이력 및 통계 조회</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 운영 중</li><li><Strong>기여도:</Strong> 기획, 설계, 개발, 배포 전 과정 담당</li><li><Strong>특징:</Strong> 메가박스 API 실시간 모니터링, 텔레그램 기반 즉시 알림, GitHub Actions를 활용한 무중단 운영</li><li><Strong>배포:</Strong> Docker 컨테이너 기반 Render 클라우드 배포</li></List></div>
                            </>
                        )}

                        {project.id === 10 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> RESO (르쏘) 글로벌 비즈니스 에이전시 공식 웹사이트</li><li><Strong>개발 기간:</Strong> 2025 - 현재</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> React 19, Vite, Tailwind CSS (v4), Framer Motion, React Router DOM v7, EmailJS</li><li><Strong>형태:</Strong> B2B 하이엔드 에이전시 홍보 및 포트폴리오 전시용 반응형 웹사이트</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>RESO(르쏘)는 브랜드 영상 기획부터 UI/UX, 앱 개발, 통합 시스템 구축 등 전 방위적 글로벌 IT·디자인 솔루션을 제공하는 에이전시입니다. 삼성, 에르메스 등 글로벌 TOP 파트너사에게 <Strong>고급스러운 브랜드 아이덴티티</Strong>를 각인시키고 포트폴리오를 효과적으로 전달하기 위해, 고도의 마이크로 인터랙션과 부드러운 애니메이션이 가미된 <Strong>하이엔드 웹사이트</Strong>를 새롭게 개발하게 되었습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List>
                                        <li><Strong>프리미엄 동적 애니메이션:</Strong> Framer Motion을 적극 활용하여 화면 스크롤 이벤트, 텍스트 등장, 디테일한 요소 스케일링 등 프리미엄 에이전시에 걸맞은 역동적이고 고급스러운 유저 경험(UX) 제공</li>
                                        <li><Strong>초대형 디스플레이 완벽 대응 (Max Responsive):</Strong> 모바일, 태블릿, 일반 데스크탑을 넘어 3XL, 4XL(최대 2800px 이상) 울트라 와이드 모니터 환경까지 깨짐 없이 대응하도록 초정밀 반응형 아키텍처 구현</li>
                                        <li><Strong>무한 루프 & 인터랙티브 갤러리:</Strong> Services 및 Works(포트폴리오) 마우스 드래그를 지원하는 인피니트 캐러셀과 호버 오버레이 인터랙션으로 영상과 작업물들을 직관적으로 큐레이팅</li>
                                        <li><Strong>서버리스 문의 시스템 (Contact):</Strong> EmailJS를 도입하여 별도의 백엔드 구축 없이도, 클라이언트가 브라우저에서 직관적으로 프로젝트 의뢰 및 이메일 문의를 발송할 수 있는 다이렉트 컨택트 폼 구성</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed">
                                    <TechDescP>빠른 렌더링 성능과 높은 수준의 시각적 애니메이션을 요구하는 만큼, 가장 최신의 프론트엔드 기술 생태계를 조합했습니다.</TechDescP>
                                    <TechDescP><Strong>React 19 & Vite:</Strong> 최신 React 환경을 기반으로 컴포넌트를 모듈화(Hero, About, Services 등)하여 가독성을 높이고, Vite를 활용해 로딩/빌드 속도를 대폭 최적화했습니다.</TechDescP>
                                    <TechDescP><Strong>Framer Motion 적용:</Strong> CSS 기반 한계를 극복하고자 useMotionValue, useAnimationFrame, wrap 등을 직접 제어하여 자연스러운 무한 롤링 및 스프링 모션(Spring Physics)을 구현했습니다.</TechDescP>
                                    <TechDescP><Strong>Tailwind CSS v4:</Strong> 직관적인 유틸리티 클래스와 커스텀 Breakpoint를 조합하여 복잡한 해상도 분기별 스타일링을 신속하게 구축했습니다.</TechDescP>
                                </div></div>
                                <div className="mb-6"><SectionTitle>시스템 흐름</SectionTitle>
                                    <div className="py-6">
                                        {/* Client Access */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center mb-4">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Client Access</span>
                                            <p className="text-text-main text-sm mt-1">모바일 / PC / 4XL 울트라 와이드</p>
                                        </div>
                                        <div className="flex justify-center mb-4"><span className="text-white/20 text-lg">↓</span></div>
                                        {/* RESO Web App */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-4">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">RESO Web — React 19 + Framer Motion</span>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                                                {[
                                                    { title: "Hero", desc: "동영상 배경 + 스프링 애니메이션" },
                                                    { title: "About", desc: "로고 무한 Marquee + 수치 카운터" },
                                                    { title: "Services", desc: "무한 루프 스크롤 + 비디오 썸네일" },
                                                    { title: "Works", desc: "드래그 인터랙티브 갤러리" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 mt-3">
                                                <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                    <p className="text-text-main text-xs font-medium">Case Study Pages</p>
                                                    <p className="text-white/30 text-[10px] mt-1">포트폴리오 상세 페이지</p>
                                                </div>
                                                <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                    <p className="text-text-main text-xs font-medium">Contact Us</p>
                                                    <p className="text-white/30 text-[10px] mt-1">프로젝트 의뢰 문의 폼</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-4"><span className="text-white/20 text-lg">↓</span></div>
                                        {/* EmailJS */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">EmailJS API</span>
                                            <p className="text-text-main text-sm mt-1">RESO 공식 이메일 실시간 문의 수신</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle>
                                    <List>
                                        <li><Strong>문제:</Strong> 다양한 해상도에서 무한 롤링 슬라이드(Services, Works) 렌더링 시 아이템 간격(Gap)과 화면 중앙 정렬이 동기화되지 않고 끊기거나 어긋나는 이슈 발생<br /><Strong>해결:</Strong> useRef를 이용해 화면에 렌더링된 요소의 정확한 크기(OffsetWidth)와 갭을 동적으로 계산하고, 창 크기 변경(Resize) 이벤트를 감지하여 사이클 너비(cycleWidth)를 실시간 재할당하는 방식으로 모든 비율에서 끊김 없는 롤링 구현</li>
                                        <li><Strong>문제:</Strong> 모바일/데스크탑 레이아웃 차이와 무거운 배경 영상들로 인한 모바일 스크롤 퍼포먼스 저하 현상<br /><Strong>해결:</Strong> 브라우저 사이즈 기반으로 isMobile 상태를 분리하여, 모바일 환경에서는 무거운 연산의 프레임 애니메이션을 가벼운 터치 기반 스와이프로 대체 및 CSS contain: layout 최적화 속성을 부여해 렌더링 과부하 해소</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle>
                                    <List>
                                        <li><Strong>프리미엄 UX 설계 역량 확보:</Strong> 단순한 정보 배치를 넘어 스크롤, 드래그, 마우스 오버 등 유저의 미세한 행동에 반응하는 인터랙션을 설계하며 고급스러운 브랜드 경험을 만드는 안목을 길렀습니다.</li>
                                        <li><Strong>세밀한 반응형 UI/UX 처리 숙련:</Strong> 일반적 모바일/데스크탑 대응뿐만 아니라 대형 모니터(4XL) 등 다양한 극단적 엣지 케이스 뷰 스크린 환경까지 완벽하게 고려한 컴포넌트 설계의 중요성을 깨달았습니다.</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>성능 최적화 심화: 뷰포트 진입 시점에 동적 로드(Lazy Loading & Intersection Observer) 기능 고도화</li><li>다국어 지원 (i18n): 글로벌 에이전시 타겟에 맞도록 다국어(영문/한글) 토글 기능 추가</li><li>CMS 결합: 잦은 포트폴리오(Works) 업데이트를 위해 Headless CMS 연동형으로 고도화</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 개발 완료</li><li><Strong>기여도:</Strong> 프론트엔드 기획, UI 인터랙션 설계, 모듈 개발 및 배포 전 과정 전담</li><li><Strong>특징:</Strong> Framer Motion 고도화 활용, 울트라 와이드 반응형 설계, 비디오 미디어 최적화 배치</li><li><Strong>배포:</Strong> Vite 빌드 기반 정적 클라우드 호스팅 (Vercel / Netlify) 활용</li></List></div>
                            </>
                        )}

                        {project.id === 7 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> 롤파고(LOLPAGO)</li><li><Strong>개발 기간:</Strong> 2026 - 현재</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (프론트엔드 담당)</li><li><Strong>기술 스택:</Strong> React (Vite), JavaScript, Axios, Framer Motion</li><li><Strong>형태:</Strong> Riot API 기반 게임 데이터 분석 웹 서비스</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>기존 게임 전적 사이트들은 단순히 승률, KDA 등 숫자 나열에 그쳐 정보 전달이 단적이고, 사용자가 데이터를 해석하기 어려웠습니다. 이를 <Strong>대시보드 형태</Strong>로 재구성하여 한눈에 플레이 패턴을 파악할 수 있도록 하고, 미니게임과 인터랙티브 요소 등 <Strong>재미 요소</Strong>를 더해 사용자가 전적 조회 자체를 즐길 수 있는 경험을 만들고자 했습니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List><li><Strong>API 연동 및 데이터 시각화:</Strong> 백엔드에서 가공된 자체 엔드포인트를 연동하여 복잡한 통계를 화면에 렌더링</li><li><Strong>직관적인 UI/UX:</Strong> KDA, 승률, 챔피언별 플레이 패턴 등을 파이 차트 및 그래프로 시각화</li><li><Strong>챔피언 이동 히트맵:</Strong> 타임라인 데이터를 바탕으로 한 상호작용 가능한 UI 구현</li><li><Strong>증강 칼바람 특화 뷰:</Strong> 기존 통계 사이트와 차별화된 깊이 있는 데이터 뷰어 레이아웃 설계</li><li><Strong>전적 검색 시 동적 UI:</Strong> 승패 등 사용자 기록에 따른 동적 테마와 시각적 피드백 제공</li><li><Strong>미니게임 및 인터랙트 요소:</Strong> 데이터 조회 외에도 애니메이션과 재미 요소를 활용한 차별화된 웹 경험 제공</li><li><Strong>글로벌 다국어 지원:</Strong> 글로벌 사용자를 위해 전체 서비스에 다국어(한국어, 영어, 일본어, 중국어, 베트남어) UI 인터페이스 연동 및 최적화</li></List></div>
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React (Vite)</Strong> 기반 프론트엔드에서 사용자 입력 처리, 인터랙티브 데이터 시각화, Framer Motion 기반 애니메이션 UX를 직접 구현했습니다. 클라이언트가 표현(UI)과 상태 관리에 오롯이 집중할 수 있도록 아키텍처를 설계했습니다.</TechDescP><TechDescP><Strong>API 연동:</Strong> 백엔드(Express, port 8000)가 Riot API Key로 인증된 요청을 중계하며, 프론트엔드에서는 Axios를 통해 /api 프록시로 데이터를 호출합니다. Summoner, Match, Timeline, League, DDragon 등 Riot Games API v4/v5의 다양한 엔드포인트를 활용합니다.</TechDescP><TechDescP><Strong>프론트엔드 최적화:</Strong> 방대한 경기 데이터와 동적 애니메이션을 브라우저에서 부드럽게 렌더링하기 위해, 불필요한 리렌더링을 억제하고 데이터 구조를 프론트 화면에 맞게 재정제하여 활용했습니다.</TechDescP></div></div>

                                <div className="mb-6"><SectionTitle>전체 아키텍처</SectionTitle>
                                    <div className="py-6">
                                        {/* Browser / React SPA */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">유저 (브라우저) — React SPA (Vite)</span>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                                                {[
                                                    { title: "SearchPage", desc: "소환사 검색 & 대시보드" },
                                                    { title: "TierList", desc: "티어별 챔피언 통계" },
                                                    { title: "AramMayhem", desc: "칼바람 특화 뷰" },
                                                    { title: "MiniGame", desc: "인터랙티브 미니게임" },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md p-3">
                                                        <p className="text-text-main text-xs font-medium">{item.title}</p>
                                                        <p className="text-white/30 text-[10px] mt-1">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Arrow */}
                                        <div className="flex justify-center mb-3">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-3 bg-white/15" />
                                                <span className="text-[10px] text-text-light font-mono">Axios (/api 프록시)</span>
                                                <div className="w-px h-3 bg-white/15" />
                                            </div>
                                        </div>
                                        {/* Backend */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 text-center mb-3">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">백엔드 — Express (port 8000)</span>
                                            <p className="text-text-sub text-xs mt-2">api.lolpago.com — Riot API Key로 인증된 요청 중계</p>
                                        </div>
                                        {/* Arrow */}
                                        <div className="flex justify-center mb-3">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-3 bg-white/15" />
                                                <span className="text-[10px] text-text-light font-mono">X-Riot-Token 헤더</span>
                                                <div className="w-px h-3 bg-white/15" />
                                            </div>
                                        </div>
                                        {/* Riot API */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5">
                                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Riot Games API (v4/v5)</span>
                                            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-4">
                                                {["Summoner", "Match", "Timeline", "League", "DDragon"].map((name, i) => (
                                                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-2 text-center">
                                                        <p className="text-text-main text-[11px] font-mono">{name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6"><SectionTitle>소환사 검색 흐름 (핵심 기능)</SectionTitle>
                                    <div className="py-6">
                                        {/* Step 1: User Search */}
                                        <div className="bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3 text-center mb-2">
                                            <p className="text-text-main text-xs font-mono">"Hide on bush #KR1" 검색</p>
                                        </div>
                                        <div className="flex justify-center mb-2"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Step 2: getSummonerProfile */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mb-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">1</span>
                                                <span className="text-text-main text-xs font-mono font-medium">getSummonerProfile(name, tag, region)</span>
                                            </div>
                                            <p className="text-white/30 text-[10px] font-mono ml-7">POST /summoners/profile → 소환사 ID, PUUID, 티어, LP, 레벨, 아이콘</p>
                                        </div>
                                        <div className="flex justify-center mb-2"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Step 3: getMatches */}
                                        <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 mb-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">2</span>
                                                <span className="text-text-main text-xs font-mono font-medium">getMatches(summonerId, season, queueId)</span>
                                            </div>
                                            <p className="text-white/30 text-[10px] font-mono ml-7">GET /matches → 매치 리스트 (championName, KDA, win/loss, gameMode...)</p>
                                        </div>
                                        <div className="flex justify-center mb-2"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Step 4: Parallel - Dashboard + TMI */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">3</span>
                                                    <span className="text-text-main text-xs font-mono font-medium">대시보드 데이터 (병렬)</span>
                                                </div>
                                                <div className="space-y-1.5 ml-7">
                                                    {["getSeasonStats() → 시즌 통계", "getChampionKillStats() → 킬 통계", "getDamageReceivedStats() → 받은 피해", "getDamageDealtStats() → 가한 피해"].map((api, i) => (
                                                        <p key={i} className="text-white/30 text-[10px] font-mono">{api}</p>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">4</span>
                                                    <span className="text-text-main text-xs font-mono font-medium">TMI 통계 (배치)</span>
                                                </div>
                                                <div className="space-y-1.5 ml-7">
                                                    {["스킬샷 회피", "시야 점수", "에픽 몬스터 스틸", "최장 생존 시간", "CC기 적중"].map((stat, i) => (
                                                        <p key={i} className="text-white/30 text-[10px] font-mono">- {stat}</p>
                                                    ))}
                                                    <p className="text-white/20 text-[9px] font-mono mt-2">매치 5개씩 배치 처리</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-2"><span className="text-white/20 text-lg">↓</span></div>

                                        {/* Step 5-6: Match Detail + Heatmap */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">5</span>
                                                    <span className="text-text-main text-xs font-mono font-medium">매치 확장</span>
                                                </div>
                                                <p className="text-white/30 text-[10px] font-mono ml-7">getMatchDetail(matchId)</p>
                                                <p className="text-white/20 text-[10px] ml-7 mt-1">풀 팀 구성, 아이템, 오브젝트, 밴픽</p>
                                            </div>
                                            <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[10px] font-mono text-white/30 bg-white/[0.06] px-2 py-0.5 rounded">6</span>
                                                    <span className="text-text-main text-xs font-mono font-medium">히트맵 조회</span>
                                                </div>
                                                <p className="text-white/30 text-[10px] font-mono ml-7">getMatchTimeline(matchId)</p>
                                                <p className="text-white/20 text-[10px] ml-7 mt-1">분 단위 프레임 → 캔버스 밀도 히트맵</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 대량의 전적 데이터 및 시각화 요소 로드 시 브라우저 렌더링 지연 발생<br /><Strong>해결:</Strong> 컴포넌트 분리 및 최적화, 애니메이션 처리 경량화를 통해 프레임 드랍 완화</li><li><Strong>문제:</Strong> 비동기 API 통신 중 발생하는 응답 대기 시간 및 데이터 지연<br /><Strong>해결:</Strong> 스켈레톤 UI와 로딩 상태 처리를 적절히 혼합 배치하여 사용자 이탈 방지 및 매끄러운 UX 유지</li></List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle><List><li><Strong>프론트엔드 전문성 향상:</Strong> 복잡하고 방대한 게임 통계 데이터를 사용자가 한눈에 이해할 수 있도록 디자인하고 컴포넌트화하는 역량 강화</li><li><Strong>협업의 중요성:</Strong> API 명세에 기반한 프론트-백엔드 데이터 연동 프로세스를 몸소 겪으며, 효율적인 데이터 전달 포맷의 필요성을 실감</li></List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>다양한 분석 지표 상호작용 차트 고도화</li><li>PWA(Progressive Web App) 기능 도입 등 모바일 접근성 개선</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 운영 중</li><li><Strong>기여도:</Strong> 프론트엔드 기획, UI/UX 설계 및 클라이언트 애플리케이션 개발 주도</li><li><Strong>특징:</Strong> 백엔드 통계 데이터 분석 기능과 클라이언트의 역동적인 UI가 시너지를 내는 데이터 플랫폼</li><li><Strong>배포:</Strong> <a href="https://lolpago.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://lolpago.com/</a></li></List></div>
                            </>
                        )}

                        {project.id === 8 && (
                            <>
                                <div className="mb-6"><SectionTitle>프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> 롤파고 데스크톱(LOLPAGO Desktop)</li><li><Strong>개발 기간:</Strong> 2026 - 현재</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (데스크톱 클라이언트 개발 담당)</li><li><Strong>기술 스택:</Strong> Electron, React (Vite), TypeScript, TailwindCSS, WebSocket</li><li><Strong>형태:</Strong> League of Legends 실시간 AI 코칭 데스크톱 애플리케이션</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 배경</SectionTitle>
                                    <TechDescP>롤파고 웹 서비스에서 한 단계 더 나아가, 게임 클라이언트와 <Strong>직접 연동</Strong>되는 데스크톱 앱을 개발했습니다. 웹에서는 불가능한 로컬 게임 클라이언트 접근, 화면 캡처, 인게임 오버레이를 통해 플레이 중 <Strong>실시간 AI 코칭</Strong>을 제공하는 것이 목표입니다.</TechDescP></div>
                                <div className="mb-6"><SectionTitle>주요 기능 및 특징</SectionTitle>
                                    <List>
                                        <li><Strong>LCU API 연동:</Strong> 리그 오브 레전드 클라이언트와 직접 통신하여 소환사 정보, 챔피언 선택, 룬 페이지 등을 실시간으로 읽고 제어</li>
                                        <li><Strong>AI 실시간 코칭:</Strong> WebSocket 기반으로 인게임 상황에 맞는 AI 조언을 실시간 수신 및 음성 안내 제공</li>
                                        <li><Strong>미니맵 자동 캡처:</Strong> Electron의 desktopCapturer API로 게임 화면에서 미니맵 영역을 자동 검출·캡처하여 서버에 전송</li>
                                        <li><Strong>인게임 오버레이:</Strong> 투명 Always-on-Top 오버레이 창으로 적 부활 알림, 궁극기 준비, 킬 이벤트, 코어 아이템 완성 등 토스트 알림</li>
                                        <li><Strong>룬 자동 세팅:</Strong> 챔피언 선택 시 추천 룬을 자동 감지하고 LCU API로 룬 페이지를 생성·수정·교체</li>
                                        <li><Strong>밴/카운터 추천:</Strong> 상대 승률 기반 밴 추천 및 티어별(S/A/B/C/D) 카운터 픽 제안</li>
                                        <li><Strong>챔피언 추천 엔진:</Strong> 티어, 카운터, 시너지, 하이브리드 4가지 모드의 다중 추천 시스템</li>
                                        <li><Strong>팀 조합 분석:</Strong> 초반 강세, 후반 스케일링, 탱킹, 딜량, CC기, 이니시에이팅 등 팀 스탯 수치화</li>
                                        <li><Strong>음성 코칭:</Strong> AI 조언을 TTS 음성으로 재생하며, 음성 모델 선택 및 큐잉 시스템 지원</li>
                                        <li><Strong>시뮬레이션 모드:</Strong> 과거 경기를 시뮬레이션으로 재현하며 AI 코칭을 시간대별로 확인 가능</li>
                                    </List></div>
                                <Gallery images={[lolpagoAppImage, lolpagoApp2Image, lolpagoApp3Image, lolpagoApp4Image]} />
                                <div className="mb-6"><SectionTitle>사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed">
                                    <TechDescP><Strong>Electron + React(Vite) + TypeScript</Strong> 기반의 데스크톱 애플리케이션으로, 웹에서는 불가능한 로컬 게임 클라이언트 접근, 화면 캡처, 인게임 오버레이 등을 구현했습니다.</TechDescP>
                                    <TechDescP><Strong>IPC 통신 설계:</Strong> Main↔Renderer 간 invoke/on 패턴의 양방향 IPC 통신 아키텍처를 설계하여 게임 상태, 룬 상태, 프레임 데이터, AI 조언 등을 실시간으로 동기화했습니다.</TechDescP>
                                    <TechDescP><Strong>Preload 보안 브릿지:</Strong> contextBridge를 활용한 샌드박스 기반 IPC 인터페이스로 메인 프로세스와 렌더러 간 안전한 통신을 구현했습니다.</TechDescP>
                                    <TechDescP><Strong>실시간 WebSocket 연동:</Strong> 인게임 상태에서 서버와 WebSocket을 유지하며, 자동 재연결(Exponential Backoff) 및 음성 설정 재전송 로직을 구현했습니다.</TechDescP>
                                    <TechDescP><Strong>폴링 아키텍처:</Strong> 게임 페이즈 감지(1500ms), 챔피언 선택 변경 감지(1000ms), 인게임 스냅샷(1000ms) 등 다단계 폴링으로 상태를 관리합니다.</TechDescP>
                                    <TechDescP><Strong>Win32 윈도우 트래킹:</Strong> PowerShell을 통해 게임 창의 위치·크기를 실시간 추적하여 오버레이 창을 동적으로 리포지셔닝합니다.</TechDescP>
                                </div></div>
                                <div className="mb-6"><SectionTitle>시스템 흐름</SectionTitle><SectionCode>{`League of Legends Client (LCU API)
     ↓ lockfile 읽기 / HTTPS 통신
Electron Main Process
     ├── 게임 상태 모니터링 (폴링)
     ├── 미니맵 캡처 → 서버 전송
     ├── 룬/아이템/밴/챔피언 추천 API 호출
     ├── WebSocket ↔ AI 코칭 서버
     └── IPC 통신
          ↓
Electron Renderer (React)
     ├── 메인 윈도우 (대시보드 / 챔피언 선택 화면)
     └── 오버레이 윈도우 (인게임 토스트 알림)`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>트러블슈팅</SectionTitle>
                                    <List>
                                        <li><Strong>문제:</Strong> 미니맵 크기가 유저 설정(MinimapScale 0.0~3.0)에 따라 동적으로 변함<br /><Strong>해결:</Strong> LCU의 HUD 설정 API와 game.cfg 파일 감시를 조합하여 미니맵 스케일을 실시간 동기화하고, 비율 계산 공식으로 정확한 캡처 영역 산출</li>
                                        <li><Strong>문제:</Strong> 룬 페이지 슬롯 제한(최대 4개)으로 자동 세팅 시 충돌<br /><Strong>해결:</Strong> 기존 LOLPAGO 룬 페이지 감지 후 업데이트, 없을 시 가장 오래된 페이지 교체하는 스마트 재활용 로직 구현</li>
                                        <li><Strong>문제:</Strong> 게임 창이 전체화면/창모드/보더리스 등 다양한 형태로 변동<br /><Strong>해결:</Strong> PowerShell Win32 API로 게임 윈도우 바운드를 500ms 주기 추적하여 오버레이를 정확히 동기화</li>
                                        <li><Strong>문제:</Strong> 네트워크 불안정 시 인게임 WebSocket 연결 끊김<br /><Strong>해결:</Strong> IN_GAME 상태에서만 동작하는 자동 재연결(Exponential Backoff) 로직과 음성 설정 자동 재전송 구현</li>
                                        <li><Strong>문제:</Strong> Windows Defender가 빌드된 exe를 스캔하여 파일 잠금(EBUSY) 발생<br /><Strong>해결:</Strong> dist 폴더를 Windows Defender 제외 경로로 등록하여 빌드 파이프라인 안정화</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>느낀 점</SectionTitle>
                                    <List>
                                        <li><Strong>데스크톱 앱 전문성 확보:</Strong> Electron의 Main/Renderer 프로세스 아키텍처, IPC 통신, 네이티브 API(화면 캡처, 오버레이) 등 웹과 차별화된 데스크톱 개발 역량 강화</li>
                                        <li><Strong>시스템 프로그래밍 경험:</Strong> LCU lockfile 파싱, Win32 윈도우 추적, 프로세스 스폰 등 OS 레벨 통합 경험 축적</li>
                                        <li><Strong>실시간 시스템 설계:</Strong> WebSocket, 폴링, 이벤트 기반 상태 관리를 조합한 실시간 데이터 파이프라인 설계 능력 향상</li>
                                        <li><Strong>비침투적 UX 설계:</Strong> 게임 플레이를 방해하지 않으면서도 필요한 정보를 적시에 전달하는 UX 설계의 중요성 체감</li>
                                    </List></div>
                                <div className="mb-6"><SectionTitle>개선 및 다음 목표</SectionTitle><List><li>자동 업데이트(Auto-update) 기능 도입</li><li>macOS 크로스 플랫폼 지원</li><li>오버레이 UI 커스터마이징 옵션 확대</li><li>경기 후 리뷰 및 통계 분석 대시보드 추가</li></List></div>
                                <div className="mb-6"><SectionTitle>프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 개발 중</li><li><Strong>기여도:</Strong> 데스크톱 클라이언트 아키텍처 설계, Electron Main/Renderer 프로세스 개발, 인게임 오버레이 및 실시간 AI 코칭 시스템 구현 주도</li><li><Strong>특징:</Strong> 웹에서 불가능한 로컬 게임 클라이언트 연동, 화면 캡처, 인게임 오버레이를 통한 AI 코칭 데스크톱 앱</li><li><Strong>배포:</Strong> NSIS 설치 파일(.exe) 배포</li></List></div>
                            </>
                        )}

                        <div className="flex gap-3 pt-6 mt-4 border-t border-white/[0.06]">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/[0.08] text-text-main text-sm no-underline font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/15"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {(project.id === 1 || project.id === 4 || project.id === 5 || project.id === 6 || project.id === 7) && project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/[0.08] text-text-main text-sm no-underline font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/15"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;

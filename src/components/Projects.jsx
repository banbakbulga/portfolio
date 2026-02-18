import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai, SiSpring, SiMysql, SiRedis, SiElasticsearch, SiTailwindcss, SiFlask } from 'react-icons/si';

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

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

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
        }
    ];

    const nextSlide = () => {
        const maxSlides = Math.max(0, projects.length - 1); // Logic adjusted for single column scroll or responsive
        // Assuming card width ~380px + gap 32px ~ 412px.
        // If container is 1400px, we fit ~3 cards.
        // Simple logic for now: increment by 1
        setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
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
            default: return <span className="text-white text-sm">{tech}</span>;
        }
    };

    return (
        <section id="projects" className="py-24 bg-gradient-to-br from-bg-warm to-bg-main min-h-screen flex items-center">
            <div className="w-full max-w-[1400px] mx-auto px-5">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent inline-block">Project</h2>
                    <p className="text-text-sub text-lg max-w-[600px] mx-auto leading-relaxed">다양한 기술 스택을 활용하여 제작한 프로젝트들을 소개합니다.</p>
                </motion.div>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-8 px-4"
                        layout
                        style={{ transform: `translateX(-${currentSlide * 400}px)` }}
                        animate={{ x: -currentSlide * 400 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:bg-white/[0.08] transition-all duration-300 relative flex-shrink-0 flex flex-col w-[380px] min-w-[380px]"
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-[180px] bg-gradient-to-br from-bg-sub to-bg-third flex items-center justify-center relative overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-border-main rounded-full flex items-center justify-center text-secondary text-xl transition-colors hover:bg-secondary hover:text-bg-main hover:border-secondary"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub />
                                        </motion.a>
                                        {(project.id === 1 || project.id === 4 || project.id === 5 || project.id === 6) && project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-border-main rounded-full flex items-center justify-center text-secondary text-xl transition-colors hover:bg-secondary hover:text-bg-main hover:border-secondary"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FaExternalLinkAlt />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6 pt-2 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-text-main mb-3">{project.title}</h3>
                                    <p className="text-text-sub text-base leading-relaxed mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <div key={techIndex} className="w-[60px] h-[60px] flex items-center justify-center bg-white/5 backdrop-blur-md border border-border-main rounded-2xl hover:bg-white/10 hover:border-secondary hover:shadow-[0_8px_25px_rgba(100,255,218,0.2)] transition-all duration-300">
                                                {getTechIcon(tech)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto text-center">
                                        <button
                                            className="bg-gradient-to-br from-secondary to-accent text-bg-main border-none py-3 px-8 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 hover:shadow-[0_5px_15px_rgba(100,255,218,0.3)] hover:brightness-110"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            자세히 보기
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            className="w-12 h-12 bg-white/5 backdrop-blur-md border border-border-main rounded-full text-secondary flex items-center justify-center text-lg cursor-pointer transition-all duration-300 hover:bg-secondary hover:text-bg-main hover:border-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-secondary"
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                        >
                            ‹
                        </button>
                        <button
                            className="w-12 h-12 bg-white/5 backdrop-blur-md border border-border-main rounded-full text-secondary flex items-center justify-center text-lg cursor-pointer transition-all duration-300 hover:bg-secondary hover:text-bg-main hover:border-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-secondary"
                            onClick={nextSlide}
                            disabled={currentSlide >= Math.max(0, projects.length - 1)}
                        >
                            ›
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
                    <div className="absolute top-5 right-8 text-white text-4xl font-bold cursor-pointer transition-colors hover:text-secondary" onClick={(e) => {
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
    // Helper components for modal sections
    const SectionTitle = ({ children }) => (
        <h3 className="text-white text-xl mb-4 border-b-2 border-secondary pb-2">{children}</h3>
    );
    const List = ({ children }) => (
        <ul className="text-primary-dark leading-relaxed pl-6 list-disc [&>li]:mb-3">{children}</ul>
    );
    const Strong = ({ children }) => <strong className="text-secondary">{children}</strong>;
    const Code = ({ children }) => <code className="bg-[rgba(100,255,218,0.1)] text-secondary px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
    const TechDescP = ({ children }) => <p className="mb-6 text-base text-primary-dark">{children}</p>;
    const SectionCode = ({ children }) => (
        <pre className="bg-black/30 border border-border-main rounded-lg p-6 overflow-x-auto my-4 text-white font-mono text-sm leading-relaxed whitespace-pre">{children}</pre>
    );
    const Gallery = ({ images }) => (
        <div className="mb-6">
            <SectionTitle>📸 프로젝트 갤러리</SectionTitle>
            <div className="flex gap-4 justify-center flex-wrap">
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`Gallery ${i}`} className="w-[180px] h-[120px] object-cover rounded-lg border-2 border-border-main cursor-pointer transition-transform hover:scale-105 hover:border-secondary hover:shadow-[0_4px_12px_rgba(100,255,218,0.3)]" onClick={() => setSelectedImage(img)} />
                ))}
            </div>
        </div>
    );

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[2000] p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-[#1e1e1e]/95 backdrop-blur-xl border border-border-main rounded-3xl w-full max-w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex justify-between items-center p-8 pb-4 border-b border-border-main">
                    <h2 className="text-text-main text-3xl font-bold m-0">{project.title}</h2>
                    <button className="bg-none border-none text-text-sub text-3xl cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-text-main" onClick={onClose}>×</button>
                </div>

                <div className="p-8 flex flex-col gap-8">
                    <div className="text-center p-8 bg-gradient-to-br from-bg-sub to-bg-third rounded-2xl overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        {project.id === 1 && (
                            <>
                                <div className="mb-6">
                                    <SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List>
                                        <li><Strong>프로젝트명:</Strong> 카카오톡 메인 UI 클론</li>
                                        <li><Strong>개발 기간:</Strong> 2023 - 약 2주</li>
                                        <li><Strong>참여 인원:</Strong> 개인 (1인 개발)</li>
                                        <li><Strong>기술 스택:</Strong> HTML5, CSS3</li>
                                        <li><Strong>형태:</Strong> 정적 웹페이지 (JS 없이 순수 프론트엔드)</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List>
                                        <li>📱 카카오톡 메인 화면 구조 구현 (친구목록 / 채팅목록 / 설정화면 / 하단 탭바 등)</li>
                                        <li>🖼 CSS <Code>transition</Code>과 <Code>@keyframes</Code>를 활용한 탭 전환 애니메이션</li>
                                        <li>💬 자바스크립트 없이 <Strong>CSS 상태 조합</Strong>으로 읽지 않은 채팅 배지 및 상태 표현</li>
                                        <li>📏 반응형 레이아웃 (모바일 중심 360~430px → 태블릿 768px 확장)</li>
                                        <li>💡 나만의 디자인 적용 — 부드러운 컬러톤, 카드형 리스트, 가독성 개선</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>🧩 사용 기술 및 구조</SectionTitle>
                                    <div className="text-primary-dark leading-relaxed">
                                        <TechDescP><Strong>HTML5</Strong>에서는 시맨틱 마크업 (<Code>header</Code>, <Code>nav</Code>, <Code>main</Code>, <Code>section</Code>)을 활용하여 구조를 설계했고, 접근성 속성 (<Code>aria-label</Code>, <Code>aria-current</Code>)을 적용하여 사용자 경험을 개선했습니다.</TechDescP>
                                        <TechDescP><Strong>CSS3</Strong>는 Flexbox와 Grid 레이아웃을 혼합 사용하여 반응형 디자인을 구현했으며, BEM 네이밍 규칙으로 구조적 스타일링을 진행했습니다. CSS 변수를 통해 색상, 간격, 라운드 값을 체계적으로 관리하고, <Code>transition</Code>과 <Code>@keyframes</Code>를 활용하여 부드러운 인터랙션을 구현했습니다.</TechDescP>
                                        <TechDescP><Strong>디자인 개선</Strong> 측면에서는 기존 노란 메인 컬러를 부드러운 중간톤으로 재구성하여 시각적 피로도를 줄였고, 리스트 간격, 폰트 굵기, 라운드 값을 조정하여 가독성을 향상시켰습니다. 또한 SVG 인라인 아이콘을 활용하여 상태 전환을 자연스럽게 표현했습니다.</TechDescP>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>🧱 폴더 구조</SectionTitle>
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
                                    <SectionTitle>🧠 트러블슈팅</SectionTitle>
                                    <List>
                                        <li><Strong>문제:</Strong> iOS Safari에서 탭바 위치 흔들림<br /><Strong>해결:</Strong> <Code>position: sticky</Code>로 대체 및 안전영역 padding 추가</li>
                                        <li><Strong>문제:</Strong> 긴 메시지 말줄임 처리 깨짐<br /><Strong>해결:</Strong> <Code>line-clamp</Code> + <Code>overflow:hidden</Code> 조합</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>🪄 느낀 점</SectionTitle>
                                    <List>
                                        <li><Strong>기본기 강화:</Strong> HTML/CSS만으로도 충분히 인터랙션 구현 가능</li>
                                        <li><Strong>디자인 시스템 이해:</Strong> 변수 기반 설계로 일관성과 유지보수성 향상</li>
                                        <li><Strong>접근성 설계의 중요성:</Strong> 시맨틱 구조를 초기에 잡으면 수정 비용이 적음</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>🔍 개선 및 다음 목표</SectionTitle>
                                    <List>
                                        <li>JavaScript 도입 — 탭 라우팅, 검색, 상태 저장 기능 추가</li>
                                        <li>React / Web Components 기반 컴포넌트화</li>
                                        <li>Playwright 테스트를 통한 시각 회귀 및 접근성 자동화</li>
                                    </List>
                                </div>
                                <div className="mb-6">
                                    <SectionTitle>💾 실행 방법</SectionTitle>
                                    <ol className="text-primary-dark leading-relaxed pl-6 list-decimal [&>li]:mb-3">
                                        <li>Live Demo 버튼을 클릭해 프로젝트 실행</li>
                                        <li>전체 화면 시 "Your Screen is Too Big!!" 문구가 뜨면 화면을 가로로 줄이면 로그인 화면 등장</li>
                                    </ol>
                                </div>
                            </>
                        )}

                        {project.id === 2 && (
                            <>
                                <div className="mb-6"><SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> NHN 아카데미 흑백문고</li><li><Strong>개발 기간: </Strong> 2024 (약 6개월)</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (8명)</li><li><Strong>기술 스택:</Strong> Java, Spring Boot, MySQL, Redis, Elasticsearch</li><li><Strong>형태:</Strong> 마이크로서비스 아키텍처 기반 온라인 서점</li></List></div>
                                <div className="mb-6"><SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List><li>📚 도서 검색 및 주문 시스템 구현</li><li>🏗️ Spring Boot 기반 마이크로서비스 아키텍처 구축</li><li>🔍 Elasticsearch를 활용한 고성능 도서 검색 기능</li><li>💾 Redis 캐싱으로 응답 속도 최적화</li><li>🔐 Spring Security 기반 인증/인가 시스템</li><li>📊 데이터베이스 모델링 및 REST API 개발</li><li>🤝 Git 브랜치 전략과 코드 리뷰를 통한 협업 프로세스</li></List></div>
                                <div className="mb-6"><SectionTitle>🧩 사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>Java 21 LTS</Strong>와 <Strong>Spring Boot 3.3.x</Strong>를 기반으로 마이크로서비스 아키텍처를 구축했습니다. Spring Cloud Gateway를 통한 API 게이트웨이, Eureka를 활용한 서비스 디스커버리, Spring Cloud Config로 설정 중앙화를 구현하여 확장 가능한 시스템을 설계했습니다.</TechDescP><TechDescP><Strong>데이터베이스</Strong>는 MySQL 8.x를 메인 DB로 사용하고, Redis를 캐싱 레이어로 활용했습니다. <Strong>Elasticsearch 7.x</Strong>를 통한 전문 검색 기능으로 도서 검색 성능을 최적화했고, JPA Query를 활용하여 효율적인 데이터 접근을 구현했습니다.</TechDescP><TechDescP><Strong>개발 프로세스</Strong>에서는 GitHub Actions를 통한 CI/CD 파이프라인을 구축하고, SonarQube를 활용하여 코드 품질을 관리했습니다. Docker와 NHN Container Registry를 통한 컨테이너화로 배포 자동화를 실현했습니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>🏗️ 시스템 아키텍처</SectionTitle><SectionCode>{`
heukbaekbook-shop        # 상품/주문 서비스
heukbaekbook-auth         # 인증/인가 서비스  
heukbaekbook-frontend     # 프론트엔드
heukbaekbook-gateway      # API 게이트웨이
heukbaekbook-eureka       # 서비스 디스커버리
heukbaekbook-rabbitmq     # 메시지 큐
heukbaekbook-batch        # 배치 처리
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>🧠 트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 마이크로서비스 간 통신 지연<br /><Strong>해결:</Strong> OpenFeign 클라이언트 최적화 및 연결 풀 설정</li><li><Strong>문제:</Strong> Elasticsearch 검색 성능 저하<br /><Strong>해결:</Strong> 인덱스 최적화 및 검색 쿼리 튜닝</li><li><Strong>문제:</Strong> Redis 캐시 일관성 문제<br /><Strong>해결:</Strong> TTL 설정 및 캐시 무효화 전략 수립</li></List></div>
                                <div className="mb-6"><SectionTitle>🪄 느낀 점</SectionTitle><List><li><Strong>팀 협업의 중요성:</Strong> Git 브랜치 전략과 코드 리뷰를 통한 체계적 개발</li><li><Strong>마이크로서비스 이해:</Strong> 서비스 분리와 API 설계의 복잡성과 장점 경험</li><li><Strong>성능 최적화:</Strong> 캐싱과 검색엔진을 통한 시스템 성능 향상 방법 학습</li></List></div>
                                <div className="mb-6"><SectionTitle>🔍 개선 및 다음 목표</SectionTitle><List><li>모니터링 시스템 구축 (Prometheus + Grafana)</li><li>Kubernetes 기반 컨테이너 오케스트레이션</li><li>API 문서화 자동화 (Swagger/OpenAPI)</li></List></div>
                                <div className="mb-6"><SectionTitle>💾 프로젝트 정보</SectionTitle><List><li>수상 : NHN 백엔드 아카데미 우수상</li><li>기여도 : 쿠폰 시스템 CRUD API 개발 및 프론트엔드 연동</li></List></div>
                            </>
                        )}

                        {project.id === 3 && (
                            <>
                                <div className="mb-6"><SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> LLM 기반 BGP 분석 챗봇</li><li><Strong>개발 기간:</Strong> 2024 - 현재 (졸업프로젝트)</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (3명)</li><li><Strong>기술 스택:</Strong> Python, OpenAI, FastAPI, MongoDB, React, JavaScript</li><li><Strong>형태:</Strong> AI 챗봇 웹 애플리케이션</li></List></div>
                                <div className="mb-6"><SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List><li>🤖 LLM을 활용한 BGP 데이터 분석 챗봇</li><li>📊 BGP 라우팅 정보 실시간 분석</li><li>💬 자연어 질의응답 시스템</li><li>🔍 네트워크 상태 진단 및 추천</li><li>📈 BGP 경로 최적화 제안</li><li>🌐 웹 기반 사용자 인터페이스</li></List></div>
                                <div className="mb-6"><SectionTitle>🧩 사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>Python</Strong>을 기반으로 FastAPI 프레임워크를 사용하여 RESTful API를 구축했습니다. OpenAI의 GPT 모델을 활용하여 BGP 데이터 분석을 위한 자연어 처리 기능을 구현했고, MongoDB를 통해 대용량 네트워크 데이터를 효율적으로 저장 및 관리합니다.</TechDescP><TechDescP><Strong>React</Strong>와 <Strong>JavaScript</Strong>를 활용한 프론트엔드에서는 실시간 챗봇 인터페이스를 구현했습니다. 사용자가 자연어로 BGP 관련 질문을 입력하면, 백엔드에서 데이터를 분석하고 LLM을 통해 이해하기 쉬운 답변을 제공하는 시스템을 개발했습니다.</TechDescP><TechDescP><Strong>BGP 분석</Strong> 기능은 네트워크 라우팅 정보를 실시간으로 모니터링하고, 경로 최적화 및 네트워크 장애 진단을 위한 인사이트를 제공합니다. 이를 통해 네트워크 관리자가 복잡한 BGP 설정을 더 쉽게 이해하고 관리할 수 있도록 지원합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>🏗️ 시스템 아키텍처</SectionTitle><SectionCode>{`
frontend/         # React 기반 챗봇 UI
backend/          # FastAPI 기반 API 서버
  ├── api/        # REST API 엔드포인트
  ├── models/     # 데이터 모델
  ├── services/   # BGP 분석 서비스
  └── llm/        # OpenAI 연동 모듈
database/         # MongoDB 데이터베이스
docs/            # 프로젝트 문서
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>🧠 트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> BGP 데이터 파싱 성능 저하<br /><Strong>해결:</Strong> 비동기 처리 및 데이터베이스 인덱싱 최적화</li><li><Strong>문제:</Strong> LLM 응답 지연<br /><Strong>해결:</Strong> 응답 캐싱 및 스트리밍 응답 구현</li><li><Strong>문제:</Strong> 대용량 BGP 데이터 처리<br /><Strong>해결:</Strong> MongoDB 집계 파이프라인 및 페이지네이션 적용</li></List></div>
                                <div className="mb-6"><SectionTitle>🪄 느낀 점</SectionTitle><List><li><Strong>AI 활용의 중요성:</Strong> LLM을 통한 복잡한 기술 데이터의 사용자 친화적 해석</li><li><Strong>네트워크 지식:</Strong> BGP 프로토콜에 대한 깊이 있는 이해와 실무 적용</li><li><Strong>풀스택 개발:</Strong> 프론트엔드부터 백엔드, AI까지 종합적인 시스템 구축</li></List></div>
                                <div className="mb-6"><SectionTitle>🔍 개선 및 다음 목표</SectionTitle><List><li>실시간 BGP 데이터 수집 및 분석 기능 강화</li><li>다양한 네트워크 프로토콜 지원 확대</li><li>시각화 대시보드 및 그래프 기능 추가</li></List></div>
                                <div className="mb-6"><SectionTitle>💾 프로젝트 정보</SectionTitle><List><li>개발 상태: 진행 중 (졸업프로젝트)</li><li>기여도: UI/UX 디자인, 프론트엔드 개발 및 파이프라인 설계</li><li>특징: LLM과 네트워크 분석의 융합</li></List></div>
                                <Gallery images={[bgp1Image, bgp2Image, bgp3Image]} />
                            </>
                        )}

                        {project.id === 4 && (
                            <>
                                <div className="mb-6"><SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> FM Radio Script Curation Platform</li><li><Strong>개발 기간:</Strong> 2024 (약 5개월)</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> React, Python, Flask, MongoDB, OpenAI, TailwindCSS</li><li><Strong>형태:</Strong> AI 기반 라디오 방송 디지털 아카이브 플랫폼</li></List></div>
                                <div className="mb-6"><SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List><li>🎧 AI 음성 인식: OpenAI Whisper를 활용한 고품질 음성-텍스트 변환</li><li>🤖 지능형 조각화: GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅</li><li>🎵 음악 메타데이터: Spotify API 연동으로 음악 정보 자동 수집</li><li>🎬 영화 정보: OMDb API를 통한 영화 메타데이터 제공</li><li>🔍 고급 검색: 날짜, 키워드, 카테고리별 다중 필터링</li><li>⚡ 실시간 재생: 웹 기반 오디오 플레이어로 구간별 재생</li><li>📱 반응형 디자인: 모든 디바이스에서 최적화된 사용자 경험</li></List></div>
                                <div className="mb-6"><SectionTitle>🧩 사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React</Strong>를 메인 UI 프레임워크로 사용하여 SPA(Single Page Application)을 구현했습니다. React Router DOM으로 페이지 라우팅을 관리하고, TailwindCSS로 반응형 디자인을 적용했습니다.</TechDescP><TechDescP><Strong>Python Flask</Strong>를 백엔드 프레임워크로 사용하여 REST API를 구축했습니다. Flask-CORS로 크로스 오리진 요청을 처리하고, MongoDB와 PyMongo를 통해 데이터를 저장 및 관리합니다.</TechDescP><TechDescP><Strong>AI/ML 기술</Strong>로는 OpenAI Whisper를 활용해 음성을 텍스트로 변환하고, GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅합니다. OpenAI Python SDK를 통해 GPT API를 호출하여 지능형 조각화를 구현했습니다.</TechDescP><TechDescP><Strong>외부 API 연동</Strong>으로 Spotify API를 통해 음악 메타데이터를 자동 수집하고, OMDb API로 영화 정보를 검색합니다. Axios를 사용해 HTTP 요청을 처리하고, JWT와 Bcrypt로 사용자 인증 및 보안을 구현했습니다.</TechDescP><TechDescP><Strong>배포 및 개발</Strong>은 GitHub Actions를 통한 CI/CD 자동화와 GitHub Pages를 통한 정적 사이트 호스팅을 사용합니다. PostCSS와 Autoprefixer로 CSS 후처리를 진행합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>🏗️ 프로젝트 구조</SectionTitle><SectionCode>{`
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
                                <div className="mb-6"><SectionTitle>🧠 트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 긴 라디오 방송 파일의 Whisper 처리 시간<br /><Strong>해결:</Strong> 파일 분할 처리 및 배치 작업으로 처리 시간 단축</li><li><Strong>문제:</Strong> GPT 조각화 시 컨텍스트 손실<br /><Strong>해결:</Strong> 적절한 청크 크기 설정 및 오버랩 처리로 연속성 보장</li><li><Strong>문제:</Strong> Spotify API 호출 제한<br /><Strong>해결:</Strong> 캐싱 시스템 도입 및 API 호출 최적화</li></List></div>
                                <div className="mb-6"><SectionTitle>🪄 느낀 점</SectionTitle><List><li><Strong>AI 활용의 혁신성:</Strong> Whisper와 GPT를 조합하여 라디오 방송을 완전히 새로운 형태로 재구성</li><li><Strong>사용자 중심 설계:</Strong> 긴 콘텐츠의 피로감을 해결하는 숏폼 방식의 접근이 사용자 만족도 향상</li><li><Strong>메타데이터의 가치:</Strong> 음악, 영화 정보 자동 수집을 통한 콘텐츠의 부가가치 창출</li></List></div>
                                <div className="mb-6"><SectionTitle>🔍 개선 및 다음 목표</SectionTitle><List><li>더 많은 라디오 방송 데이터 확장 (다른 연도, 방송사)</li><li>실시간 방송 처리 및 자동 아카이빙 시스템</li><li>사용자 맞춤 추천 알고리즘 개발</li></List></div>
                                <div className="mb-6"><SectionTitle>💾 프로젝트 정보</SectionTitle><List><li>개발 상태: 완료</li><li>기여도: 전체 시스템 설계 및 구현</li><li>특징: 웹 기반 라디오 방송 플랫폼</li></List></div>
                                <Gallery images={[radio1Image, radio2Image, radio3Image, radio4Image]} />
                            </>
                        )}

                        {project.id === 5 && (
                            <>
                                <div className="mb-6"><SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> MCP 기반 지능형 챗봇 통합 플랫폼</li><li><Strong>개발 기간:</Strong> 2024 (약 4개월)</li><li><Strong>참여 인원:</Strong> 팀 프로젝트 (3명)</li><li><Strong>기술 스택:</Strong> React, FastAPI, OpenAI, SQLite, FAISS, MCP</li><li><Strong>형태:</Strong> 사용자 참여형 AI 챗봇 플랫폼</li></List></div>
                                <div className="mb-6"><SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List><li>🤖 <Strong>지능형 챗봇 추천:</Strong> 사용자 질문 의도를 파악하여 최적의 챗봇을 자동 매칭</li><li>👥 <Strong>사용자 참여형 플랫폼:</Strong> 학내 구성원이 직접 챗봇을 생성하고 공유하는 시스템</li><li>🔗 <Strong>MCP 프로토콜 연동:</Strong> 다양한 정보 시스템과의 표준화된 연결</li><li>📚 <Strong>다양한 정보 제공:</Strong> 공식 문서부터 실생활 정보(맛집, 꿀팁 등)까지 폭넓은 커버리지</li><li>🎨 <Strong>직관적 UI/UX:</Strong> 챗봇 등록, 탐색, 채팅, 슈퍼차차 채팅 등 핵심 기능 구현</li><li>🔧 <Strong>확장 가능한 아키텍처:</Strong> 기존 차차 시스템과의 연동 및 부서별 맞춤형 챗봇 운영</li></List></div>
                                <div className="mb-6"><SectionTitle>🧩 사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React</Strong>를 프론트엔드 프레임워크로 사용하여 사용자 친화적인 인터페이스를 구현했습니다. SPA 구조로 빠른 사용자 경험을 제공하며, TailwindCSS를 활용한 반응형 디자인을 적용했습니다.</TechDescP><TechDescP><Strong>FastAPI</Strong>를 백엔드 프레임워크로 사용하여 RESTful API를 구축했습니다. 비동기 처리를 통한 높은 성능과 자동 API 문서화(Swagger) 기능을 제공합니다.</TechDescP><TechDescP><Strong>OpenAI GPT</Strong>를 핵심 LLM으로 활용하여 고품질의 AI 응답을 생성합니다. MCP(Model Context Protocol)를 통해 다양한 AI 모델과의 표준화된 통신을 구현했습니다.</TechDescP><TechDescP><Strong>SQLite/FAISS</Strong>를 데이터베이스로 사용하여 챗봇 정보와 벡터 임베딩을 효율적으로 저장 및 검색합니다. FAISS를 통한 고속 유사도 검색으로 사용자 의도 파악의 정확도를 높였습니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>🏗️ 시스템 아키텍처</SectionTitle><SectionCode>{`
Client → Browser → GitHub Pages (React Build Files)
                ↓
                Render Platform
                ├── FastAPI ←→ SQLite
                ├── FastAPI ←→ MCP Server
                ├── FastAPI ←→ OpenAI GPT
                └── MCP Server ←→ OpenAI MCP Client

배포 환경:
- Frontend: GitHub Pages (https://bgp-llama.github.io/llm-contest-fe)
- Backend: Render (https://llm-contest.onrender.com)
- API Docs: Swagger (https://llm-contest.onrender.com/docs)
`}</SectionCode></div>
                                <div className="mb-6"><SectionTitle>🧠 트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> 사용자 의도 파악의 정확도 부족<br /><Strong>해결:</Strong> FAISS 벡터 검색과 MCP 프로토콜을 활용한 지능형 매칭 시스템 구축</li><li><Strong>문제:</Strong> 여러 챗봇 간 일관된 사용자 경험 제공<br /><Strong>해결:</Strong> 통합 인터페이스와 자동 챗봇 추천 시스템으로 단일 채팅창 경험 구현</li><li><Strong>문제:</Strong> 기존 시스템과의 연동 및 확장성<br /><Strong>해결:</Strong> MCP 표준 프로토콜을 통한 모듈화된 아키텍처 설계</li></List></div>
                                <div className="mb-6"><SectionTitle>🪄 창의성 및 혁신성</SectionTitle><List><li><Strong>사용자 참여형 플랫폼:</Strong> 기존 단일 정보 제공에서 벗어나 학내 구성원 모두가 정보 생산자가 되는 혁신적 모델</li><li><Strong>정보 통합의 해결책:</Strong> 정보의 파편화와 사각지대 문제를 해결하는 통합 정보 경험 제공</li><li><Strong>지능형 추천 시스템:</Strong> 사용자가 어떤 챗봇에게 질문할지 고민할 필요 없이 자동 매칭</li></List></div>
                                <div className="mb-6"><SectionTitle>🔍 학내 사업 연계 가능성</SectionTitle><List><li><Strong>기존 차차 시스템 확장:</Strong> 현재 운영 중인 학내 챗봇과 연동하여 상호보완적 관계 구축</li><li><Strong>부서별 맞춤형 챗봇:</Strong> 도서관, IT헬프데스크, 장학팀 등 각 부서의 업무 특화 챗봇 운영</li><li><Strong>학생 생활 밀착형 서비스:</Strong> 카카오톡 연동을 통한 시설물 고장 접수, 식단 안내, 캠퍼스 길찾기 등</li><li><Strong>추가 개발 계획:</Strong> 부적절한 정보 방지 기능, 모델 종류 확장, 카카오톡 연동 등</li></List></div>
                                <div className="mb-6"><SectionTitle>💾 프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 핵심 기능 구현 완료, 지속적 확장 중</li><li><Strong>기여도:</Strong> 전체 시스템 아키텍처 설계 및 프론트엔드 개발</li><li><Strong>특징:</Strong> 체계적인 시스템 설계와 구체적인 UI/UX 시각화</li><li><Strong>배포:</Strong> 프론트엔드(GitHub Pages), 백엔드(Render), API 문서(Swagger) 완비</li><li><Strong>수상:</Strong> 생성형 인공지능 챌린지 은상 수상</li></List></div>
                            </>
                        )}

                        {project.id === 6 && (
                            <>
                                <div className="mb-6"><SectionTitle>📌 프로젝트 개요</SectionTitle>
                                    <List><li><Strong>프로젝트명:</Strong> 포트폴리오 웹사이트</li><li><Strong>개발 기간:</Strong> 2024 - 현재</li><li><Strong>참여 인원:</Strong> 개인 프로젝트</li><li><Strong>기술 스택:</Strong> React, JavaScript, Framer Motion, CSS3, GitHub Pages</li><li><Strong>형태:</Strong> 반응형 포트폴리오 웹사이트</li></List></div>
                                <div className="mb-6"><SectionTitle>✨ 주요 기능 및 특징</SectionTitle>
                                    <List><li>🎨 <Strong>인터랙티브 애니메이션:</Strong> Framer Motion을 활용한 부드러운 페이지 전환 및 요소 애니메이션</li><li>📱 <Strong>완전 반응형 디자인:</Strong> 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 사용자 경험</li><li>🎯 <Strong>프로젝트 갤러리:</Strong> 6개 주요 프로젝트의 상세 정보와 이미지 갤러리 제공</li><li>💼 <Strong>경력 타임라인:</Strong> 시각적으로 구성된 경력 및 학력 이력</li><li>🎭 <Strong>인트로 애니메이션:</Strong> 페이지 로딩 시 감성적인 자기소개 애니메이션</li><li>🌙 <Strong>다크 테마:</Strong> 현대적이고 세련된 다크 테마 디자인</li><li>⚡ <Strong>빠른 로딩:</Strong> 최적화된 빌드와 이미지 압축으로 빠른 페이지 로딩</li></List></div>
                                <div className="mb-6"><SectionTitle>🧩 사용 기술 및 구조</SectionTitle><div className="text-primary-dark leading-relaxed"><TechDescP><Strong>React 19.2.0</Strong>을 기반으로 한 현대적인 SPA(Single Page Application) 구조로 구현했습니다. 함수형 컴포넌트와 React Hooks를 활용하여 상태 관리를 효율적으로 처리했습니다.</TechDescP><TechDescP><Strong>Framer Motion 12.23.24</Strong>를 통해 페이지 전환, 요소 애니메이션, 스크롤 기반 인터랙션을 구현했습니다. AnimatePresence를 활용한 모달 애니메이션과 whileInView를 통한 스크롤 애니메이션으로 사용자 경험을 향상시켰습니다.</TechDescP><TechDescP><Strong>CSS3</Strong>와 <Strong>TailwindCSS</Strong>를 조합하여 반응형 디자인을 구현했습니다. CSS Grid와 Flexbox를 활용한 레이아웃, CSS 변수를 통한 테마 관리, 미디어 쿼리를 통한 반응형 브레이크포인트 설정을 적용했습니다.</TechDescP><TechDescP><Strong>GitHub Pages</Strong>를 통한 정적 사이트 호스팅과 <Strong>gh-pages</Strong> 패키지를 활용한 자동화된 배포 시스템을 구축했습니다. CI/CD 파이프라인으로 코드 변경 시 자동 배포가 가능합니다.</TechDescP></div></div>
                                <div className="mb-6"><SectionTitle>🏗️ 프로젝트 구조</SectionTitle><SectionCode>{`
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
                                <div className="mb-6"><SectionTitle>🧠 트러블슈팅</SectionTitle><List><li><Strong>문제:</Strong> Framer Motion 애니메이션 성능 최적화<br /><Strong>해결:</Strong> transform과 opacity 속성만 애니메이션하고, will-change CSS 속성 적용</li><li><Strong>문제:</Strong> 이미지 로딩 최적화<br /><Strong>해결:</Strong> 이미지 압축 및 lazy loading 구현으로 초기 로딩 시간 단축</li><li><Strong>문제:</Strong> 모바일 터치 인터랙션<br /><Strong>해결:</Strong> 터치 이벤트 최적화 및 모바일 전용 인터랙션 패턴 적용</li></List></div>
                                <div className="mb-6"><SectionTitle>🪄 느낀 점</SectionTitle><List><li><Strong>애니메이션의 중요성:</Strong> 적절한 애니메이션이 사용자 경험을 크게 향상시킨다는 것을 경험</li><li><Strong>반응형 디자인의 복잡성:</Strong> 다양한 디바이스에서의 일관된 경험 제공의 중요성</li><li><Strong>성능 최적화:</Strong> 사용자 경험과 성능 사이의 균형점을 찾는 것의 중요성</li><li><Strong>자기 브랜딩:</Strong> 포트폴리오를 통해 자신만의 독특한 개성과 스타일을 표현하는 방법 학습</li></List></div>
                                <div className="mb-6"><SectionTitle>🔍 개선 및 다음 목표</SectionTitle><List><li>PWA(Progressive Web App) 기능 추가로 모바일 앱 같은 경험 제공</li><li>다국어 지원 기능 추가</li><li>블로그 섹션 추가로 기술 글과 경험 공유</li><li>다크/라이트 테마 토글 기능 구현</li><li>SEO 최적화 및 메타 태그 개선</li></List></div>
                                <div className="mb-6"><SectionTitle>💾 프로젝트 정보</SectionTitle><List><li><Strong>개발 상태:</Strong> 지속적 업데이트 중</li><li><Strong>기여도:</Strong> 전체 설계 및 개발</li><li><Strong>특징:</Strong> 현대적인 웹 기술 스택과 사용자 경험 중심 설계</li><li><Strong>배포:</Strong> GitHub Pages 자동 배포</li></List></div>
                            </>
                        )}

                        <div className="flex gap-4 mt-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-md border border-border-main rounded-xl text-text-main no-underline font-medium transition-all duration-300 hover:bg-secondary hover:text-bg-main hover:border-secondary"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {(project.id === 1 || project.id === 4 || project.id === 5 || project.id === 6) && project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-md border border-border-main rounded-xl text-text-main no-underline font-medium transition-all duration-300 hover:bg-secondary hover:text-bg-main hover:border-secondary"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;

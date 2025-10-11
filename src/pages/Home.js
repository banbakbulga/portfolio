import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDiscord, FaNodeJs, FaJava, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiOpenai, SiNotion, SiSpring, SiMysql, SiRedis, SiElasticsearch, SiTailwindcss, SiFlask } from 'react-icons/si';
import profileImage from '../img/양준혁 증사 배경제거.png';
import mimoticonImage from '../img/미모티콘.png';
import htmlImage from '../img/html.jpg';
import cssImage from '../img/css.jpg';
import jsImage from '../img/js.jpg';
import reactImage from '../img/react.jpg';
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
import './Home.css';
import './About.css';
import './Career.css';
import './Projects.css';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [copyNotification, setCopyNotification] = useState({ show: false, message: '' });
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowMain(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 툴팁 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.contact-icon-wrapper')) {
        setShowEmailTooltip(false);
        setShowPhoneTooltip(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const projects = [
    {
      id: 1,
      title: "카카오톡 UI 클론 코딩",
      description: "HTML과 CSS를 활용해 카카오톡 메인 UI를 클론하고 나만의 디자인을 적용한 프론트엔드 프로젝트입니다.",
      image: "💬",
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
      image: "📚",
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
      image: "🤖",
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
      image: "📻",
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
       image: "🤖",
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
       image: "💼",
       tech: ["React", "JavaScript", "GitHub Pages"],
       link: "https://banbakbulga.github.io/portfolio/",
       github: "https://github.com/banbakbulga/portfolio",
       category: "frontend",
       featured: true
     }
  ];



  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const maxSlides = Math.max(0, projects.length - 3); // 화면에 3개씩 보이도록
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyNotification({ show: true, message: `${type}을 복사했습니다.` });
      setTimeout(() => {
        setCopyNotification({ show: false, message: '' });
      }, 2000);
    } catch (err) {
      console.error('복사 실패:', err);
      setCopyNotification({ show: true, message: '복사에 실패했습니다.' });
      setTimeout(() => {
        setCopyNotification({ show: false, message: '' });
      }, 2000);
    }
  };

  const copyEmail = () => {
    copyToClipboard('junh9126@gmail.com', '메일 주소');
  };

  const copyPhone = () => {
    copyToClipboard('010-5766-1639', '전화번호');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="home-page">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-animation"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.2,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="intro-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="greeting">
                안녕하세요, 
                <motion.span
                  className="developer-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  웹 개발자
                </motion.span>
              </div>
              <motion.div 
                className="intro-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
              >
                <span className="name">양준혁</span>입니다
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Hero Section */}
            <section id="home" className="home">
        <div className="hero-section">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                안녕하세요, 
                <motion.span
                  className="developer-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  웹 개발자
                </motion.span>
              </motion.div>
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <span className="name">양준혁</span>입니다
              </motion.h1>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <br/>
                사용자 경험을 중요시하는 마인드, 
                <br/>창의적이고 직관적인 웹 애플리케이션을 개발합니다.
                <br/>데이터를 활용한 혁신적인 솔루션을 제공합니다.
              </motion.p>
              <motion.div 
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.a 
                  href="https://github.com/banbakbulga" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                
                              <div className="contact-icon-wrapper">
                                <motion.button
                                  onClick={copyEmail}
                                  onMouseEnter={() => setShowEmailTooltip(true)}
                                  onMouseLeave={() => setShowEmailTooltip(false)}
                                  aria-label="Email 복사"
                                  whileHover={{ scale: 1.1, y: -3 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="contact-icon-btn"
                                >
                                  <FaEnvelope />
                                </motion.button>
                                <AnimatePresence>
                                  {showEmailTooltip && (
                                    <motion.div
                                      className="contact-tooltip email-tooltip"
                                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <span>junh9126@gmail.com</span>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                </div>

                              <div className="contact-icon-wrapper">
                                <motion.button
                                  onClick={copyPhone}
                                  onMouseEnter={() => setShowPhoneTooltip(true)}
                                  onMouseLeave={() => setShowPhoneTooltip(false)}
                                  aria-label="전화번호 복사"
                                  whileHover={{ scale: 1.1, y: -3 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="contact-icon-btn"
                                >
                                  <FaPhone />
                                </motion.button>
                                <AnimatePresence>
                                  {showPhoneTooltip && (
                                    <motion.div
                                      className="contact-tooltip phone-tooltip"
                                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <span>010-5766-1639</span>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="profile-card">
                 <motion.div 
                   className="profile-image"
                   whileHover={{ scale: 1.02 }}
                   transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.6 }}
                   onClick={openContactModal}
                   style={{ cursor: 'pointer' }}
                 >
                   <div className="click-hint">Click me</div>
                   <div className="profile-photo">
                     <img 
                       src={profileImage} 
                       alt="양준혁 프로필 사진" 
                       className="profile-img"
                     />
                   </div>
                  <motion.div 
                    className="profile-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                  >
                    <span>Available for work</span>
                  </motion.div>
                </motion.div>
              </div>
              <div className="floating-elements">
                <motion.div 
                  className="floating-element element-1"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  React
                </motion.div>
                <motion.div 
                  className="floating-element element-2"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  UI/UX
                </motion.div>
                <motion.div 
                  className="floating-element element-3"
                  animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 4, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  Data
                </motion.div>
                <motion.div 
                  className="floating-element element-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  LLM
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* 스크롤 안내 */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 2, duration: 0.3 }}
              >
                <div className="scroll-text">더 알아보기</div>
                <motion.div 
                  className="scroll-arrow"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About me
          </motion.h2>
          <motion.div 
            className="about-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              viewport={{ once: true }}
                              className="about-sections"
                            >
                              <div className="about-section">
                                <h4>저에게 협력은 하나의 <strong>'번역'</strong>입니다</h4>
                                <p>
                                
                                  서로 다른 언어와 사고방식을 이해하고 연결할 때, 비로소 진짜 협력이 이루어진다고 믿습니다.<br />
                                  이런 사고방식은 제가 개발을 대하는 태도와도 닮아 있습니다.
                                </p>
                              </div>
                              
                              <div className="about-section">
                              <h4>저는 데이터를 하나의 <strong>끝없는 바다</strong>로 생각합니다.</h4>
                                <p>
                                거대한 파도 속에서도 의미 있는 패턴을 찾아내고 질서를 세우는 사람이 진정한 항해자라고 믿습니다.<br />
                                  복잡한 정보를 정리하고, 사람과 기술이 자연스럽게 이어지는 흐름을 만드는 일을 좋아합니다.<br />
                                  프론트엔드와 백엔드를 넘나들며 데이터를 다루고,<br/> 더 나은 협업과 사용자 경험을 기술로 풀어내는 개발자로 성장하고 있습니다.
                                </p>
                              </div>
                              <br/>
                            </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Skills & Tools
              </motion.h3>
              <motion.div 
                className="skills"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaHtml5 className="skill-icon html-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCss3Alt className="skill-icon css-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaJs className="skill-icon js-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaReact className="skill-icon react-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPython className="skill-icon python-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SiFastapi className="skill-icon fastapi-icon" />
                </motion.div>
                <motion.div 
                  className="skill-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SiMongodb className="skill-icon mongodb-icon" />
                </motion.div>
                              <motion.div
                                className="skill-item"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <SiOpenai className="skill-icon openai-icon" />
                              </motion.div>
                              <motion.div
                                className="skill-item"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <FaGithub className="skill-icon github-icon" />
                              </motion.div>
                              <motion.div
                                className="skill-item"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <SiNotion className="skill-icon notion-icon" />
                              </motion.div>
                              <motion.div
                                className="skill-item"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <FaDiscord className="skill-icon discord-icon" />
                              </motion.div>
                            </motion.div>
            </div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                            {/* 미모티콘 이미지 */}
                            <motion.div
                              className="mimoticon-container"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <img
                                src={mimoticonImage}
                                alt="미모티콘"
                                className="mimoticon-image"
                              />
                            </motion.div>

                            {/* 해시태그 한 줄 */}
                            <motion.div
                              className="hashtags-row"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <motion.span
                                className="hashtag"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                #협력과_소통
                              </motion.span>
                              <motion.span
                                className="hashtag"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                #사용자_경험
                              </motion.span>
                              <motion.span
                                className="hashtag"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                #데이터_활용
                              </motion.span>
                              <motion.span
                                className="hashtag"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                #끊임없는_성장
                              </motion.span>
                            </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="career">
        <div className="career-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Career
          </motion.h2>
          <motion.div 
            className="timeline-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Timeline
          </motion.div>
          <motion.div 
            className="career-timeline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>한국타이어앤테크놀로지 R&D DX팀 인턴</h3>
                <p className="timeline-period">2025.09 - 현재</p>
                <p className="timeline-description">
                  R&D DX팀에서 인턴으로 근무하며 데이터 전처리와 문서 관리 자동화 관련 다양한 업무를 수행하고 있습니다.<br/>
                  사내 챗봇 고도화 작업을 통해 실무 경험을 쌓아가고 있습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>충남대학교 컴퓨터융합학부 학부연구생 인턴</h3>
                <p className="timeline-period">2025.03 - 2025.08</p>
                <p className="timeline-description">
                  데이터 네트워크 연구실에서 학부연구생으로 근무했습니다.<br/>
                  기존 라디오 아카이브 데이터를 활용한 라디오 다시듣기 웹사이트를 단독으로 개발하여 실무 프로젝트 경험을 쌓았습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>NHN 백엔드 아카데미</h3>
                <p className="timeline-period">2024.07 - 2024.12</p>
                <p className="timeline-description">
                  NHN 백엔드 아카데미에서 Spring Boot를 통한 전반적인 백엔드에 대해 학습했으며 이후 팀 프로젝트로 '도서 구매 웹사이트' 프로젝트를 진행했습니다.
                  Spring Boot 기반 백엔드 시스템 설계와 구현, 데이터베이스 모델링, REST API 개발을 담당했으며,
                  기능별 브랜치 전략과 코드 리뷰를 통한 협업 프로세스를 경험했으며, 우수상을 수상했습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>충남대학교 컴퓨터융합학부 부학생회장</h3>
                <p className="timeline-period">2024.01 - 2024.12</p>
                <p className="timeline-description">
                학부 학생회 부회장으로서 학생 자치와 학부 운영을 총괄했습니다.<br/>
학생 의견을 수렴해 학과와의 소통 창구 역할을 수행하고, 복지·학업 지원 개선안을 제안했습니다.
신입생 OT, MT, 체육대회, 엔지니어링 페어 등 주요 행사를 기획·운영하며 프로그램 구성과 예산 관리를 담당했습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>병역 복무 (KATUSA)</h3>
                <p className="timeline-period">2021.01 - 2022.07</p>
                <p className="timeline-description">
                  KATUSA로 복무하며 병장 계급으로 만기제대했습니다.<br/>
                  민간기업과의 통역 및 보급 업무를 수행했으며,
                  군 복무 기간 동안 책임감과 협업 능력을 기를 수 있었습니다.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>충남대학교 컴퓨터융합학부</h3>
                <p className="timeline-period">2020.03 - 2026.02 (졸업예정)</p>
                <p className="timeline-description">
                  컴퓨터융합학부에서 기본적인 프로그래밍 언어를 배우고, 알고리즘 문제를 풀며 개발 기초를 다진 후 다양한 팀 프로젝트와 졸업프로젝트를 통해 실무 중심의 개발 경험을 쌓았습니다.
                  협업 기반의 프로젝트 운영과 체계적인 개발 프로세스를 학습하며 종합적인 개발 역량을 향상시켰습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-content">
          <motion.div 
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Project</h2>
            <p>다양한 기술 스택을 활용하여 제작한 프로젝트들을 소개합니다.</p>
          </motion.div>
          

          <div className="projects-container">
            <motion.div 
              className="projects-grid"
              layout
              style={{ transform: `translateX(-${currentSlide * 400}px)` }}
            >
              {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img 
                     src={project.id === 1 ? kakaoImage : project.id === 2 ? heukbeakImage : project.id === 3 ? bgp1Image : project.id === 4 ? radio1Image : project.id === 5 ? chatbot1Image : project.id === 6 ? portfolioImage : kakaoImage}
                    alt={project.id === 1 ? "카카오톡 UI 클론 프로젝트" : project.id === 2 ? "NHN 아카데미 흑백문고 프로젝트" : project.id === 3 ? "LLM 기반 BGP 분석 챗봇 프로젝트" : project.id === 4 ? "라디오 다시듣기 사이트 프로젝트" : project.id === 5 ? "MCP/RAG 기반 챗봇 모음 사이트 프로젝트" : project.id === 6 ? "포트폴리오 웹사이트 프로젝트" : "프로젝트"} 
                    className="project-card-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub"
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
                          aria-label="Live Demo"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => {
                      let icon;
        switch(tech) {
          case "HTML":
            icon = <FaHtml5 className="tech-icon html-icon" />;
            break;
          case "CSS":
            icon = <FaCss3Alt className="tech-icon css-icon" />;
            break;
          case "JavaScript":
            icon = <FaJs className="tech-icon js-icon" />;
            break;
          case "React":
            icon = <FaReact className="tech-icon react-icon" />;
            break;
          case "Node.js":
            icon = <FaNodeJs className="tech-icon node-icon" />;
            break;
          case "Java":
            icon = <FaJava className="tech-icon java-icon" />;
            break;
          case "Spring Boot":
            icon = <SiSpring className="tech-icon spring-icon" />;
            break;
          case "MySQL":
            icon = <SiMysql className="tech-icon mysql-icon" />;
            break;
          case "Redis":
            icon = <SiRedis className="tech-icon redis-icon" />;
            break;
          case "Elasticsearch":
            icon = <SiElasticsearch className="tech-icon elasticsearch-icon" />;
            break;
          case "Python":
            icon = <FaPython className="tech-icon python-icon" />;
            break;
          case "OpenAI":
            icon = <SiOpenai className="tech-icon openai-icon" />;
            break;
          case "FastAPI":
            icon = <SiFastapi className="tech-icon fastapi-icon" />;
            break;
          case "MongoDB":
            icon = <SiMongodb className="tech-icon mongodb-icon" />;
            break;
          case "TailwindCSS":
            icon = <SiTailwindcss className="tech-icon tailwind-icon" />;
            break;
          case "Flask":
            icon = <SiFlask className="tech-icon flask-icon" />;
            break;
          case "SQLite":
            icon = <FaDatabase className="tech-icon sqlite-icon" />;
            break;
           case "MCP":
             icon = <FaNetworkWired className="tech-icon mcp-icon" />;
             break;
           case "GitHub Pages":
             icon = <FaGithub className="tech-icon github-icon" />;
             break;
           default:
             icon = <span>{tech}</span>;
        }
                      
                      return (
                        <motion.div 
                          key={techIndex} 
                          className="tech-tag-icon"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {icon}
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="project-actions">
                    <button 
                      className="detail-btn"
                      onClick={() => openProjectModal(project)}
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
              </motion.div>
              ))}
            </motion.div>
            
            <div className="projects-navigation">
              <button 
                className="nav-button" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ‹
              </button>
              <button 
                className="nav-button" 
                onClick={nextSlide}
                disabled={currentSlide >= Math.max(0, projects.length - 3)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 마무리 섹션 */}
      <section className="thank-you">
        <div className="thank-you-content">
          <motion.div
            className="thank-you-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Thank You
          </motion.div>
          
          <motion.div
            className="thank-you-message"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            새로운 시작의 여정에 함께해주셔서 감사합니다
          </motion.div>
          
          <motion.div
            className="thank-you-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            더 나은 개발자로 성장하기 위해 적극적으로 도전하고, 배워나가겠습니다.
            <br />
            기술과 사용자 경험의 조화를 통해 의미 있는 디지털 솔루션을 구현하겠습니다.
          </motion.div>
          

          <motion.div
            className="thank-you-footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Copyright 2025. 양준혁 all rights reserved.
            <br />
            React, JavaScript, Framer Motion 기반으로 제작된 사이트입니다.
          </motion.div>
        </div>
      </section>

      {/* 프로젝트 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <button className="close-btn" onClick={closeProjectModal}>
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                <div className="modal-image">
                   <img 
                     src={selectedProject.id === 1 ? kakaoImage : selectedProject.id === 2 ? heukbeakImage : selectedProject.id === 3 ? bgp1Image : selectedProject.id === 4 ? radio1Image : selectedProject.id === 5 ? chatbot1Image : selectedProject.id === 6 ? portfolioImage : kakaoImage} 
                     alt={selectedProject.id === 1 ? "카카오톡 UI 클론 프로젝트" : selectedProject.id === 2 ? "NHN 아카데미 흑백문고 프로젝트" : selectedProject.id === 3 ? "LLM 기반 BGP 분석 챗봇 프로젝트" : selectedProject.id === 4 ? "라디오 다시듣기 사이트 프로젝트" : selectedProject.id === 5 ? "MCP/RAG 기반 챗봇 모음 사이트 프로젝트" : selectedProject.id === 6 ? "포트폴리오 웹사이트 프로젝트" : "프로젝트"} 
                     className="project-screenshot"
                   />
                </div>
                
                <div className="modal-info">
                  {selectedProject.id === 1 && (
                    <>
                      <div className="project-summary">
                        <h3>📌 프로젝트 개요</h3>
                        <ul>
                          <li><strong>프로젝트명:</strong> 카카오톡 메인 UI 클론</li>
                          <li><strong>개발 기간:</strong> 2023 - 약 2주</li>
                          <li><strong>참여 인원:</strong> 개인 (1인 개발)</li>
                          <li><strong>기술 스택:</strong> HTML5, CSS3</li>
                          <li><strong>형태:</strong> 정적 웹페이지 (JS 없이 순수 프론트엔드)</li>
                        </ul>
                      </div>

                      <div className="project-features">
                        <h3>✨ 주요 기능 및 특징</h3>
                        <ul>
                          <li>📱 카카오톡 메인 화면 구조 구현 (친구목록 / 채팅목록 / 설정화면 / 하단 탭바 등)</li>
                          <li>🖼 CSS <code>transition</code>과 <code>@keyframes</code>를 활용한 탭 전환 애니메이션</li>
                          <li>💬 자바스크립트 없이 <strong>CSS 상태 조합</strong>으로 읽지 않은 채팅 배지 및 상태 표현</li>
                          <li>📏 반응형 레이아웃 (모바일 중심 360~430px → 태블릿 768px 확장)</li>
                          <li>💡 나만의 디자인 적용 — 부드러운 컬러톤, 카드형 리스트, 가독성 개선</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {selectedProject.id === 2 && (
                    <>
                      <div className="project-summary">
                        <h3>📌 프로젝트 개요</h3>
                        <ul>
                          <li><strong>프로젝트명:</strong> NHN 아카데미 흑백문고</li>
                          <li><strong>개발 기간: </strong> 2024 (약 6개월)</li>
                          <li><strong>참여 인원:</strong> 팀 프로젝트 (8명)</li>
                          <li><strong>기술 스택:</strong> Java, Spring Boot, MySQL, Redis, Elasticsearch</li>
                          <li><strong>형태:</strong> 마이크로서비스 아키텍처 기반 온라인 서점</li>
                        </ul>
                      </div>

                      <div className="project-features">
                        <h3>✨ 주요 기능 및 특징</h3>
                        <ul>
                          <li>📚 도서 검색 및 주문 시스템 구현</li>
                          <li>🏗️ Spring Boot 기반 마이크로서비스 아키텍처 구축</li>
                          <li>🔍 Elasticsearch를 활용한 고성능 도서 검색 기능</li>
                          <li>💾 Redis 캐싱으로 응답 속도 최적화</li>
                          <li>🔐 Spring Security 기반 인증/인가 시스템</li>
                          <li>📊 데이터베이스 모델링 및 REST API 개발</li>
                          <li>🤝 Git 브랜치 전략과 코드 리뷰를 통한 협업 프로세스</li>
                        </ul>
                      </div>
                    </>
                  )}

                  <div className="project-tech">
                    <div className="tech-description">
                      {selectedProject.id === 1 && (
                        <>
                        <h3>🧩 사용 기술 및 구조</h3>
                          <p>
                            <strong>HTML5</strong>에서는 시맨틱 마크업 (<code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>)을 활용하여 구조를 설계했고, 
                            접근성 속성 (<code>aria-label</code>, <code>aria-current</code>)을 적용하여 사용자 경험을 개선했습니다.
                          </p>
                          <p>
                            <strong>CSS3</strong>는 Flexbox와 Grid 레이아웃을 혼합 사용하여 반응형 디자인을 구현했으며, 
                            BEM 네이밍 규칙으로 구조적 스타일링을 진행했습니다. 
                            CSS 변수를 통해 색상, 간격, 라운드 값을 체계적으로 관리하고, 
                            <code>transition</code>과 <code>@keyframes</code>를 활용하여 부드러운 인터랙션을 구현했습니다.
                          </p>
                          <p>
                            <strong>디자인 개선</strong> 측면에서는 기존 노란 메인 컬러를 부드러운 중간톤으로 재구성하여 시각적 피로도를 줄였고, 
                            리스트 간격, 폰트 굵기, 라운드 값을 조정하여 가독성을 향상시켰습니다. 
                            또한 SVG 인라인 아이콘을 활용하여 상태 전환을 자연스럽게 표현했습니다.
                          </p>
                        </>
                      )}

                      {selectedProject.id === 2 && (
                        <>
                        <h3>🧩 사용 기술 및 구조</h3>
                          <p>
                            <strong>Java 21 LTS</strong>와 <strong>Spring Boot 3.3.x</strong>를 기반으로 마이크로서비스 아키텍처를 구축했습니다. 
                            Spring Cloud Gateway를 통한 API 게이트웨이, Eureka를 활용한 서비스 디스커버리, 
                            Spring Cloud Config로 설정 중앙화를 구현하여 확장 가능한 시스템을 설계했습니다.
                          </p>
                          <p>
                            <strong>데이터베이스</strong>는 MySQL 8.x를 메인 DB로 사용하고, Redis를 캐싱 레이어로 활용했습니다. 
                            <strong>Elasticsearch 7.x</strong>를 통한 전문 검색 기능으로 도서 검색 성능을 최적화했고, 
                            JPA Query를 활용하여 효율적인 데이터 접근을 구현했습니다.
                          </p>
                          <p>
                            <strong>개발 프로세스</strong>에서는 GitHub Actions를 통한 CI/CD 파이프라인을 구축하고, 
                            SonarQube를 활용하여 코드 품질을 관리했습니다. 
                            Docker와 NHN Container Registry를 통한 컨테이너화로 배포 자동화를 실현했습니다.
                          </p>
                        </>
                      )}

                    </div>
                  </div>

                  {selectedProject.id === 1 && (
                    <>
                      <div className="project-structure">
                        <h3>🧱 폴더 구조</h3>
                        <pre><code>{
`/css           # 스타일 시트
index.html     # 메인 홈 (탭바 포함)
friends.html   # 친구 목록
chats.html     # 채팅 목록
chat.html      # 채팅 상세
find.html      # 친구/채팅 검색
more.html      # 더보기 화면
setting.html   # 설정 화면
/assets        # 아이콘 및 아바타 이미지`}
                        </code></pre>
                      </div>

                      <div className="project-troubleshooting">
                        <h3>🧠 트러블슈팅</h3>
                        <ul>
                          <li><strong>문제:</strong> iOS Safari에서 탭바 위치 흔들림<br/>
                              <strong>해결:</strong> <code>position: sticky</code>로 대체 및 안전영역 padding 추가</li>
                          <li><strong>문제:</strong> 긴 메시지 말줄임 처리 깨짐<br/>
                              <strong>해결:</strong> <code>line-clamp</code> + <code>overflow:hidden</code> 조합</li>
                        </ul>
                      </div>

                      <div className="project-insights">
                        <h3>🪄 느낀 점</h3>
                        <ul>
                          <li><strong>기본기 강화:</strong> HTML/CSS만으로도 충분히 인터랙션 구현 가능</li>
                          <li><strong>디자인 시스템 이해:</strong> 변수 기반 설계로 일관성과 유지보수성 향상</li>
                          <li><strong>접근성 설계의 중요성:</strong> 시맨틱 구조를 초기에 잡으면 수정 비용이 적음</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>🔍 개선 및 다음 목표</h3>
                        <ul>
                          <li>JavaScript 도입 — 탭 라우팅, 검색, 상태 저장 기능 추가</li>
                          <li>React / Web Components 기반 컴포넌트화</li>
                          <li>Playwright 테스트를 통한 시각 회귀 및 접근성 자동화</li>
                        </ul>
                      </div>

                      <div className="project-execution">
                        <h3>💾 실행 방법</h3>
                        <ol>
                          <li>Live Demo 버튼을 클릭해 프로젝트 실행</li>
                          <li>전체 화면 시 "Your Screen is Too Big!!" 문구가 뜨면 화면을 가로로 줄이면 로그인 화면 등장</li>
                        </ol>
                      </div>
                    </>
                  )}

                  {selectedProject.id === 2 && (
                    <>
                      <div className="project-structure">
                        <h3>🏗️ 시스템 아키텍처</h3>
                        <pre><code>{
`heukbaekbook-shop        # 상품/주문 서비스
heukbaekbook-auth         # 인증/인가 서비스  
heukbaekbook-frontend     # 프론트엔드
heukbaekbook-gateway      # API 게이트웨이
heukbaekbook-eureka       # 서비스 디스커버리
heukbaekbook-rabbitmq     # 메시지 큐
heukbaekbook-batch        # 배치 처리`}
                        </code></pre>
                      </div>

                      <div className="project-troubleshooting">
                        <h3>🧠 트러블슈팅</h3>
                        <ul>
                          <li><strong>문제:</strong> 마이크로서비스 간 통신 지연<br/>
                              <strong>해결:</strong> OpenFeign 클라이언트 최적화 및 연결 풀 설정</li>
                          <li><strong>문제:</strong> Elasticsearch 검색 성능 저하<br/>
                              <strong>해결:</strong> 인덱스 최적화 및 검색 쿼리 튜닝</li>
                          <li><strong>문제:</strong> Redis 캐시 일관성 문제<br/>
                              <strong>해결:</strong> TTL 설정 및 캐시 무효화 전략 수립</li>
                        </ul>
                      </div>

                      <div className="project-insights">
                        <h3>🪄 느낀 점</h3>
                        <ul>
                          <li><strong>팀 협업의 중요성:</strong> Git 브랜치 전략과 코드 리뷰를 통한 체계적 개발</li>
                          <li><strong>마이크로서비스 이해:</strong> 서비스 분리와 API 설계의 복잡성과 장점 경험</li>
                          <li><strong>성능 최적화:</strong> 캐싱과 검색엔진을 통한 시스템 성능 향상 방법 학습</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>🔍 개선 및 다음 목표</h3>
                        <ul>
                          <li>모니터링 시스템 구축 (Prometheus + Grafana)</li>
                          <li>Kubernetes 기반 컨테이너 오케스트레이션</li>
                          <li>API 문서화 자동화 (Swagger/OpenAPI)</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>💾 프로젝트 정보</h3>
                        <ul>
                          <li>수상 : NHN 백엔드 아카데미 우수상</li>
                          <li>기여도 : 쿠폰 시스템 CRUD API 개발 및 프론트엔드 연동</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {selectedProject.id === 3 && (
                    <>
                      <div className="project-summary">
                        <h3>📌 프로젝트 개요</h3>
                        <ul>
                          <li><strong>프로젝트명:</strong> LLM 기반 BGP 분석 챗봇</li>
                          <li><strong>개발 기간:</strong> 2024 - 현재 (졸업프로젝트)</li>
                          <li><strong>참여 인원:</strong> 팀 프로젝트 (3명)</li>
                          <li><strong>기술 스택:</strong> Python, OpenAI, FastAPI, MongoDB, React, JavaScript</li>
                          <li><strong>형태:</strong> AI 챗봇 웹 애플리케이션</li>
                        </ul>
                      </div>

                      <div className="project-features">
                        <h3>✨ 주요 기능 및 특징</h3>
                        <ul>
                          <li>🤖 LLM을 활용한 BGP 데이터 분석 챗봇</li>
                          <li>📊 BGP 라우팅 정보 실시간 분석</li>
                          <li>💬 자연어 질의응답 시스템</li>
                          <li>🔍 네트워크 상태 진단 및 추천</li>
                          <li>📈 BGP 경로 최적화 제안</li>
                          <li>🌐 웹 기반 사용자 인터페이스</li>
                        </ul>
                      </div>

                      <div className="project-tech">
                        
                        <div className="tech-description">
                        <h3>🧩 사용 기술 및 구조</h3>
                          <p>
                            <strong>Python</strong>을 기반으로 FastAPI 프레임워크를 사용하여 RESTful API를 구축했습니다. 
                            OpenAI의 GPT 모델을 활용하여 BGP 데이터 분석을 위한 자연어 처리 기능을 구현했고, 
                            MongoDB를 통해 대용량 네트워크 데이터를 효율적으로 저장 및 관리합니다.
                          </p>
                          <p>
                            <strong>React</strong>와 <strong>JavaScript</strong>를 활용한 프론트엔드에서는 실시간 챗봇 인터페이스를 구현했습니다. 
                            사용자가 자연어로 BGP 관련 질문을 입력하면, 백엔드에서 데이터를 분석하고 
                            LLM을 통해 이해하기 쉬운 답변을 제공하는 시스템을 개발했습니다.
                          </p>
                          <p>
                            <strong>BGP 분석</strong> 기능은 네트워크 라우팅 정보를 실시간으로 모니터링하고, 
                            경로 최적화 및 네트워크 장애 진단을 위한 인사이트를 제공합니다. 
                            이를 통해 네트워크 관리자가 복잡한 BGP 설정을 더 쉽게 이해하고 관리할 수 있도록 지원합니다.
                          </p>
                        </div>
                      </div>

                      <div className="project-structure">
                        <h3>🏗️ 시스템 아키텍처</h3>
                        <pre><code>{
`frontend/         # React 기반 챗봇 UI
backend/          # FastAPI 기반 API 서버
  ├── api/        # REST API 엔드포인트
  ├── models/     # 데이터 모델
  ├── services/   # BGP 분석 서비스
  └── llm/        # OpenAI 연동 모듈
database/         # MongoDB 데이터베이스
docs/            # 프로젝트 문서`}
                        </code></pre>
                      </div>

                      <div className="project-troubleshooting">
                        <h3>🧠 트러블슈팅</h3>
                        <ul>
                          <li><strong>문제:</strong> BGP 데이터 파싱 성능 저하<br/>
                              <strong>해결:</strong> 비동기 처리 및 데이터베이스 인덱싱 최적화</li>
                          <li><strong>문제:</strong> LLM 응답 지연<br/>
                              <strong>해결:</strong> 응답 캐싱 및 스트리밍 응답 구현</li>
                          <li><strong>문제:</strong> 대용량 BGP 데이터 처리<br/>
                              <strong>해결:</strong> MongoDB 집계 파이프라인 및 페이지네이션 적용</li>
                        </ul>
                      </div>

                      <div className="project-insights">
                        <h3>🪄 느낀 점</h3>
                        <ul>
                          <li><strong>AI 활용의 중요성:</strong> LLM을 통한 복잡한 기술 데이터의 사용자 친화적 해석</li>
                          <li><strong>네트워크 지식:</strong> BGP 프로토콜에 대한 깊이 있는 이해와 실무 적용</li>
                          <li><strong>풀스택 개발:</strong> 프론트엔드부터 백엔드, AI까지 종합적인 시스템 구축</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>🔍 개선 및 다음 목표</h3>
                        <ul>
                          <li>실시간 BGP 데이터 수집 및 분석 기능 강화</li>
                          <li>다양한 네트워크 프로토콜 지원 확대</li>
                          <li>시각화 대시보드 및 그래프 기능 추가</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>💾 프로젝트 정보</h3>
                        <ul>
                          <li>개발 상태: 진행 중 (졸업프로젝트)</li>
                          <li>기여도: UI/UX 디자인, 프론트엔드 개발 및 파이프라인 설계</li>
                          <li>특징: LLM과 네트워크 분석의 융합</li>
                        </ul>
                      </div>

                      <div className="project-gallery">
                        <h3>📸 프로젝트 갤러리</h3>
                        <div className="gallery-images">
                          <img 
                            src={bgp1Image} 
                            alt="BGP 분석 시스템 메인 화면" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(bgp1Image)}
                          />
                          <img 
                            src={bgp2Image} 
                            alt="BGP 데이터 시각화" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(bgp2Image)}
                          />
                          <img 
                            src={bgp3Image} 
                            alt="BGP 챗봇 인터페이스" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(bgp3Image)}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {selectedProject.id === 4 && (
                    <>
                      <div className="project-summary">
                        <h3>📌 프로젝트 개요</h3>
                        <ul>
                          <li><strong>프로젝트명:</strong> FM Radio Script Curation Platform</li>
                          <li><strong>개발 기간:</strong> 2024 (약 5개월)</li>
                          <li><strong>참여 인원:</strong> 개인 프로젝트</li>
                          <li><strong>기술 스택:</strong> React, Python, Flask, MongoDB, OpenAI, TailwindCSS</li>
                          <li><strong>형태:</strong> AI 기반 라디오 방송 디지털 아카이브 플랫폼</li>
                        </ul>
                      </div>

                      <div className="project-features">
                        <h3>✨ 주요 기능 및 특징</h3>
                        <ul>
                          <li>🎧 AI 음성 인식: OpenAI Whisper를 활용한 고품질 음성-텍스트 변환</li>
                          <li>🤖 지능형 조각화: GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅</li>
                          <li>🎵 음악 메타데이터: Spotify API 연동으로 음악 정보 자동 수집</li>
                          <li>🎬 영화 정보: OMDb API를 통한 영화 메타데이터 제공</li>
                          <li>🔍 고급 검색: 날짜, 키워드, 카테고리별 다중 필터링</li>
                          <li>⚡ 실시간 재생: 웹 기반 오디오 플레이어로 구간별 재생</li>
                          <li>📱 반응형 디자인: 모든 디바이스에서 최적화된 사용자 경험</li>
                        </ul>
                      </div>

                      
                      <div className="project-tech">
                        
                        <div className="tech-description">
                        <h3>🧩 사용 기술 및 구조</h3>
                          <p>
                            <strong>React</strong>를 메인 UI 프레임워크로 사용하여 SPA(Single Page Application)을 구현했습니다. 
                            React Router DOM으로 페이지 라우팅을 관리하고, TailwindCSS로 반응형 디자인을 적용했습니다.
                          </p>
                          <p>
                            <strong>Python Flask</strong>를 백엔드 프레임워크로 사용하여 REST API를 구축했습니다. 
                            Flask-CORS로 크로스 오리진 요청을 처리하고, MongoDB와 PyMongo를 통해 데이터를 저장 및 관리합니다.
                          </p>
                          <p>
                            <strong>AI/ML 기술</strong>로는 OpenAI Whisper를 활용해 음성을 텍스트로 변환하고, 
                            GPT-4o-mini가 방송 내용을 의미 단위로 자동 분할 및 태깅합니다. 
                            OpenAI Python SDK를 통해 GPT API를 호출하여 지능형 조각화를 구현했습니다.
                          </p>
                          <p>
                            <strong>외부 API 연동</strong>으로 Spotify API를 통해 음악 메타데이터를 자동 수집하고, 
                            OMDb API로 영화 정보를 검색합니다. Axios를 사용해 HTTP 요청을 처리하고, 
                            JWT와 Bcrypt로 사용자 인증 및 보안을 구현했습니다.
                          </p>
                          <p>
                            <strong>배포 및 개발</strong>은 GitHub Actions를 통한 CI/CD 자동화와 
                            GitHub Pages를 통한 정적 사이트 호스팅을 사용합니다. 
                            PostCSS와 Autoprefixer로 CSS 후처리를 진행합니다.
                          </p>
                        </div>
                      </div>

                      <div className="project-structure">
                        <h3>🏗️ 프로젝트 구조</h3>
                        <pre><code>{
`podcast/
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
│   └── utils/         # 유틸리티 함수`}
                        </code></pre>
                      </div>

                      <div className="project-troubleshooting">
                        <h3>🧠 트러블슈팅</h3>
                        <ul>
                          <li><strong>문제:</strong> 긴 라디오 방송 파일의 Whisper 처리 시간<br/>
                              <strong>해결:</strong> 파일 분할 처리 및 배치 작업으로 처리 시간 단축</li>
                          <li><strong>문제:</strong> GPT 조각화 시 컨텍스트 손실<br/>
                              <strong>해결:</strong> 적절한 청크 크기 설정 및 오버랩 처리로 연속성 보장</li>
                          <li><strong>문제:</strong> Spotify API 호출 제한<br/>
                              <strong>해결:</strong> 캐싱 시스템 도입 및 API 호출 최적화</li>
                        </ul>
                      </div>

                      <div className="project-insights">
                        <h3>🪄 느낀 점</h3>
                        <ul>
                          <li><strong>AI 활용의 혁신성:</strong> Whisper와 GPT를 조합하여 라디오 방송을 완전히 새로운 형태로 재구성</li>
                          <li><strong>사용자 중심 설계:</strong> 긴 콘텐츠의 피로감을 해결하는 숏폼 방식의 접근이 사용자 만족도 향상</li>
                          <li><strong>메타데이터의 가치:</strong> 음악, 영화 정보 자동 수집을 통한 콘텐츠의 부가가치 창출</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>🔍 개선 및 다음 목표</h3>
                        <ul>
                          <li>더 많은 라디오 방송 데이터 확장 (다른 연도, 방송사)</li>
                          <li>실시간 방송 처리 및 자동 아카이빙 시스템</li>
                          <li>사용자 맞춤 추천 알고리즘 개발</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>💾 프로젝트 정보</h3>
                        <ul>
                          <li>개발 상태: 완료</li>
                          <li>기여도: 전체 시스템 설계 및 구현</li>
                          <li>특징: 웹 기반 라디오 방송 플랫폼</li>
                        </ul>
                      </div>

                      <div className="project-gallery">
                        <h3>📸 프로젝트 갤러리</h3>
                        <div className="gallery-images">
                          <img 
                            src={radio1Image} 
                            alt="라디오 사이트 메인 화면" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(radio1Image)}
                          />
                          <img 
                            src={radio2Image} 
                            alt="라디오 방송 목록" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(radio2Image)}
                          />
                          <img 
                            src={radio3Image} 
                            alt="오디오 플레이어" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(radio3Image)}
                          />
                          <img 
                            src={radio4Image} 
                            alt="검색 및 편성표" 
                            className="gallery-image" 
                            onClick={() => setSelectedImage(radio4Image)}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {selectedProject.id === 5 && (
                    <>
                      <div className="project-summary">
                        <h3>📌 프로젝트 개요</h3>
                        <ul>
                          <li><strong>프로젝트명:</strong> MCP 기반 지능형 챗봇 통합 플랫폼</li>
                          <li><strong>개발 기간:</strong> 2024 (약 4개월)</li>
                          <li><strong>참여 인원:</strong> 팀 프로젝트 (3명)</li>
                          <li><strong>기술 스택:</strong> React, FastAPI, OpenAI, SQLite, FAISS, MCP</li>
                          <li><strong>형태:</strong> 사용자 참여형 AI 챗봇 플랫폼</li>
                        </ul>
                      </div>

                      <div className="project-features">
                        <h3>✨ 주요 기능 및 특징</h3>
                        <ul>
                          <li>🤖 <strong>지능형 챗봇 추천:</strong> 사용자 질문 의도를 파악하여 최적의 챗봇을 자동 매칭</li>
                          <li>👥 <strong>사용자 참여형 플랫폼:</strong> 학내 구성원이 직접 챗봇을 생성하고 공유하는 시스템</li>
                          <li>🔗 <strong>MCP 프로토콜 연동:</strong> 다양한 정보 시스템과의 표준화된 연결</li>
                          <li>📚 <strong>다양한 정보 제공:</strong> 공식 문서부터 실생활 정보(맛집, 꿀팁 등)까지 폭넓은 커버리지</li>
                          <li>🎨 <strong>직관적 UI/UX:</strong> 챗봇 등록, 탐색, 채팅, 슈퍼차차 채팅 등 핵심 기능 구현</li>
                          <li>🔧 <strong>확장 가능한 아키텍처:</strong> 기존 차차 시스템과의 연동 및 부서별 맞춤형 챗봇 운영</li>
                        </ul>
                      </div>

                      <div className="project-tech">
                        
                        <div className="tech-description">
                        <h3>🧩 사용 기술 및 구조</h3>
                          <p>
                            <strong>React</strong>를 프론트엔드 프레임워크로 사용하여 사용자 친화적인 인터페이스를 구현했습니다. 
                            SPA 구조로 빠른 사용자 경험을 제공하며, TailwindCSS를 활용한 반응형 디자인을 적용했습니다.
                          </p>
                          <p>
                            <strong>FastAPI</strong>를 백엔드 프레임워크로 사용하여 RESTful API를 구축했습니다. 
                            비동기 처리를 통한 높은 성능과 자동 API 문서화(Swagger) 기능을 제공합니다.
                          </p>
                          <p>
                            <strong>OpenAI GPT</strong>를 핵심 LLM으로 활용하여 고품질의 AI 응답을 생성합니다. 
                            MCP(Model Context Protocol)를 통해 다양한 AI 모델과의 표준화된 통신을 구현했습니다.
                          </p>
                          <p>
                            <strong>SQLite/FAISS</strong>를 데이터베이스로 사용하여 챗봇 정보와 벡터 임베딩을 효율적으로 저장 및 검색합니다. 
                            FAISS를 통한 고속 유사도 검색으로 사용자 의도 파악의 정확도를 높였습니다.
                          </p>
                        </div>
                      </div>

                      <div className="project-structure">
                        <h3>🏗️ 시스템 아키텍처</h3>
                        <pre><code>{
`Client → Browser → GitHub Pages (React Build Files)
                ↓
                Render Platform
                ├── FastAPI ←→ SQLite
                ├── FastAPI ←→ MCP Server
                ├── FastAPI ←→ OpenAI GPT
                └── MCP Server ←→ OpenAI MCP Client

배포 환경:
- Frontend: GitHub Pages (https://bgp-llama.github.io/llm-contest-fe)
- Backend: Render (https://llm-contest.onrender.com)
- API Docs: Swagger (https://llm-contest.onrender.com/docs)`}
                        </code></pre>
                      </div>

                      <div className="project-troubleshooting">
                        <h3>🧠 트러블슈팅</h3>
                        <ul>
                          <li><strong>문제:</strong> 사용자 의도 파악의 정확도 부족<br/>
                              <strong>해결:</strong> FAISS 벡터 검색과 MCP 프로토콜을 활용한 지능형 매칭 시스템 구축</li>
                          <li><strong>문제:</strong> 여러 챗봇 간 일관된 사용자 경험 제공<br/>
                              <strong>해결:</strong> 통합 인터페이스와 자동 챗봇 추천 시스템으로 단일 채팅창 경험 구현</li>
                          <li><strong>문제:</strong> 기존 시스템과의 연동 및 확장성<br/>
                              <strong>해결:</strong> MCP 표준 프로토콜을 통한 모듈화된 아키텍처 설계</li>
                        </ul>
                      </div>

                      <div className="project-insights">
                        <h3>🪄 창의성 및 혁신성</h3>
                        <ul>
                          <li><strong>사용자 참여형 플랫폼:</strong> 기존 단일 정보 제공에서 벗어나 학내 구성원 모두가 정보 생산자가 되는 혁신적 모델</li>
                          <li><strong>정보 통합의 해결책:</strong> 정보의 파편화와 사각지대 문제를 해결하는 통합 정보 경험 제공</li>
                          <li><strong>지능형 추천 시스템:</strong> 사용자가 어떤 챗봇에게 질문할지 고민할 필요 없이 자동 매칭</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>🔍 학내 사업 연계 가능성</h3>
                        <ul>
                          <li><strong>기존 차차 시스템 확장:</strong> 현재 운영 중인 학내 챗봇과 연동하여 상호보완적 관계 구축</li>
                          <li><strong>부서별 맞춤형 챗봇:</strong> 도서관, IT헬프데스크, 장학팀 등 각 부서의 업무 특화 챗봇 운영</li>
                          <li><strong>학생 생활 밀착형 서비스:</strong> 카카오톡 연동을 통한 시설물 고장 접수, 식단 안내, 캠퍼스 길찾기 등</li>
                          <li><strong>추가 개발 계획:</strong> 부적절한 정보 방지 기능, 모델 종류 확장, 카카오톡 연동 등</li>
                        </ul>
                      </div>

                      <div className="project-next">
                        <h3>💾 프로젝트 정보</h3>
                        <ul>
                          <li><strong>개발 상태:</strong> 핵심 기능 구현 완료, 지속적 확장 중</li>
                          <li><strong>기여도:</strong> 전체 시스템 아키텍처 설계 및 프론트엔드 개발</li>
                          <li><strong>특징:</strong> 체계적인 시스템 설계와 구체적인 UI/UX 시각화</li>
                          <li><strong>배포:</strong> 프론트엔드(GitHub Pages), 백엔드(Render), API 문서(Swagger) 완비</li>
                          <li><strong>수상:</strong> 생성형 인공지능 챌린지 은상 수상</li>
                        </ul>
                      </div>
                     </>
                   )}

                   {selectedProject.id === 6 && (
                     <>
                       <div className="project-summary">
                         <h3>📌 프로젝트 개요</h3>
                         <ul>
                           <li><strong>프로젝트명:</strong> 포트폴리오 웹사이트</li>
                           <li><strong>개발 기간:</strong> 2024 - 현재</li>
                           <li><strong>참여 인원:</strong> 개인 프로젝트</li>
                           <li><strong>기술 스택:</strong> React, JavaScript, Framer Motion, CSS3, GitHub Pages</li>
                           <li><strong>형태:</strong> 반응형 포트폴리오 웹사이트</li>
                         </ul>
                       </div>

                       <div className="project-features">
                         <h3>✨ 주요 기능 및 특징</h3>
                         <ul>
                           <li>🎨 <strong>인터랙티브 애니메이션:</strong> Framer Motion을 활용한 부드러운 페이지 전환 및 요소 애니메이션</li>
                           <li>📱 <strong>완전 반응형 디자인:</strong> 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 사용자 경험</li>
                           <li>🎯 <strong>프로젝트 갤러리:</strong> 6개 주요 프로젝트의 상세 정보와 이미지 갤러리 제공</li>
                           <li>💼 <strong>경력 타임라인:</strong> 시각적으로 구성된 경력 및 학력 이력</li>
                           <li>🎭 <strong>인트로 애니메이션:</strong> 페이지 로딩 시 감성적인 자기소개 애니메이션</li>
                           <li>🌙 <strong>다크 테마:</strong> 현대적이고 세련된 다크 테마 디자인</li>
                           <li>⚡ <strong>빠른 로딩:</strong> 최적화된 빌드와 이미지 압축으로 빠른 페이지 로딩</li>
                         </ul>
                       </div>

                       <div className="project-tech">
                         <div className="tech-description">
                           <h3>🧩 사용 기술 및 구조</h3>
                           <p>
                             <strong>React 19.2.0</strong>을 기반으로 한 현대적인 SPA(Single Page Application) 구조로 구현했습니다. 
                             함수형 컴포넌트와 React Hooks를 활용하여 상태 관리를 효율적으로 처리했습니다.
                           </p>
                           <p>
                             <strong>Framer Motion 12.23.24</strong>를 통해 페이지 전환, 요소 애니메이션, 스크롤 기반 인터랙션을 구현했습니다. 
                             AnimatePresence를 활용한 모달 애니메이션과 whileInView를 통한 스크롤 애니메이션으로 사용자 경험을 향상시켰습니다.
                           </p>
                           <p>
                             <strong>CSS3</strong>와 <strong>TailwindCSS</strong>를 조합하여 반응형 디자인을 구현했습니다. 
                             CSS Grid와 Flexbox를 활용한 레이아웃, CSS 변수를 통한 테마 관리, 
                             미디어 쿼리를 통한 반응형 브레이크포인트 설정을 적용했습니다.
                           </p>
                           <p>
                             <strong>GitHub Pages</strong>를 통한 정적 사이트 호스팅과 <strong>gh-pages</strong> 패키지를 활용한 
                             자동화된 배포 시스템을 구축했습니다. CI/CD 파이프라인으로 코드 변경 시 자동 배포가 가능합니다.
                           </p>
                         </div>
                       </div>

                       <div className="project-structure">
                         <h3>🏗️ 프로젝트 구조</h3>
                         <pre><code>{`src/
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
└── gh-pages 브랜치     # GitHub Pages 배포 브랜치`}</code></pre>
                       </div>

                       <div className="project-troubleshooting">
                         <h3>🧠 트러블슈팅</h3>
                         <ul>
                           <li><strong>문제:</strong> Framer Motion 애니메이션 성능 최적화<br/>
                               <strong>해결:</strong> transform과 opacity 속성만 애니메이션하고, will-change CSS 속성 적용</li>
                           <li><strong>문제:</strong> 이미지 로딩 최적화<br/>
                               <strong>해결:</strong> 이미지 압축 및 lazy loading 구현으로 초기 로딩 시간 단축</li>
                           <li><strong>문제:</strong> 모바일 터치 인터랙션<br/>
                               <strong>해결:</strong> 터치 이벤트 최적화 및 모바일 전용 인터랙션 패턴 적용</li>
                         </ul>
                       </div>

                       <div className="project-insights">
                         <h3>🪄 느낀 점</h3>
                         <ul>
                           <li><strong>애니메이션의 중요성:</strong> 적절한 애니메이션이 사용자 경험을 크게 향상시킨다는 것을 경험</li>
                           <li><strong>반응형 디자인의 복잡성:</strong> 다양한 디바이스에서의 일관된 경험 제공의 중요성</li>
                           <li><strong>성능 최적화:</strong> 사용자 경험과 성능 사이의 균형점을 찾는 것의 중요성</li>
                           <li><strong>자기 브랜딩:</strong> 포트폴리오를 통해 자신만의 독특한 개성과 스타일을 표현하는 방법 학습</li>
                         </ul>
                       </div>

                       <div className="project-next">
                         <h3>🔍 개선 및 다음 목표</h3>
                         <ul>
                           <li>PWA(Progressive Web App) 기능 추가로 모바일 앱 같은 경험 제공</li>
                           <li>다국어 지원 기능 추가</li>
                           <li>블로그 섹션 추가로 기술 글과 경험 공유</li>
                           <li>다크/라이트 테마 토글 기능 구현</li>
                           <li>SEO 최적화 및 메타 태그 개선</li>
                         </ul>
                       </div>

                       <div className="project-next">
                         <h3>💾 프로젝트 정보</h3>
                         <ul>
                           <li><strong>개발 상태:</strong> 지속적 업데이트 중</li>
                           <li><strong>기여도:</strong> 전체 설계 및 개발</li>
                           <li><strong>특징:</strong> 현대적인 웹 기술 스택과 사용자 경험 중심 설계</li>
                           <li><strong>배포:</strong> GitHub Pages 자동 배포</li>
                         </ul>
                       </div>
                     </>
                   )}
                   
                   <div className="modal-links">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                     {(selectedProject.id === 1 || selectedProject.id === 4 || selectedProject.id === 5 || selectedProject.id === 6) && selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 연락처 모달 */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
          >
            <motion.div 
              className="contact-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>연락처 정보</h3>
                <button className="close-btn" onClick={closeContactModal}>×</button>
              </div>
              <div className="modal-content">
                <div className="contact-item">
                  <FaGithub className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-label">GitHub</span>
                    <a href="https://github.com/banbakbulga" target="_blank" rel="noopener noreferrer">
                      github.com/banbakbulga
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FaEnvelope 
                      className="contact-icon" 
                      onClick={copyEmail} 
                      onMouseEnter={() => setShowEmailTooltip(true)}
                      onMouseLeave={() => setShowEmailTooltip(false)}
                      style={{ cursor: 'pointer' }} 
                    />
                    <AnimatePresence>
                      {showEmailTooltip && (
                        <motion.div
                          className="contact-tooltip email-tooltip"
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>junh9126@gmail.com</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">이메일</span>
                    <span className="contact-text">junh9126@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FaPhone 
                      className="contact-icon" 
                      onClick={copyPhone} 
                      onMouseEnter={() => setShowPhoneTooltip(true)}
                      onMouseLeave={() => setShowPhoneTooltip(false)}
                      style={{ cursor: 'pointer' }} 
                    />
                    <AnimatePresence>
                      {showPhoneTooltip && (
                        <motion.div
                          className="contact-tooltip phone-tooltip"
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>010-5766-1639</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">전화번호</span>
                    <span className="contact-text">010-5766-1639</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <motion.div
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-modal-close" onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}>
            ×
          </div>
          <motion.img
            src={selectedImage}
            alt="확대된 이미지"
            className="image-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* 복사 알림 팝업 */}
      <AnimatePresence>
        {copyNotification.show && (
          <motion.div
            className="copy-notification"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span>{copyNotification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 위로가기 버튼 */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V5M5 12L12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

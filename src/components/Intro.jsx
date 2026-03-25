import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaGithub, FaDocker, FaJava, FaDatabase, FaNetworkWired,
    FaHtml5, FaCss3Alt, FaJs, FaNpm, FaAws
} from 'react-icons/fa';
import {
    SiFastapi, SiMongodb, SiOpenai, SiPostgresql, SiElectron, SiFlutter,
    SiSpring, SiRedis, SiVite, SiTailwindcss, SiMysql, SiElasticsearch,
    SiTypescript, SiGraphql, SiFirebase, SiVercel, SiFlask
} from 'react-icons/si';

const techIcons = [
    { Icon: FaReact, color: "#61dafb" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: FaPython, color: "#3776ab" },
    { Icon: FaGithub, color: "#ffffff" },
    { Icon: FaDocker, color: "#2496ED" },
    { Icon: FaJava, color: "#007396" },
    { Icon: FaDatabase, color: "#f0db4f" },
    { Icon: SiFastapi, color: "#009688" },
    { Icon: SiMongodb, color: "#47a248" },
    { Icon: SiOpenai, color: "#412991" },
    { Icon: SiPostgresql, color: "#4169E1" },
    { Icon: SiElectron, color: "#47848F" },
    { Icon: SiFlutter, color: "#02569B" },
    { Icon: SiSpring, color: "#6db33f" },
    { Icon: SiRedis, color: "#dc382d" },
    { Icon: SiVite, color: "#646CFF" },
    { Icon: SiTailwindcss, color: "#06b6d4" },
    { Icon: SiMysql, color: "#4479a1" },
    { Icon: SiElasticsearch, color: "#005571" },
    { Icon: FaNetworkWired, color: "#61DAFB" },
    { Icon: FaHtml5, color: "#e34f26" },
    { Icon: FaCss3Alt, color: "#1572b6" },
    { Icon: FaJs, color: "#f7df1e" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiGraphql, color: "#E10098" },
    { Icon: SiFirebase, color: "#FFCA28" },
    { Icon: FaNpm, color: "#CB3837" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: SiVercel, color: "#ffffff" },
    { Icon: SiFlask, color: "#cccccc" },
];

// Generate non-overlapping scattered positions around center
const generatePositions = () => {
    const positions = [];
    const minDist = 80; // minimum distance between icon centers

    for (let i = 0; i < techIcons.length; i++) {
        let x, y, attempts = 0;
        do {
            const angle = Math.random() * Math.PI * 2;
            const radius = 200 + Math.random() * 500;
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            attempts++;
        } while (
            attempts < 200 &&
            positions.some(p => Math.hypot(p.x - x, p.y - y) < minDist)
        );
        positions.push({
            x,
            y,
            rotate: Math.random() * 360,
            scale: 0.7 + Math.random() * 0.5,
        });
    }
    return positions;
};

const scatteredPositions = generatePositions();

const Intro = ({ onComplete }) => {
    const [phase, setPhase] = useState('scatter'); // scatter -> gather -> text

    useEffect(() => {
        // Phase 1: Icons scattered and visible (0~1.2s)
        const gatherTimer = setTimeout(() => setPhase('gather'), 1200);
        // Phase 2: Icons gather to center (1.2~2.2s)
        const textTimer = setTimeout(() => setPhase('text'), 2200);

        return () => {
            clearTimeout(gatherTimer);
            clearTimeout(textTimer);
        };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center z-[9999] bg-gradient-to-br from-black via-bg-main to-bg-sub overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.2,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            {/* Tech Stack Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {techIcons.map(({ Icon, color }, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                            x: scatteredPositions[i].x * 2,
                            y: scatteredPositions[i].y * 2,
                            opacity: 0,
                            scale: 0,
                            rotate: scatteredPositions[i].rotate,
                        }}
                        animate={
                            phase === 'scatter'
                                ? {
                                    x: scatteredPositions[i].x,
                                    y: scatteredPositions[i].y,
                                    opacity: 0.85,
                                    scale: scatteredPositions[i].scale,
                                    rotate: scatteredPositions[i].rotate,
                                }
                                : phase === 'gather'
                                    ? {
                                        x: 0,
                                        y: 0,
                                        opacity: 0,
                                        scale: 0.2,
                                        rotate: 0,
                                    }
                                    : {
                                        x: 0,
                                        y: 0,
                                        opacity: 0,
                                        scale: 0,
                                    }
                        }
                        transition={
                            phase === 'scatter'
                                ? {
                                    duration: 0.6,
                                    delay: i * 0.04,
                                    ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
                                }
                                : {
                                    duration: 0.7,
                                    delay: i * 0.02,
                                    ease: [0.65, 0, 0.35, 1],
                                }
                        }
                    >
                        <Icon
                            style={{
                                color,
                                fontSize: '3rem',
                                filter: `drop-shadow(0 0 12px ${color}66)`,
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Center glow effect when gathering */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 120,
                    height: 120,
                    background: 'radial-gradient(circle, rgba(100,255,218,0.3) 0%, transparent 70%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                    phase === 'gather'
                        ? { opacity: 1, scale: 3 }
                        : phase === 'text'
                            ? { opacity: 0, scale: 5 }
                            : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Intro Text */}
            <AnimatePresence>
                {phase === 'text' && (
                    <motion.div
                        className="text-center z-10"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="text-4xl font-normal text-white mb-2 drop-shadow-md">
                            안녕하세요,
                            <motion.span
                                className="ml-2 bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                웹 개발자
                            </motion.span>
                        </div>
                        <motion.div
                            className="text-[5.5rem] font-extrabold text-white drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            onAnimationComplete={() => setTimeout(onComplete, 1000)}
                        >
                            <span className="bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent inline-block">
                                양준혁
                            </span>
                            <span className="text-white">입니다</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Intro;

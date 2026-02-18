import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <section className="bg-bg-main relative pt-24 pb-12 overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-[1200px] px-5 relative z-10">
                <motion.div
                    className="text-6xl font-bold mb-8 bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Thank You
                </motion.div>

                <motion.div
                    className="text-2xl font-medium text-text-main mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    새로운 시작의 여정에 함께해주셔서 감사합니다
                </motion.div>

                <motion.div
                    className="text-lg text-text-secondary leading-relaxed mb-16"
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
                    className="border-t border-border-main pt-8 text-sm text-text-light"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                >
                    Copyright 2025. 양준혁 all rights reserved.
                    <br />
                    <span className="mt-2 inline-block">React, JavaScript, Framer Motion 기반으로 제작된 사이트입니다.</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Footer;

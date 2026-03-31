import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[180px] h-[180px] rounded-full pointer-events-none z-[9999]"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
      }}
      animate={{
        x: mousePos.x - 90,
        y: mousePos.y - 90,
      }}
      transition={{
        type: 'tween',
        duration: 0.05,
        ease: 'linear',
      }}
    />
  );
};

export default CursorGlow;

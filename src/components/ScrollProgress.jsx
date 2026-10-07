import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C5A059] via-[#D8B772] to-[#9A7B38] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(197,160,89,0.6)]"
      aria-hidden="true"
    />
  );
}

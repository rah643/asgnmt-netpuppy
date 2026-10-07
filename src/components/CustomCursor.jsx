import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice, usePrefersReducedMotion } from '../hooks/useMediaQuery';

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'button', 'image'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onPointerOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, input, select, textarea, [role="button"]');
      const isImage = target.tagName === 'IMG' || target.closest('.cursor-image-hover');

      if (interactive) {
        setCursorState('button');
      } else if (isImage) {
        setCursorState('image');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onPointerOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onPointerOver);
    };
  }, [isTouch, reducedMotion, isVisible]);

  if (isTouch || reducedMotion || !isVisible) {
    return null;
  }

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      borderColor: 'rgba(197, 160, 89, 0.6)',
      backgroundColor: 'transparent',
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      borderColor: '#C5A059',
      backgroundColor: 'rgba(197, 160, 89, 0.15)',
    },
    image: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.8,
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 1,
      backgroundColor: '#C5A059',
    },
    button: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.6,
      backgroundColor: '#C5A059',
    },
    image: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5,
      backgroundColor: '#FFFFFF',
    }
  };

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C5A059] pointer-events-none z-50 transition-colors duration-150"
        animate={cursorState}
        variants={cursorVariants}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5
        }}
        aria-hidden="true"
      />
      {/* Inner trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50"
        animate={cursorState}
        variants={dotVariants}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.2
        }}
        aria-hidden="true"
      />
    </>
  );
}

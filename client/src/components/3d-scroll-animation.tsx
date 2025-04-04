import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  rotation?: boolean;
  scale?: boolean;
  threshold?: number;
  className?: string;
}

export const ScrollAnimation = ({
  children,
  direction = 'up',
  rotation = false,
  scale = false,
  threshold = 0.2,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  // Calculate transform values based on direction
  const xValues = {
    up: [0, 0],
    down: [0, 0],
    left: [25, 0],
    right: [-25, 0],
  };
  
  const yValues = {
    up: [25, 0],
    down: [-25, 0],
    left: [0, 0],
    right: [0, 0],
  };

  const x = useTransform(scrollYProgress, [0, 1], xValues[direction]);
  const y = useTransform(scrollYProgress, [0, 1], yValues[direction]);
  const rotate = useTransform(scrollYProgress, [0, 1], rotation ? [5, 0] : [0, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale ? [0.9, 1] : [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          x,
          y,
          rotate,
          scale: scaleValue,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
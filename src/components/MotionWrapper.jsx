import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import './MotionWrapper.css';

const MotionWrapper = ({
  children,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: 'easeOut' },
  whileHover,
  whileTap,
  draggable = false,
  className = '',
}) => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className={`motion-wrapper ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      drag={draggable}
      dragConstraints={constraintsRef}
      dragElastic={0.1}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 60px rgba(2, 79, 231, 0.3)',
        borderColor: '#024FE7'
      }}
      className={`animated-card ${className}`}
    >
      {children}
    </MotionWrapper>
  );
};

export const TiltCard = ({ children, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`tilt-card ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

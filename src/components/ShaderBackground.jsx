import { MeshGradient } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';

const ShaderBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #4B5563 0%, #6B7280 50%, #9CA3AF 100%)',
        opacity: 0.3,
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <MeshGradient
        colors={['#024FE7', '#012E8A', '#001B4D', '#0A1A5E', '#4B5563']}
        distortion={3.2}
        swirl={2.1}
        speed={0.8}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.9
        }}
      />
    </motion.div>
  );
};

export default ShaderBackground;

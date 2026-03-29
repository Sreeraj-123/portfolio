import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSquares = () => {
  const squares = Array.from({ length: 15 });
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
      {squares.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: `${Math.random() * 100}vh`,
            x: `${Math.random() * 100}vw`,
            opacity: Math.random() * 0.15 + 0.05,
            scale: Math.random() * 0.8 + 0.3,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            rotate: [null, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 40 + 30, /* Very slow drift */
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedSquares;

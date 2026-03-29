import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSquares = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    // Generate purely static initial positions to avoid hydration mismatch
    // (though less relevant for purely client-side Vite)
    const newSquares = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 100 + "vw",
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      scale: Math.random() * 0.5 + 0.5
    }));
    setSquares(newSquares);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      overflow: 'hidden',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      {squares.map((sq, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "100vh",
            x: sq.x,
            rotate: 0,
            scale: sq.scale
          }}
          animate={{
            opacity: [0, 0.2, 0],
            y: "-10vh",
            rotate: 360,
          }}
          transition={{
            duration: sq.duration,
            repeat: Infinity,
            delay: sq.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '10%'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedSquares;

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScroll = ({ children, speed = 20, direction = "left" }) => {
  return (
    <div style={{ overflow: "hidden", display: "flex", width: "100%", position: "relative" }}>
      <motion.div
        style={{ display: "flex", gap: "2rem", width: "max-content", paddingLeft: "1rem" }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {children}
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;

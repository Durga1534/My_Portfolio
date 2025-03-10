import { motion } from 'framer-motion';
import React from 'react';

const AnimateRocket = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-5, 5, -5],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      🚀
    </motion.div>
  );
};

export default AnimateRocket;

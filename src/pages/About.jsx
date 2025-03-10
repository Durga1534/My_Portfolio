import React from 'react';
import { motion } from 'framer-motion';
import AnimateRocket from "../components/AnimateRocket"

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.2 }
  },
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }
};

const About = ({ isDarkMode }) => {
  const cardStyle = `p-4 rounded-lg border transition-all duration-300 cursor-pointer
    ${isDarkMode
      ? 'bg-gray-700 text-white border-gray-600'
      : 'bg-gray-100 text-gray-800 border-gray-300'
    }`;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Animated Heading */}
      <motion.h2
        variants={textVariant}
        className="text-4xl font-extrabold text-purple-500 mb-6"
      >
        About Me <AnimateRocket />
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        variants={textVariant}
        className="text-lg leading-relaxed"
      >
        I'm a passionate web developer with expertise in modern frontend technologies.
        My goal is to build interactive and responsive web experiences that leave a lasting impression.
      </motion.p>

      {/* Education Section */}
      <motion.div
        variants={cardVariant}
        whileHover="hover"
        className={cardStyle}
      >
        <h3 className="text-2xl font-semibold mb-2">🎓 Education</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bachelors in Physical Sciences - Viswam Degree & PG College (2023)</li>
          <li>Secondary School Education -Mother theresa junior college</li>
          <li>SSC - Viswa Bharathi High School</li>
        </ul>
      </motion.div>

      {/*Achievements & certifications */}
      <motion.div
        variants={cardVariant}
        whileHover="hover"
        className={cardStyle}
      >
        <h3 className="text-2xl font-semibold mb-2">🎖️ Achievements & Certifications</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Sloved 200+ Leetcode problems</li>
          <li>Full-stack Development Certification - Internshala</li>
          <li>Salesforce Devloper - APSCHE</li>
        </ul>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div
        variants={cardVariant}
        whileHover="hover"
        className={cardStyle}
      >
        <h3 className="text-2xl font-semibold mb-2">🎯 Hobbies</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Exploring new web technologies</li>
          <li>Designing user-friendly Frontend web applications</li>
          <li>Playing cricket, Binge watch series</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
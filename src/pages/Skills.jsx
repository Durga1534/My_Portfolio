import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiGithub, SiRedux, SiJest, SiPostman } from 'react-icons/si';

const skillsData = {
  Frontend: [
    { icon: <FaReact className="text-blue-500" />, name: 'React.js' },
    { icon: <SiRedux className="text-purple-600" />, name: 'Redux' },
    { icon: <FaJsSquare className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3 className="text-blue-400" />, name: 'CSS3' }
  ],
  Backend: [
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-blue-600 dark:text-blue-400" />, name: 'Express.js' },
    { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
    { icon: <SiPostman className="text-orange-600" />, name: 'REST API' },
    { icon: <SiJest className="text-red-500" />, name: 'Jest' },
  ],
  'Version Control': [
    { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
    { icon: <SiGithub className="text-purple-800 dark:text-purple-400" />, name: 'GitHub' },
  ],
};

const Skills = ({ isDarkMode }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getThemeTextColor = (defaultColor) => {
    return isDarkMode ? 'text-blue-400' : defaultColor;
  };

  return (
    <div className="animate-fade-in">
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
        My Skills
      </h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="mb-8" key={category}>
          <h3 className={`text-2xl font-semibold mb-4 ${getThemeTextColor('text-purple-600')}`}>
            {category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                animate={{
                  opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.3 : 1,
                  scale: hoveredSkill === skill.name ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-md transition-all duration-300`}
              >
                <div className="text-4xl mb-2 w-12 h-12 flex items-center justify-center">
                  {skill.icon}
                </div>
                <p className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div
        className={`mt-8 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
      >
        <h3 className={`text-xl font-semibold mb-2 ${getThemeTextColor('text-blue-600')}`}>
          Looking to Learn
        </h3>
        <p className="mb-4">
          Always expanding my skillset with new technologies and frameworks. Currently focused on:
        </p>
        <ul className="list-disc pl-5">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>GraphQL</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

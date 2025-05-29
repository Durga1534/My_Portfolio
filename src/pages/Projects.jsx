import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

{/* Image Links */}
import Project1 from "../assets/project1.png";
import Model from "../assets/model.png";
import Mortgage from "../assets/mortgage.jpg";
import Pokemon1 from "../assets/Pokemon.jpg";
import Interview from "../assets/Interview.png"

const techIcons = {
  'React.js': <FaReact className="text-blue-500 text-sm" />,
  'Node.js': <FaNodeJs className="text-green-500 text-sm" />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400 text-sm" />,
  'MongoDB': <SiMongodb className="text-green-600 text-sm" />,
  'Express': <SiExpress className="text-gray-700 dark:text-gray-300 text-sm" />,
  'HTML': <FaHtml5 className="text-orange-500 text-sm" />,
  'CSS': <FaCss3 className="text-blue-400 text-sm" />,
  'Javascript': <FaJsSquare className="text-yellow-500 text-sm" />,
};

const projects = [
  {
    id: 1,
    title: 'Prep-AI',
    desc: 'Prep-AI is a full-stack web application designed to help candidates prepare for interviews based on selected roles. It leverages AI to generate tailored questions—both theoretical and coding',
    image: Interview,
    githubLink: 'https://github.com/Durga1534/Prep_AI',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 2,
    title: 'Project Management System',
    desc: 'A Management system designed to maintain users, tasks, teams, and projects.',
    image: Project1,
    githubLink: 'https://github.com/Durga1534/project-management',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
  },
  {
    id: 3,
    title: '3D-Travel destination showcase',
    desc: 'A travel destination webpage to showcase famous destinations.',
    image: Model,
    githubLink: 'https://github.com/Durga1534/3D-Image-site',
    tech: ['HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'Mortgage Calculator',
    desc: 'Designed to calculate the amount to be repayed according to loan amount, interest rate and this gives accurate results based on user input.',
    image: Mortgage,
    githubLink: 'https://github.com/Durga1534/Mortgage_Repayment',
    tech: ['Javascript', 'CSS'],
  },
  {
    id: 5,
    title: 'Poke-Slider',
    desc: '3D- Webpage Designed to show various Pokemons with their info regarding their names, moves etc...',
    image: Pokemon1,
    githubLink: 'https://github.com/Durga1534/poke-slider',
    tech: ['HTML', 'CSS'],
  },
  
];

const Projects = ({ isDarkMode }) => {
  return (
    <div className={`container mx-auto py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-purple-500 text-center mb-12 flex items-center justify-center gap-2"
      >
        My Creative Projects{' '}
        <motion.span
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-3xl"
        >
          🚀
        </motion.span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg overflow-hidden transition-colors duration-300`}
          >
            <img
              src={project.image || '/assets/default-image.jpg'}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.desc}</p>
              <div className="flex gap-2 flex-wrap mt-3">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {techIcons[tech] || null}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white px-4 py-2 rounded-md ${
                    isDarkMode 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-green-500 hover:bg-green-600'
                  } transition-colors duration-300`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

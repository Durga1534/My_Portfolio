import React, { useState, useEffect } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Blog from './Blog';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('about');
  const tabs = ['about', 'projects', 'skills', 'contact', 'blog'];
  const [animateTab, setAnimateTab] = useState('');
  const [searchValue, setSearchValue] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setSearchValue(activeTab);
  }, [activeTab]);
  
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (tabs.includes(searchValue.toLowerCase())) {
      setActiveTab(searchValue.toLowerCase());
      setIsMenuOpen(false); 
    }
  };
  
  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleTabClick = (tab) => {
    setAnimateTab(tab);
    setActiveTab(tab);
    setSearchValue(tab);
    setIsMenuOpen(false); 
    setTimeout(() => setAnimateTab(''), 500);
  };
  
  const WindowControls = () => (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
  );
  
  const Tab = ({ name, isActive, onClick }) => {
    const isAnimating = animateTab === name;
    
    return (
      <div
        className={`
          flex items-center px-4 py-2 cursor-pointer transition-all duration-200
          ${isActive 
            ? isDarkMode 
              ? 'bg-gray-800 text-white border-l-2 md:border-l-0 md:border-t-2 border-blue-400' 
              : 'bg-white text-gray-800 border-l-2 md:border-l-0 md:border-t-2 border-blue-500' 
            : isDarkMode 
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }
          ${isAnimating ? 'animate-tab-appear' : ''}
          ${isMenuOpen ? 'w-full' : ''}
        `}
        onClick={() => onClick(name)}
      >
        <span className="capitalize">{name}</span>
      </div>
    );
  };

  const HamburgerIcon = () => (
    <button 
      onClick={toggleMenu}
      className={`md:hidden p-2 rounded focus:outline-none transition-colors
        ${isDarkMode 
          ? 'text-white hover:bg-gray-700' 
          : 'text-gray-800 hover:bg-gray-200'
        }`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {!isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        )}
      </svg>
    </button>
  );
  
  return (
    <div className={`max-w-4xl mx-auto mt-10 shadow-lg rounded-lg border overflow-hidden transition-colors duration-300
      ${isDarkMode 
        ? 'bg-gray-900 border-gray-700 text-white' 
        : 'bg-white border-gray-300 text-gray-800'
      }`}>
      <div className="flex justify-between items-center mb-3">
        <WindowControls />
        
        <div className="flex-1 px-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`w-full py-2 px-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors
                ${isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                }`}
              placeholder="Enter tab name here..."
            />
            <button 
              type="submit" 
              className="ml-2 p-2 rounded-lg bg-gray-400 text-white hover:bg-green-700 transition-colors"
            >
              Go
            </button>
          </form>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg mx-2 transition-colors
              ${isDarkMode 
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
          >
            {isDarkMode ? '🌤️' : '🌙'}
          </button>
          <HamburgerIcon />
        </div>
      </div>
      
      {/* Desktop tabs */}
      <div className={`hidden md:flex bg-gray-200 dark:bg-gray-700 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            name={tab}
            isActive={activeTab === tab}
            onClick={handleTabClick}
          />
        ))}
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div className="flex flex-col">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              name={tab}
              isActive={activeTab === tab}
              onClick={handleTabClick}
            />
          ))}
        </div>
      </div>
      
      <div className={`p-6 min-h-[300px] transition-colors duration-300
        ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        {activeTab === 'about' && <About activeTab={activeTab} isDarkMode={isDarkMode} />}
        {activeTab === 'projects' && <Projects activeTab={activeTab} isDarkMode={isDarkMode} />}
        {activeTab === 'skills' && <Skills activeTab={activeTab} isDarkMode={isDarkMode} />}
        {activeTab === 'contact' && <Contact activeTab={activeTab} isDarkMode={isDarkMode} />}
        {activeTab === 'blog' && <Blog activeTab={activeTab} isDarkMode={isDarkMode} />}
      </div>
    </div>
  );
};

export default NavBar;
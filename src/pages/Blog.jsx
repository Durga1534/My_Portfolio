import React, { useState } from 'react';

const Blog = ({ activeTab = 'blog', isDarkMode = false }) => {
  // Modified default value to ensure it displays even without props
  const isActive = activeTab === 'blog' || !activeTab;
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: 'Solving API Integration in Project Management System to Fetch Details of Users, Tasks, and Teams',
      date: 'October 10, 2024',
      content: 'I faced issues while fetching details of users, tasks, and teams in my project management system. After troubleshooting API endpoints and request parameters, I discovered the issue was related to data inconsistency and permission errors. By implementing proper data validation, caching, and error handling, I was able to create a reliable integration.',
      fullContent: 'I faced issues while fetching details of users, tasks, and teams in my project management system. After troubleshooting API endpoints and request parameters, I discovered the issue was related to data inconsistency and permission errors. By implementing proper data validation, caching, and error handling, I was able to create a reliable integration.\n\nThe first challenge was understanding the API structure. The documentation was incomplete, so I had to reverse-engineer some endpoints. I discovered that user permissions were being checked at multiple levels, causing redundant API calls and performance issues.\n\nTo solve this, I implemented a middleware that validates permissions once per session and caches the results. For data inconsistency, I created a synchronization mechanism that verifies data integrity across different endpoints.\n\nThe final solution reduced API calls by 60% and improved response times significantly. Error handling was also improved by implementing retry logic for transient errors and meaningful error messages for the end users.',
      tags: ['API', 'JavaScript', 'Problem Solving']
    },
    {
      id: 2,
      title: 'Building a Project Management System',
      date: 'September 25, 2024',
      content: 'Sharing my journey of developing a full-stack management system using React for the frontend and Node.js for the backend. I implemented features like assigning users to tasks, teams and projects and I implemented JWT Authentication for secured Signing up new users and used Daisy-UI components to boost development process.',
      fullContent: 'Sharing my journey of developing a full-stack management system using React for the frontend and Node.js for the backend. I implemented features like assigning users to tasks, teams and projects and I implemented JWT Authentication for secured Signing up new users and used Daisy-UI components to boost development process.\n\nThe project started as a simple task tracker but evolved into a complete management system. I chose React for its component-based architecture and state management capabilities. The backend was built with Node.js and Express, with MongoDB as the database.\n\nFor authentication, I implemented JWT with refresh tokens to maintain secure sessions. The UI was built using Tailwind CSS and Daisy-UI components, which significantly accelerated the development process.\n\nThe system now supports features like task dependencies, time tracking, and automated reports. Future enhancements will include integration with calendar apps and a mobile version.',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'MERN-Stack']
    },
    {
      id: 3,
      title: 'Mortgage Calculator',
      date: 'August 22, 2024',
      content: 'I built this web app to provide accurate repayment calculations according to the loan amount, loan interest and time taken and mostly implemented javascript to give accurate results, used CSS media queries for responsiveness across devices.',
      fullContent: 'I built this web app to provide accurate repayment calculations according to the loan amount, loan interest and time taken and mostly implemented javascript to give accurate results, used CSS media queries for responsiveness across devices.\n\nThe calculator takes into account principal amount, interest rate, loan term, and payment frequency. It calculates monthly payments, total interest paid, and amortization schedule.\n\nThe most challenging part was implementing the amortization schedule that shows how each payment contributes to principal reduction and interest. I created a recursive function that calculates each payment incrementally.\n\nFor the UI, I focused on simplicity and responsiveness. The calculator works on all devices from phones to desktops. to show the proportion of interest versus principal over the life of the loan.\n\nUser feedback has been positive, with many appreciating the detailed breakdown of payments and the ability to compare different loan scenarios side by side.',
      tags: ['Javascript', 'HTML', 'CSS']
    },
    // Fixed structure for these posts to match the others
    {
      id: 4,
      title: 'Started Learning HTML & CSS',
      date: 'January 2023',
      content: 'Began my web development journey with basic HTML and CSS, building simple static pages and learning about responsive design principles.',
      fullContent: 'Began my web development journey with basic HTML and CSS, building simple static pages and learning about responsive design principles.\n\nLearned from resources like freeCodeCamp, MDN Web Docs, and various YouTube Tutorials. Focused on developing skills in HTML5, CSS3, and Responsive Design principles.',
      tags: ['HTML5', 'CSS3', 'Responsive Design']
    },
    {
      id: 5,
      title: 'JavaScript Fundamentals',
      date: 'April 2023',
      content: 'Moved on to JavaScript fundamentals, learning about variables, functions, DOM manipulation, and event handling.',
      fullContent: 'Moved on to JavaScript fundamentals, learning about variables, functions, DOM manipulation, and event handling.\n\nStudied using resources like JavaScript.info, Eloquent JavaScript, and Frontend Masters. Focused on developing skills in core JavaScript, DOM Manipulation, and Event Handling techniques.',
      tags: ['JavaScript', 'DOM Manipulation', 'Event Handling']
    },
    {
      id: 6,
      title: 'Continuous Learning',
      date: 'Present',
      content: 'Continuously improving my skills, exploring new technologies, and building more complex projects.',
      fullContent: 'Continuously improving my skills, exploring new technologies, and building more complex projects.\n\nCurrently focusing on TypeScript, Next.js, and Advanced React Patterns. My current focus is on building a portfolio of projects and deepening my understanding of software architecture.',
      tags: ['TypeScript', 'Next.js', 'React']
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send this to your backend API
    // For now, we'll just simulate a successful subscription
    setEmailError('');
    setSubscribeSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowSubscribeModal(false);
      setSubscribeSuccess(false);
      setEmail('');
    }, 3000);
  };

  const handleReadMore = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  // Always visible now, regardless of activeTab
  return (
    <div className={`p-6 md:p-8 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 hidden'} transition-all duration-500`}>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
        My Blog
      </h2>
      
      <div className="flex justify-end mb-4">
        <button 
          className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          onClick={() => setShowSubscribeModal(true)}
        >
          <span>Subscribe</span> ✉️
        </button>
      </div>
      
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 shadow-lg border transition-all hover:shadow-xl`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <span className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full`}>
                {post.date}
              </span>
            </div>
            
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {expandedPostId === post.id ? (
                <p className="whitespace-pre-line">{post.fullContent}</p>
              ) : (
                <p>{post.content}</p>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags && post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className={`text-xs px-2 py-1 rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => handleReadMore(post.id)}
                className={`text-sm px-3 py-1 rounded ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-colors`}
              >
                {expandedPostId === post.id ? 'Show Less ↑' : 'Read More ↓'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg p-6 max-w-md w-full mx-4`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Subscribe to My Blog</h3>
              <button 
                onClick={() => {
                  setShowSubscribeModal(false);
                  setEmailError('');
                  setSubscribeSuccess(false);
                  setEmail('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {subscribeSuccess ? (
              <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
                Thanks for subscribing! You'll receive updates on new posts.
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <p className="mb-4">Get notified when I publish new blog posts. No spam, just updates on my latest work.</p>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} ${emailError ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
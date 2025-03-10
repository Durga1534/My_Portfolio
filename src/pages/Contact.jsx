import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  }
};

const Contact = ({ isDarkMode }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_qqm1uec';
    const templateId = 'template_xqob05k';
    const publicKey = 'xQXsXNY7FIGfpfzRu';
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully!'
        });
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'Something went wrong. Please try again.'
        });
        setLoading(false);
      });
  };

  const cardStyle = `p-6 rounded-lg border transition-all duration-300 cursor-pointer h-full
    ${isDarkMode 
      ? 'bg-gray-800 text-white border-gray-600 shadow-lg'
      : 'bg-gray-100 text-gray-800 border-gray-300 shadow-md'
    }`;

  const inputStyle = `w-full p-3 rounded-md outline-none 
    ${isDarkMode 
      ? 'bg-gray-700 text-white border-gray-500'
      : 'bg-gray-200 text-gray-800 border-gray-300'
    }`;

  const iconStyle = `inline-block text-purple-500 mr-2`;

  return (
    <div 
      className={`min-h-screen p-8 transition-colors duration-300 
        flex flex-col items-center
        ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}
      `}
    >
      <motion.div 
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl"
      >
        {/* Animated Heading */}
        <motion.h2 
          variants={textVariant}
          className="text-4xl font-extrabold text-purple-500 text-center mb-6"
        >
          Contact Me
        </motion.h2>

        {/* Contact Information and Form Side by Side */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Information */}
          <motion.div 
            variants={cardVariant}
            className={`${cardStyle} md:w-1/2`}
          >
            <h3 className="text-2xl font-semibold mb-4">📞 Get in Touch</h3>
            <p className="flex items-center mb-2">
              <FaEnvelope className={iconStyle} /> 
              <a href="mailto:durgaprasadpc143@gmail.com" className="text-blue-500 hover:underline">
                kondurudurgaprasad.2@@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className={iconStyle} /> 
              <span>+91 6309350665</span>
            </p>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className={iconStyle} /> 
              <span>Andhra Pradesh, India</span>
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mt-6">
              <a 
                href="https://github.com/Durga1534" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/durga1534" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            variants={cardVariant}
            className={`${cardStyle} md:w-1/2`}
          >
            <h3 className="text-2xl font-semibold mb-4">📧 Send a Message</h3>
            {status.submitted && (
              <div className={`p-3 mb-4 rounded ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}
            <div className="space-y-4">
              <input 
                type="text" 
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name" 
                className={inputStyle} 
                required 
              />
              <input 
                type="email" 
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email" 
                className={inputStyle} 
                required 
              />
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                className={inputStyle} 
                required
              />
              <motion.button 
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className={`w-full p-3 rounded-md font-bold text-white transition-all 
                  ${isDarkMode 
                    ? loading ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700' 
                    : loading ? 'bg-purple-300' : 'bg-purple-500 hover:bg-purple-600'
                  }
                  ${loading ? 'cursor-not-allowed opacity-70' : ''}
                `}
              >
                {loading ? 'Sending...' : 'Submit'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
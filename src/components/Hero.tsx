import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import im01 from './DP/im01.png';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <img
  src={im01}
  alt="Hasibul Hasan"
  className="w-full h-full object-cover"
/>
            </div>
          </div>

          {/* Welcome Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hasibul Hasan
            </span>
          </h1>

          {/* Professional Title */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            CSE Student | AI Enthusiast | Drone Innovator
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Computer Science and Engineering student at AIUB with a strong focus on 
            artificial intelligence, IoT systems, and smart automation. I combine cutting-edge 
            technology with innovative solutions to create intelligent systems that bridge the 
            gap between hardware and software.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:hhasibul544@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hasibul-hasan-3504a1289"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
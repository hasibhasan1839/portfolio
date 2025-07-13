import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Hasibul Hasan
            </h3>
            <p className="text-gray-400 leading-relaxed">
              CSE Student passionate about AI, IoT, and smart automation. 
              Building innovative solutions that bridge technology and real-world applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:hhasibul544@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hasibul-hasan-3504a1289"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Hasibul Hasan. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and passion for technology.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
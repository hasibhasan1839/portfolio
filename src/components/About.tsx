import React from 'react';
import { User, Mail, Phone, Calendar, MapPin, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Hasibul Hasan' },
    { icon: Calendar, label: 'Date of Birth', value: '04/08/2002' },
    { icon: Mail, label: 'Email', value: 'hhasibul544@gmail.com' },
    { icon: Phone, label: 'Phone', value: '(+880) 01632020627' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
    { icon: Linkedin, label: 'LinkedIn', value: 'hasibul-hasan-3504a1289' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Summary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Profile Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
              Computer Science and Engineering student at AIUB with strong interest in IoT, AI, and Machine Learning. 
              Experienced in drone systems, image processing, and object detection using YOLO and CNN.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Skilled in software development and integrating AI into real-world automation solutions. 
              Passionate about building intelligent systems combining hardware with smart software to create 
              innovative solutions for modern challenges.
            </p>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <info.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{info.label}</span>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {info.label === 'Email' ? (
                        <a href={`mailto:${info.value}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {info.value}
                        </a>
                      ) : info.label === 'Phone' ? (
                        <a href={`tel:${info.value}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {info.value}
                        </a>
                      ) : info.label === 'LinkedIn' ? (
                        <a 
                          href={`https://www.linkedin.com/in/${info.value}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          linkedin.com/in/{info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
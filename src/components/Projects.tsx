import React from 'react';
import { ExternalLink, Github, Award, Smartphone, ShoppingCart, Calendar, Store } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Aerial Crop Yield Prediction',
      description: 'WICE Gold Medal winning project combining AI algorithms with drone technology for accurate rice field yield prediction using advanced image processing and machine learning techniques.',
      technologies: ['Python', 'YOLO', 'Drone Tech', 'Machine Learning', 'Image Processing'],
      icon: Award,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      title: 'IoT-Based Home Automation',
      description: 'Smart home automation system using NodeMCU microcontroller, integrated with Blynk platform for remote control and Flutter mobile application for seamless user experience.',
      technologies: ['NodeMCU', 'Blynk', 'Flutter', 'IoT', 'Sensors'],
      icon: Smartphone,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'E-Commerce System',
      description: 'Comprehensive desktop application for shoe store management built with C#, featuring inventory management, sales tracking, and customer relationship management.',
      technologies: ['C#', '.NET', 'Desktop App', 'Database', 'UI/UX'],
      icon: ShoppingCart,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      title: 'Event Management Platform',
      description: 'Java-based comprehensive event management and booking system with features for event creation, ticket booking, participant management, and payment processing.',
      technologies: ['Java', 'MySQL', 'Event Management', 'Booking System'],
      icon: Calendar,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      title: 'Direct Farm-to-Consumer Marketplace',
      description: 'Web platform connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices for farmers while providing fresh produce to customers.',
      technologies: ['Web Development', 'PHP', 'MySQL', 'E-commerce', 'Agriculture'],
      icon: Store,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my innovative projects spanning AI, IoT, web development, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${project.bgColor}`}>
                  <project.icon size={24} className={project.color} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
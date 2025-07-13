import React from 'react';
import { Trophy, Award, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'WICE 2025 Bangladesh – Gold Medal',
      category: 'Applied Life Science',
      description: 'Won gold medal at World Invention Competition and Exhibition 2025 for the innovative Aerial Crop Yield Prediction project',
      icon: Trophy,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      year: '2025'
    },
    {
      title: 'Cisco IT Essentials Certified',
      category: 'Professional Certification',
      description: 'Successfully completed Cisco IT Essentials certification demonstrating proficiency in computer hardware and networking fundamentals',
      icon: Award,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      year: '2024',
      link: 'https://www.credly.com/users/hasibul-hasan.5ae57af1'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognition of excellence and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon size={32} className={achievement.color} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {achievement.category}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
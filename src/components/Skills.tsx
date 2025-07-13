import React from 'react';
import { Code, Globe, Brain, Cpu, Database, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Java', 'C++', 'C#'],
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Web & App Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Flutter'],
      color: 'green'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'YOLO', 'Image Processing'],
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'IoT & Robotics',
      skills: ['NodeMCU', 'Drone Tech', 'Automation'],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL'],
      color: 'red'
    },
    {
      icon: BookOpen,
      title: 'CS Fundamentals',
      skills: ['Data Structures', 'Algorithms'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700';
      case 'green':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700';
      case 'orange':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700';
      case 'red':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-700';
      case 'indigo':
        return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
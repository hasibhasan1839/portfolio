import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'American International University-Bangladesh (AIUB)',
      degree: 'BSc in Computer Science and Engineering',
      period: '2022 – Present',
      score: 'CGPA 3.01',
      description: 'Currently pursuing my bachelor\'s degree with a focus on AI, IoT, and software development.'
    },
    {
      institution: 'Dr. Zobaida Hannan School & College',
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2020 – 2022',
      score: 'CGPA 4.58',
      description: 'Completed higher secondary education with excellent results in Science group.'
    },
    {
      institution: 'Uttarda High School',
      degree: 'Secondary School Certificate (SSC)',
      period: '2018 – 2020',
      score: 'GPA 4.89',
      description: 'Completed secondary education with outstanding academic performance.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <GraduationCap size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {education.degree}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {education.institution}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {education.period}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                        {education.score}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
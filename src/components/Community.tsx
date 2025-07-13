import React from 'react';
import { Users, Zap, Leaf } from 'lucide-react';

const Community: React.FC = () => {
  const communities = [
    {
      name: 'IEEE AIUB Student Branch',
      description: 'Active member of the Institute of Electrical and Electronics Engineers student chapter, participating in technical workshops, seminars, and collaborative projects.',
      icon: Zap,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'ESAB (Engineering Students Association of Bangladesh)',
      description: 'Contributing member of ESAB, engaging in engineering community activities, networking events, and professional development programs.',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      name: 'AIUB Environment Club',
      description: 'Dedicated to environmental awareness and sustainability initiatives, participating in eco-friendly projects and environmental conservation campaigns.',
      icon: Leaf,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community & Clubs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Active participation in student organizations and community initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${community.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <community.icon size={32} className={community.color} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {community.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {community.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
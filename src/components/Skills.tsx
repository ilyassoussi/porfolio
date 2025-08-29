import React from 'react';
import { Cloud, Server, Monitor, Database, Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="text-cyan-400" size={32} />,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'AWS', 'GCP', 'Azure'],
      color: 'cyan'
    },
    {
      icon: <Server className="text-blue-400" size={32} />,
      title: 'Backend',
      skills: ['Java Spring Boot', '.NET', 'APIs REST/SOAP', 'Microservices', 'PHP'],
      color: 'blue'
    },
    {
      icon: <Monitor className="text-emerald-400" size={32} />,
      title: 'Frontend',
      skills: ['React', 'Angular', 'TypeScript', 'jQuery', 'SCSS', 'Tailwind CSS'],
      color: 'emerald'
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: 'Bases de données',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Redis'],
      color: 'purple'
    },
    {
      icon: <Code className="text-orange-400" size={32} />,
      title: 'Langages',
      skills: ['JavaScript/TypeScript', 'Java', 'C#', 'PHP', 'C' , 'C++'],
      color: 'orange'
    },
    {
      icon: <Settings className="text-pink-400" size={32} />,
      title: 'Outils & Méthodes',
      skills: ['Git', 'Jenkins', 'GitLab CI', 'Agile/Scrum', 'Monitoring'],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400/50',
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400/50',
      emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 hover:border-emerald-400/50',
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400/50',
      orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-400/50',
      pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-400/50'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mes <span className="text-cyan-400">compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Une expertise technique polyvalente couvrant l'ensemble du cycle de développement, 
            de la conception à la mise en production
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="bg-slate-800/30 px-4 py-2 rounded-lg border border-slate-700/50 text-slate-200 text-sm font-medium hover:bg-slate-700/30 transition-colors duration-200"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </div>
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
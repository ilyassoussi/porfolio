import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
      issuer: 'VMware',
      date: '2023',
      status: 'Validée',
      description: 'Certification officielle couvrant le développement d\'applications Java avec Spring Boot, la sécurité, les tests et le déploiement.',
      skills: ['Spring Boot', 'Java', 'REST APIs', 'Spring Security'],
      icon: '☕',
      color: 'emerald',
      link: 'https://www.coursera.org/account/accomplishments/verify/MGJFG8F9RREJ'
    },
    {
      title: 'Continuous Delivery & DevOps',
      issuer: 'Docker Inc.',
      date: '2023',
      status: 'Validée',
      description: 'Maîtrise des conteneurs Docker et orchestration Kubernetes pour les déploiements en production.',
      skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'Microservices'],
      icon: '🐳',
      color: 'blue',
      link: 'https://coursera.org/share/b541bfe4e9b039fd3eb152570035648d'
    },
    {
      title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
      issuer: 'Docker Inc.',
      date: '2023',
      status: 'Validée',
      description: 'Maîtrise des conteneurs Docker et orchestration Kubernetes pour les déploiements en production.',
      skills: ['Docker', 'Kubernetes', 'Openshift', 'ArgoCD'],
      icon: '🐳',
      color: 'green',
      link: 'https://coursera.org/share/359601b0e80a9c32b887b1da94a68139'
    },
    {
      title: 'Git/GitLab',
      issuer: 'Amazon Web Services',
      date: '2022',
      status: 'Validée',
      description: 'Conception et déploiement d\'infrastructures scalables et sécurisées sur AWS.',
      skills: ['AWS', 'EC2', 'S3', 'RDS', 'CloudFormation'],
      icon: '☁️',
      color: 'orange',
      link: 'https://coursera.org/share/0a46b8fef514633d9c5d610d9b3b7365'
    },
    {
      title: 'Java et POO',
      issuer: 'Meta',
      date: '2022',
      status: 'Validée',
      description: 'Développement d\'interfaces utilisateur modernes et performantes avec React et les hooks.',
      skills: ['React', 'JSX', 'Hooks', 'Component Architecture'],
      icon: '⚛️',
      color: 'cyan',
      link: 'https://www.coursera.org/account/accomplishments/certificate/WSF4VJ9JFX5F'
    },
    {
      title: 'Angular Developer',
      issuer: 'Google',
      date: '2022',
      status: 'Validée',
      description: 'Framework Angular pour la création d\'applications web enterprise avec TypeScript.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Angular CLI'],
      icon: '🔺',
      color: 'red',
      link: 'https://www.coursera.org/account/accomplishments/verify/GVE6QSSUJSC9'
    },
    {
      title: 'React',
      issuer: 'Meta',
      date: '2022',
      status: 'Validée',
      description: 'Framework Angular pour la création d\'applications web enterprise avec TypeScript.',
      skills: ['React', 'TypeScript', 'JSX', 'Hooks'],
      icon: '⚛️',
      color: 'cyan',
      link: 'https://www.coursera.org/account/accomplishments/verify/MJYNW6K2DEUP'
    },
    {
      title: 'Continuous Integration and Continuous Delivery (CI/CD)',
      issuer: 'CI/CD',
      date: '2021',
      status: 'Validée',
      description: 'Automatisation des processus de déploiement et intégration continue avec GitLab CI/CD.',
      skills: ['GitLab CI', 'Jenkins', 'Automation', 'DevOps'],
      icon: '🔄',
      color: 'purple',
      link: 'https://coursera.org/share/8b53b9339fff80432a227821e8f83004'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 hover:border-emerald-400/50',
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400/50',
      orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-400/50',
      cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400/50',
      red: 'from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-400/50',
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400/50'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getStatusColor = (status: string) => {
    return status === 'Validée' ? 'text-emerald-400' : 'text-orange-400';
  };

  const getStatusBg = (status: string) => {
    return status === 'Validée' ? 'bg-emerald-500/20' : 'bg-orange-500/20';
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mes <span className="text-cyan-400">certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Certifications officielles validant mon expertise technique et mon engagement 
            dans l'apprentissage continu des technologies modernes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`bg-gradient-to-br ${getColorClasses(cert.color)} p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBg(cert.status)} ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                  {cert.status === 'Validée' && (
                    <CheckCircle size={16} className="text-emerald-400" />
                  )}
                </div>
              </div>

              {/* Title and Issuer */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-slate-400" />
                <span className="text-slate-300 font-medium">{cert.issuer}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400">Compétences validées :</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/30 text-slate-300 text-xs rounded-lg border border-slate-700/30 hover:border-cyan-400/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-700/30">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group-hover:gap-3"
                >
                  <ExternalLink size={16} />
                  Voir la certification
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-slate-300 text-sm">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-300 text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">6+</div>
              <div className="text-slate-300 text-sm">Validées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-300 text-sm">Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
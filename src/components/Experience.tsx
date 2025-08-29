import React from 'react';
import { Calendar, MapPin, Briefcase, Code, Settings } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Stagiaire DevOps',
      company: 'Ministère de l\'Agriculture',
      location: 'Rabat, Maroc',
      period: '03/2025 – 07/2025',
      type: 'Stage',
      description: 'Conception et développement de microservices en Java Spring Boot, avec communication via REST API, services SOAP et OpenFeign, ainsi qu’une communication asynchrone à l’aide d’Apache Kafka. Sécurisation des API par JWT, gestion centralisée des configurations et découverte de services avec Consul, et gestion sécurisée des secrets via Vault. Mise en place de CI/CD avec GitHub Actions, conteneurisation avec Docker, orchestration via Kubernetes et HELM, infrastructure automatisée avec Terraform et Ansible sur GCP, et supervision des métriques à l’aide de Prometheus et Grafana.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins CD', 'Terraform', 'GCP','Microservice','GitHub Actions CI','Reactjs','java spring boot','Ansible','Helm','Prometheus','Grafana','Sonarqube','Trivy'],
      icon: <Settings className="text-cyan-400" size={24} />
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Elinowai E-commerce',
      location: 'Remote',
      period: '09/2024 – 02/2025',
      type: 'Freelance',
      description: 'Développement complet d\'une plateforme e-commerce avec gestion des commandes, paiement en ligne et interface d\'administration. Focus sur l\'expérience utilisateur et la performance.',
      technologies: ['React', 'Java', 'Postgres', 'Rest api'],
      icon: <Briefcase className="text-emerald-400" size={24} />
    },
    {
      title: 'Stagiaire Développeur',
      company: 'CDG Prévoyance',
      location: 'Rabat, Maroc',
      period: '07/2023 – 09/2023',
      type: 'Stage',
      description: 'Développement d\’une plateforme web modernisée avec React en frontend et Spring Boot en backend, utilisant PostgreSQL pour la gestion des données, avec une attention particulière portée à l\'amélioration de l\’expérience utilisateur et à la gestion des services affiliés. Déploiement facilité par Docker et automatisation des processus d’intégration et de déploiement continu via GitLab CI/CD, assurant des livraisons rapides et fiables.',
      technologies: ['Java spring boot', 'PostgreSQL', 'Angular'],
      icon: <Code className="text-purple-400" size={24} />
    },
    {
      title: 'Backend Developer (Prestashop)',
      company: 'Egio',
      location: 'Rabat, Maroc',
      period: '12/2022 – 11/2023',
      type: 'CDI',
      description: 'Développement d\'applications backend robustes avec PHP (Symfony), conception d\'APIs RESTful pour des solutions d\'entreprise.',
      technologies: ['PHP', 'Symfony', 'MySQL', 'Docker-compose','prestashop'],
      icon: <Code className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mon <span className="text-cyan-400">expérience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Un parcours diversifié dans le développement et DevOps, 
            avec des expériences enrichissantes dans différents secteurs
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-slate-900 border-4 border-cyan-400 rounded-full flex items-center justify-center">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl group">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        exp.type === 'CDI' ? 'bg-emerald-500/20 text-emerald-400' :
                        exp.type === 'Stage' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-cyan-400 font-semibold mb-4">{exp.company}</h4>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/30 hover:border-cyan-400/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
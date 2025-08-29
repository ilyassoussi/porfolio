import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Moroccan Connect',
      description: 'Application mobile sociale développée avec Flutter et Spring Boot, déployée sur AWS. Plateforme communautaire permettant aux utilisateurs de se connecter et partager du contenu géolocalisé.',
      technologies: ['Flutter', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker'],
      icon: <Smartphone className="text-cyan-400" size={32} />,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Interface mobile native', 'Backend scalable', 'Déploiement cloud', 'Géolocalisation']
    },
    {
      title: 'MrFoot',
      description: 'Plateforme web de réservation de terrains de football développée avec Symfony et jQuery. Système de gestion complet avec calendrier, paiements et notifications.',
      technologies: ['Symfony', 'jQuery', 'MySQL', 'SCSS', 'Prestashop'],
      icon: <Globe className="text-blue-400" size={32} />,
      image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Réservation en temps réel', 'Gestion des paiements', 'Interface admin', 'Notifications SMS']
    },
    {
      title: 'All4u E-commerce',
      description: 'Solution e-commerce Multi-brand complète avec gestion des produits, commandes et paiements. Architecture moderne avec React pour le frontend et java pour l\'API.',
      technologies: ['React', 'Java', 'Postgres', 'Mailjet'],
      icon: <ShoppingCart className="text-emerald-400" size={32} />,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Catalogue produits', 'Panier intelligent', 'Paiements sécurisés', 'Dashboard vendeur','Dashboard admin']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mes <span className="text-cyan-400">projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Découvrez mes réalisations techniques, alliant innovation et expertise pour créer des solutions impactantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-900/80 rounded-lg hover:bg-cyan-500/20 transition-colors duration-200">
                      <ExternalLink size={18} className="text-cyan-400" />
                    </button>
                    <button className="p-2 bg-slate-900/80 rounded-lg hover:bg-cyan-500/20 transition-colors duration-200">
                      <Github size={18} className="text-cyan-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800/50 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Fonctionnalités clés :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-lg border border-slate-700/30 hover:border-cyan-400/50 transition-colors duration-200"
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
    </section>
  );
};

export default Projects;
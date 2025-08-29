import React from 'react';
import { User, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            À <span className="text-cyan-400">propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl flex items-center justify-center">
                <User size={80} className="text-slate-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-400 rounded-lg opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-lg opacity-20"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <User className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Mon parcours</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Ingénieur informatique passionné avec une solide expérience en développement Full Stack et DevOps. 
                Je me spécialise dans la création de solutions scalables, l'automatisation des processus de 
                déploiement et l'optimisation des infrastructures cloud pour des entreprises modernes.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-blue-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Formation</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold">Ingenieur MIAGE</h4>
                  <p className="text-slate-300 text-sm">Méthodes Informatiques Appliquées à la Gestion des Entreprises</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Licence en Informatique</h4>
                  <p className="text-slate-300 text-sm">Fondamentaux du développement et de l'architecture logicielle</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Target className="text-emerald-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Créer des solutions technologiques robustes qui transforment les défis business en opportunités, 
                en combinant expertise technique et vision stratégique pour livrer des produits exceptionnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
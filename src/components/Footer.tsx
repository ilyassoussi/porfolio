import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              SOUSSI<span className="text-cyan-400">.</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              DevOps & Full Stack Developer passionné par la création de solutions 
              technologiques innovantes et scalables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation rapide</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Accueil', 'À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('expérience', 'experience').replace('projets', 'projects').replace('accueil', 'home')}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:ily.soussi@gmail.com" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm block"
              >
                ily.soussi@gmail.com
              </a>
              <div className="text-slate-400 text-sm">Rabat, Maroc</div>
              <div className="text-emerald-400 text-sm font-medium">Disponible pour de nouveaux projets</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} SOUSSI Ilyas. Développé avec</span>
              <Heart className="text-red-400 fill-current" size={16} />
              <span>et</span>
              <Code className="text-cyan-400" size={16} />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Built with React & Tailwind CSS</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">En ligne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
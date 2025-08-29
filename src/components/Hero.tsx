import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import ilyas from '../assets/ilyas.png';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Avatar placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            <img src ={ilyas} alt="Ilyas Soussi" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          SOUSSI <span className="text-cyan-400">Ilyas</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
          DevOps & Full Stack Developer
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Ingénieur informatique passionné par le développement Full Stack et DevOps, 
          spécialisé dans la création de solutions scalables et l'optimisation des infrastructures cloud
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="/soussi_ilyas.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Télécharger CV
          </a>
          <button 
            onClick={scrollToAbout}
            className="border border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
          >
            En savoir plus
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-800">
          <a href="mailto:ilyas.soussi@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/ilyas-soussi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/ilyassoussi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
            <Github size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-cyan-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
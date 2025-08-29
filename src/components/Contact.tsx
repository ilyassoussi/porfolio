import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_etbq5eh', // Service ID
        'template_mz8q6qd', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'UlDr5d56XyA-WKydg' // User ID
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      label: 'Email',
      value: 'ily.soussi@gmail.com',
      href: 'mailto:ily.soussi@gmail.com'
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      label: 'Téléphone',
      value: '+212 6 61 51 21 21',
      href: 'tel:+212661512121'
    },
    {
      icon: <MapPin className="text-emerald-400" size={24} />,
      label: 'Localisation',
      value: 'Rabat, Maroc',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/ilyas-soussi',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/ilyassoussi',
      color: 'hover:text-slate-300'
    },
    {
      name: 'Portfolio',
      icon: <ExternalLink size={20} />,
      href: '#',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Me <span className="text-cyan-400">contacter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? Discutons de vos besoins 
            et découvrons comment je peux vous aider à atteindre vos objectifs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-white font-semibold hover:text-cyan-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Retrouvez-moi sur</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-800/50 rounded-xl border border-slate-700/30 text-slate-400 ${link.color} transition-all duration-300 hover:transform hover:scale-110 hover:border-slate-600/50`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-3">Collaborons ensemble !</h4>
              <p className="text-slate-300 mb-4">
                Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants. 
                N'hésitez pas à me contacter pour discuter de vos besoins.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                <CheckCircle size={16} />
                Disponible pour de nouveaux projets
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800/50">
            <h3 className="text-2xl font-bold text-white mb-8">Envoyez-moi un message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Message envoyé !</h4>
                <p className="text-slate-300">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="collaboration">Opportunité de collaboration</option>
                    <option value="freelance">Projet freelance</option>
                    <option value="emploi">Opportunité d'emploi</option>
                    <option value="conseil">Demande de conseil</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
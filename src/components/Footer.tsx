import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3a86ff] to-[#0057ff] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#3a86ff]/30">
                <i className="fa-solid fa-play text-xs ml-0.5"></i>
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                MAHADI <span className="text-[#3a86ff]">MANON</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional Video Editor, Motion Graphic Designer, and Visual Artist crafting high-conversion digital assets for creators, agencies, and businesses worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#3a86ff] border border-slate-800 hover:border-[#3a86ff] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                >
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills & Toolkit
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio Works
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors">YouTube Video Editing</li>
              <li className="hover:text-white transition-colors">Viral Shorts & Reels</li>
              <li className="hover:text-white transition-colors">Kinetic Motion Graphics</li>
              <li className="hover:text-white transition-colors">Product Manipulation</li>
              <li className="hover:text-white transition-colors">Cinematic Color Grading</li>
              <li className="hover:text-white transition-colors">Sound Design & FX</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#3a86ff]"></i>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#3a86ff]"></i>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors truncate max-w-[170px]"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-[#3a86ff]"></i>
                <span>{personalInfo.location}</span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open for Collaborations
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © 2026 <strong className="text-slate-400">{personalInfo.name}</strong>. All rights reserved. Crafted with 2026 aesthetics.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800"
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up text-xs text-[#3a86ff]"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

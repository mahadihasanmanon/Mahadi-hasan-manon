import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personalInfo, integrations, socialLinks } = portfolioData;

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hello Mahadi Hasan Manon, I saw your portfolio and would like to discuss a project!`
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080b14]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Have a Project in <span className="text-[#3a86ff]">Mind?</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Let's create something extraordinary together. Give me a call, send an email, or connect on WhatsApp.
          </p>
        </div>

        {/* Centered Direct Info & Quick Channels */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
              Direct Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#3a86ff] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Available 10 AM - 10 PM (BST)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#3a86ff] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Quick response within 24 hours</p>
                </div>
              </div>

              {/* Location: Work Place & Hometown */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <p className="text-xs text-[#3a86ff] font-semibold uppercase tracking-wider">
                    Work Place
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.workplace || 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka'}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-house text-slate-500"></i>
                    <span>Hometown: {personalInfo.hometown || 'Feni, Bangladesh'}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Accepting global remote & on-site briefs
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={`https://wa.me/${integrations.whatsappNumber}?text=${encodedWhatsAppMsg}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Social Network Links */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Follow My Works
              </p>
              <p className="text-xs text-slate-500 mt-0.5">Behance • Facebook • LinkedIn</p>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#3a86ff] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                >
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

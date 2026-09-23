import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0e18]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
            About The Creator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Crafting Visuals That <span className="text-[#3a86ff]">Captivate</span> & Convert
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Bridging creative visual artistry, technical engineering, and high-impact digital storytelling.
          </p>
        </div>

        {/* Narrative & Details Card */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3a86ff]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-xl font-bold border border-[#3a86ff]/30 shadow-sm shadow-[#3a86ff]/20">
                <i className="fa-solid fa-fingerprint"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">The Creative Philosophy</h3>
                <p className="text-xs text-slate-400">Story-driven, detail-obsessed, impact-oriented</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">
              I am <strong className="text-white font-semibold">Mahadi Hasan Manon</strong>, a dedicated Video Editor, Motion Graphics Designer, and Graphic Artist with professional practice and over 50+ delivered projects. I hold a <strong className="text-white font-semibold">Diploma in Engineering in Computer Science & Technology</strong> from <span className="text-[#3a86ff] font-medium">Feni Polytechnic Institute</span> (Class of 2024, CGPA 3.34 / 4.00), blending computational precision with cutting-edge visual storytelling.
            </p>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Whether it is a fast-paced YouTube documentary cut, an engaging high-retention 9:16 vertical Reel, or a surreal product manipulation ad for social marketing, my goal is always to deliver top-tier visual excellence with seamless pacing and aesthetic harmony.
            </p>
          </div>

          {/* Quick Contact & Location Chips */}
          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Work Place & Hometown */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <i className="fa-solid fa-briefcase text-[#3a86ff] text-base mt-0.5"></i>
              <div>
                <p className="text-[11px] text-[#3a86ff] font-semibold uppercase tracking-wider">Work Place</p>
                <p className="text-xs font-semibold text-white leading-snug">
                  {personalInfo.workplace || 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka'}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-house text-slate-500"></i> {personalInfo.hometown || 'Feni, Bangladesh'}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <i className="fa-solid fa-envelope text-[#3a86ff] text-base"></i>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-[#3a86ff] transition-colors truncate max-w-[180px] block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <i className="fa-solid fa-phone text-[#3a86ff] text-base"></i>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Direct Phone</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-[#3a86ff] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">WhatsApp</p>
                <a
                  href={`https://wa.me/${portfolioData.integrations.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-semibold text-emerald-400 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Action Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-medium">
              Ready to start your next creative project or video edit?
            </span>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-[#3a86ff] hover:bg-[#2563eb] text-white text-xs font-bold transition-all shadow-md shadow-[#3a86ff]/25 flex items-center gap-2"
            >
              <span>Send Project Brief</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

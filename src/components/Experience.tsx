import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences, educations } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#06080e]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20 inline-flex items-center gap-2">
            <i className="fa-solid fa-medal text-xs"></i>
            <span>Background & Credentials</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-3 tracking-tight">
            Work Experience & <span className="text-[#3a86ff]">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive journey combining hands-on retail management, high-velocity post-production practice, and academic engineering excellence in Computer Science.
          </p>
        </div>

        {/* Dual Grid: Work Experience (Left) & Academic Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================================= */}
          {/* Left Column: Work Experience */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg border border-[#3a86ff]/30 shadow-sm shadow-[#3a86ff]/20">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Work Experience</h3>
                  <p className="text-xs text-slate-400">Professional career & responsibilities</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#3a86ff]/10 text-[#3a86ff] text-xs font-bold border border-[#3a86ff]/20">
                {experiences.length} Positions
              </span>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-800 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Timeline Node */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#3a86ff] border-4 border-[#080b12] shadow-md shadow-[#3a86ff]/50 group-hover:scale-125 transition-transform"></div>

                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#3a86ff] px-2.5 py-0.5 rounded bg-[#3a86ff]/10 border border-[#3a86ff]/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{exp.companyOrType}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#3a86ff] transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <i className="fa-solid fa-angle-right text-[#3a86ff] mt-0.5 shrink-0"></i>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Right Column: Academic Education & Qualifications */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-lg border border-indigo-500/30 shadow-sm shadow-indigo-500/20">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education & Qualifications</h3>
                  <p className="text-xs text-slate-400">Formal academic background & certifications</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20">
                {educations.length} Credentials
              </span>
            </div>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>

                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar-check text-[11px]"></i>
                      <span>Passing Year: {edu.passingYear}</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                      <i className="fa-solid fa-award text-xs"></i>
                      <span>{edu.result}</span>
                    </span>
                  </div>

                  {/* Degree & Field */}
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#3a86ff] mt-0.5">
                    {edu.fieldOfStudy}
                  </p>

                  {/* Institution */}
                  <div className="flex items-center gap-2 mt-2 text-xs font-medium text-slate-300">
                    <i className="fa-solid fa-building-columns text-slate-400"></i>
                    <span>{edu.institution}</span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3">
                      {edu.description}
                    </p>
                  )}

                  {/* Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-800/80">
                      {edu.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <i className="fa-solid fa-check text-emerald-400 mt-0.5 shrink-0 text-[10px]"></i>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Special Technical Skillset Synergy Note */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#3a86ff]/10 to-indigo-500/10 border border-[#3a86ff]/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#3a86ff]/20 text-[#3a86ff] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-laptop-code text-sm"></i>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Computer Science Foundation:</strong> Technical computing background provides a major competitive edge in media codec rendering, advanced After Effects expressions, and digital workflow automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const WorkflowAndToolkit: React.FC = () => {
  const { softwareTools } = portfolioData;

  const workflowSteps = [
    {
      num: '01',
      title: 'Concept & Storyboard',
      desc: 'Analyzing client vision, audience demographics, target retention goals, and creative direction.',
      icon: 'fa-solid fa-lightbulb',
    },
    {
      num: '02',
      title: 'Dynamic Cut & Motion',
      desc: 'Precision pacing, rhythm cutting to music beats, kinetic text animations, and visual transitions.',
      icon: 'fa-solid fa-scissors',
    },
    {
      num: '03',
      title: 'Audio FX & Color Grading',
      desc: 'Immersive Foley sound design, audio leveling, cinematic LUT application, and skin tone correction.',
      icon: 'fa-solid fa-sliders',
    },
    {
      num: '04',
      title: 'Render & Multi-Platform Delivery',
      desc: 'Master render in pristine 4K/60fps and tailored export presets for YouTube, Reels, and Web.',
      icon: 'fa-solid fa-rocket',
    },
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-[#0a0e18]/90">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 4-Step Creative Workflow: How I Turn Raw Ideas Into Gold */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
              Production Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              How I Turn <span className="text-[#3a86ff]">Raw Ideas</span> Into Gold
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              A systematic, retention-obsessed creative process engineered to transform ordinary footage into viral visual masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                id={`workflow-step-${step.num}`}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#3a86ff]/50 transition-all duration-300 relative group hover:-translate-y-1.5 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-[#3a86ff] transition-colors font-mono">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 group-hover:text-white group-hover:bg-[#3a86ff] flex items-center justify-center transition-all shadow-md">
                    <i className={step.icon}></i>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Skills & Software Mastery: My Digital Toolkit */}
        {/* ========================================================================= */}
        <div id="toolkit" className="pt-6 scroll-mt-20">
          <span id="skills" className="scroll-mt-20"></span>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
              Software & Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              My <span className="text-[#3a86ff]">Digital Toolkit</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              Industry-standard creative applications and post-production software leveraged for flawless execution.
            </p>
          </div>

          {/* Software Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTools.map((tool) => (
              <div
                key={tool.name}
                id={`software-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-2xl bg-[#0c1222]/90 border border-slate-800 hover:border-[#3a86ff]/50 transition-all hover:-translate-y-1.5 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3a86ff]/15 text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white flex items-center justify-center text-xl transition-all shadow-md">
                    <i className={tool.iconClass}></i>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tool.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [avatarMode, setAvatarMode] = useState<'ai' | 'original'>(
    personalInfo.useAiAvatar ? 'ai' : 'original'
  );

  const roles = personalInfo.subtitles;

  // Typing effect loop
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause before starting delete
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const activeAvatar =
    avatarMode === 'ai' ? personalInfo.avatarAiUrl : personalInfo.avatarOriginalUrl;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#3a86ff]/15 rounded-full blur-[130px] pointer-events-none animate-ambient"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Subtle modern grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div
              id="status-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-[#3a86ff]/30 shadow-sm backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Available for Freelance & Remote Projects
              </span>
            </div>

            {/* Name & Title */}
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#3a86ff] font-bold mb-2">
              Welcome to my creative universe
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#00d2ff] via-[#3a86ff] to-[#a855f7] bg-clip-text text-transparent inline-block drop-shadow-[0_2px_20px_rgba(58,134,255,0.35)]">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-12 mt-3 flex items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300">
                I am a{' '}
                <span className="text-[#3a86ff] border-b-2 border-[#3a86ff] pb-0.5">
                  {displayedText}
                </span>
                <span className="text-[#3a86ff] animate-pulse ml-0.5 font-mono">|</span>
              </span>
            </div>

            {/* Bio summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-btn-portfolio"
                href="#portfolio"
                className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3a86ff] to-[#1e60d5] hover:from-[#2e74ec] hover:to-[#174eb0] shadow-lg shadow-[#3a86ff]/30 hover:shadow-xl hover:shadow-[#3a86ff]/45 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-base"
              >
                <i className="fa-solid fa-play text-xs"></i>
                <span>Explore Portfolio</span>
              </a>

              <a
                id="hero-btn-contact"
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#3a86ff]/50 backdrop-blur-sm hover:-translate-y-0.5 transition-all flex items-center gap-2 text-base"
              >
                <i className="fa-solid fa-paper-plane text-xs text-[#3a86ff]"></i>
                <span>Hire Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider mr-1">
                Follow:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  id={`social-hero-${social.name.toLowerCase()}`}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 hover:border-[#3a86ff] flex items-center justify-center text-slate-300 hover:text-white hover:scale-110 hover:bg-[#3a86ff]/20 transition-all shadow-sm"
                >
                  <i className={`${social.iconClass} text-sm`}></i>
                </a>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalInfo.experienceYears}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Industry Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#3a86ff]">
                  {personalInfo.completedProjects}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Projects Done</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalInfo.happyClients}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Glowing frame */}
            <div className="relative group">
              {/* Outer halo glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#3a86ff] via-indigo-500 to-cyan-400 rounded-3xl opacity-40 blur-2xl group-hover:opacity-60 transition duration-500"></div>

              {/* Portrait Container */}
              <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-3xl overflow-hidden border-2 border-white/15 bg-slate-900 shadow-2xl p-2.5 backdrop-blur-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    id="hero-profile-image"
                    src={activeAvatar}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient bottom shadow on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Name badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">
                        Mahadi Hasan Manon
                      </p>
                      <p className="text-[11px] text-[#3a86ff] font-medium flex items-center gap-1">
                        <span>Badda, Dhaka 🏢</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">Feni 📍</span>
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#3a86ff]/20 text-[#3a86ff] text-[10px] font-bold border border-[#3a86ff]/30">
                      PRO CREATOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 4K Video Editing */}
              <div className="absolute -top-4 -left-6 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#0e1628]/90 border border-[#3a86ff]/30 backdrop-blur-md shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-lg bg-[#3a86ff]/20 text-[#3a86ff] flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-clapperboard"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">4K Editing</p>
                  <p className="text-[10px] text-slate-400">Premiere & Resolve</p>
                </div>
              </div>

              {/* Floating Badge 2: Motion Graphics */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#0e1628]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Motion Graphics</p>
                  <p className="text-[10px] text-slate-400">After Effects VFX</p>
                </div>
              </div>
            </div>

            {/* Avatar Switcher as requested (User provided image & AI generated premier studio portrait) */}
            <div className="mt-8 flex items-center gap-2 bg-slate-900/80 border border-white/10 p-1.5 rounded-full text-xs">
              <span className="text-[11px] text-slate-400 px-2 font-medium">Portrait View:</span>
              <button
                id="btn-avatar-ai"
                onClick={() => setAvatarMode('ai')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  avatarMode === 'ai'
                    ? 'bg-[#3a86ff] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-sparkles text-[10px] mr-1"></i> AI Studio Pro
              </button>
              <button
                id="btn-avatar-original"
                onClick={() => setAvatarMode('original')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  avatarMode === 'original'
                    ? 'bg-[#3a86ff] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-camera text-[10px] mr-1"></i> Original Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { VideoProject, GraphicProject } from '../types';
import { VideoModal } from './VideoModal';
import { LightboxModal } from './LightboxModal';

type FilterTab = 'all' | 'video' | 'graphics' | 'shorts';

export const Portfolio: React.FC = () => {
  const { videoProjects, graphicProjects } = portfolioData;
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(null);

  // Filter video projects
  const filteredVideos = videoProjects.filter((vid) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'video') return !vid.isShort;
    if (activeTab === 'shorts') return vid.isShort;
    return false;
  });

  // Filter graphic projects
  const filteredGraphics = graphicProjects.filter(() => {
    if (activeTab === 'all' || activeTab === 'graphics') return true;
    return false;
  });

  return (
    <section id="portfolio" className="pt-16 pb-24 relative overflow-hidden bg-[#0a0e18]/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
            Selected Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Featured <span className="text-[#3a86ff]">Projects</span> & Works
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Explore recent commercial video edits, viral motion shorts, and high-impact graphic design manipulation projects.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg backdrop-blur-md">
            {[
              { id: 'all', label: 'All Works', count: videoProjects.length + graphicProjects.length, icon: 'fa-solid fa-shapes' },
              { id: 'video', label: 'Video Editing', count: videoProjects.filter((v) => !v.isShort).length, icon: 'fa-solid fa-film' },
              { id: 'shorts', label: 'Viral Shorts / Motion', count: videoProjects.filter((v) => v.isShort).length, icon: 'fa-solid fa-bolt' },
              { id: 'graphics', label: 'Graphic Design', count: graphicProjects.length, icon: 'fa-solid fa-palette' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as FilterTab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#3a86ff] text-white shadow-md shadow-[#3a86ff]/30 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <i className={`${tab.icon} text-xs`}></i>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIDEO EDITING & MOTION PROJECTS GRID */}
        {/* ========================================================================= */}
        {filteredVideos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-video text-[#3a86ff]"></i>
                <span>Video Editing & Motion Works</span>
              </h3>
              <span className="text-xs text-slate-400">{filteredVideos.length} Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVideos.map((video) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                return (
                  <div
                    key={video.id}
                    id={`project-video-${video.id}`}
                    className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-slate-800/80 hover:border-[#3a86ff]/50"
                  >
                    {/* Thumbnail Container */}
                    <div
                      className={`relative w-full ${
                        video.isShort ? 'aspect-[4/3] sm:aspect-video' : 'aspect-video'
                      } bg-slate-950 overflow-hidden cursor-pointer`}
                      onClick={() => setSelectedVideo(video)}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Dark overlay with play trigger */}
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#3a86ff]/90 group-hover:bg-[#3a86ff] text-white flex items-center justify-center text-lg shadow-xl shadow-[#3a86ff]/40 group-hover:scale-110 transition-transform">
                          <i className="fa-solid fa-play ml-0.5"></i>
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Clean Title Only */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3a86ff] transition-colors line-clamp-2 mb-3">
                        {video.title}
                      </h4>

                      {/* Card Actions: Live Preview & Details / YouTube */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedVideo(video)}
                          className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-[#3a86ff] hover:bg-[#2563eb] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <i className="fa-solid fa-play text-[10px]"></i>
                          <span>Live Preview</span>
                        </button>
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                          title="Open on YouTube"
                        >
                          <i className="fa-brands fa-youtube text-red-500"></i>
                          <span>Watch</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GRAPHIC DESIGN & PHOTO MANIPULATION GRID */}
        {/* Features: Hover Smooth Scroll Effect requested by user */}
        {/* ========================================================================= */}
        {filteredGraphics.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-palette text-[#3a86ff]"></i>
                <span>Graphic Design & Creative Manipulation</span>
              </h3>
              <span className="text-xs text-slate-400">{filteredGraphics.length} Artworks</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredGraphics.map((graphic) => (
                <div
                  key={graphic.id}
                  id={`project-graphic-${graphic.id}`}
                  className="project-card glass-card rounded-3xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-slate-800/80 hover:border-[#3a86ff]/50"
                >
                  {/* Image Display with Smooth Scroll on Hover */}
                  <div
                    className="relative w-full h-64 bg-slate-950 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedGraphic(graphic)}
                  >
                    <img
                      src={graphic.imageUrl}
                      alt={graphic.title}
                      referrerPolicy="no-referrer"
                      className="project-image-roll w-full min-h-full object-cover object-top"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 group-hover:from-slate-950/40 transition-all pointer-events-none"></div>

                    {/* Magnify Quick Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-xl bg-[#3a86ff] text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <i className="fa-solid fa-magnifying-glass-plus"></i> View Full Art
                      </span>
                    </div>
                  </div>

                  {/* Card Content - Clean Title Only */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3a86ff] transition-colors line-clamp-2 mb-3">
                      {graphic.title}
                    </h4>

                    {/* Card Actions: Live Preview (Lightbox) & Direct Link */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedGraphic(graphic)}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-[#3a86ff] hover:bg-[#2563eb] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <i className="fa-solid fa-expand text-[10px]"></i>
                        <span>Live Preview</span>
                      </button>

                      <a
                        href={graphic.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                        title="Open Raw Image"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        <span>Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

      {/* Graphic Lightbox Modal */}
      <LightboxModal
        graphic={selectedGraphic}
        onClose={() => setSelectedGraphic(null)}
      />
    </section>
  );
};

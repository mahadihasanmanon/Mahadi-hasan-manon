import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const GoogleMapSection: React.FC = () => {
  const { integrations, personalInfo } = portfolioData;
  const [activeLocation, setActiveLocation] = useState<'workplace' | 'hometown'>('workplace');

  const workplaceAddress = personalInfo.workplace || 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka';
  const hometownAddress = personalInfo.hometown || 'Feni, Bangladesh';

  const workplaceMapEmbed =
    'https://maps.google.com/maps?q=Holding%20No-99,%20Kazibari,%20Satarkul,%20Badda,%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed';
  const hometownMapEmbed =
    integrations.googleMapEmbedUrl ||
    'https://maps.google.com/maps?q=Feni,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed';

  const workplaceDirectUrl = `https://maps.google.com/?q=${encodeURIComponent(workplaceAddress)}`;
  const hometownDirectUrl = integrations.googleMapDirectUrl || `https://maps.google.com/?q=${encodeURIComponent(hometownAddress)}`;

  return (
    <section id="location-map" className="py-16 relative bg-[#06080e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
          {/* Top Header Strip */}
          <div className="p-6 sm:p-8 bg-slate-900/90 border-b border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#3a86ff] uppercase">
                  Studio & Geographic Presence
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>

              {/* Work Place (Above Hometown as requested) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#3a86ff] text-white flex items-center gap-1.5 shadow-sm shadow-[#3a86ff]/30">
                    <i className="fa-solid fa-briefcase text-xs"></i>
                    <span>Work Place:</span>
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                    <i className="fa-solid fa-location-dot text-[#3a86ff] animate-bounce"></i>
                    {workplaceAddress}
                  </span>
                </div>
              </div>

              {/* Hometown (Positioned beneath Work Place) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                    <i className="fa-solid fa-house text-xs text-[#3a86ff]"></i>
                    <span>Hometown:</span>
                  </span>
                  <span className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                    <i className="fa-solid fa-map-pin text-slate-400"></i>
                    {hometownAddress}
                  </span>
                </div>
              </div>
            </div>

            {/* Map Switching & Direct Links */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Map Toggle Tabs */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  id="btn-view-workplace-map"
                  type="button"
                  onClick={() => setActiveLocation('workplace')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeLocation === 'workplace'
                      ? 'bg-[#3a86ff] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <i className="fa-solid fa-briefcase text-xs"></i>
                  <span>Workplace Map</span>
                </button>
                <button
                  id="btn-view-hometown-map"
                  type="button"
                  onClick={() => setActiveLocation('hometown')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeLocation === 'hometown'
                      ? 'bg-[#3a86ff] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <i className="fa-solid fa-house text-xs"></i>
                  <span>Hometown Map</span>
                </button>
              </div>

              {/* Direct Link */}
              <a
                href={activeLocation === 'workplace' ? workplaceDirectUrl : hometownDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[#3a86ff]"></i>
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Container */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-950">
            <iframe
              key={activeLocation}
              src={activeLocation === 'workplace' ? workplaceMapEmbed : hometownMapEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(88%) contrast(92%)',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map Location ${activeLocation === 'workplace' ? 'Dhaka Workplace' : 'Feni Hometown'}`}
              className="w-full h-full"
            ></iframe>

            {/* Floating Location Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm p-4 rounded-2xl bg-[#090d16]/95 border border-[#3a86ff]/30 backdrop-blur-md shadow-2xl pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3a86ff] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#3a86ff]/40 shrink-0">
                  <i className={activeLocation === 'workplace' ? 'fa-solid fa-briefcase' : 'fa-solid fa-house'}></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {activeLocation === 'workplace' ? 'Mahadi Manon Production Studio' : 'Mahadi Manon Hometown'}
                  </p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {activeLocation === 'workplace' ? workplaceAddress : hometownAddress}
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {activeLocation === 'workplace' ? 'Current Work Studio' : 'Permanent Roots'}
                </span>
                <span className="text-slate-400 font-mono">BST (UTC+6)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

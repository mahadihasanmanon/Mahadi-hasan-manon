import React, { useEffect, useState } from 'react';
import { GraphicProject } from '../types';

interface LightboxModalProps {
  graphic: GraphicProject | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ graphic, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (graphic) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [graphic, onClose]);

  if (!graphic) return null;

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#0c1222] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Display Area */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 overflow-auto max-h-[60vh] md:max-h-[85vh]">
          <img
            src={graphic.imageUrl}
            alt={graphic.title}
            referrerPolicy="no-referrer"
            className={`max-h-[55vh] md:max-h-[80vh] w-auto object-contain rounded-xl transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-125 cursor-zoom-out' : ''
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Quick Zoom Toggle Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white text-xs backdrop-blur-md border border-white/10"
            title="Toggle Zoom"
          >
            <i className={`fa-solid ${isZoomed ? 'fa-magnifying-glass-minus' : 'fa-magnifying-glass-plus'}`}></i>
          </button>
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-80 p-6 bg-slate-900/90 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3a86ff]/15 text-[#3a86ff] border border-[#3a86ff]/30">
                {graphic.category}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{graphic.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {graphic.description}
            </p>

            {/* Tools Used */}
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {graphic.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5"
                  >
                    <i className="fa-solid fa-check text-[#3a86ff] text-[10px]"></i>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Tags
              </p>
              <div className="flex flex-wrap gap-1.5">
                {graphic.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-2 mt-6">
            <a
              href={graphic.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#3a86ff] hover:bg-[#2563eb] text-white flex items-center justify-center gap-2 transition-colors"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>Open Full Size Image</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 text-center transition-colors"
            >
              Order Similar Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { VideoProject } from '../types';

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          video.isShort ? 'max-w-md' : 'max-w-4xl'
        } bg-[#0c1222] border border-white/15 rounded-3xl overflow-hidden shadow-2xl transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#3a86ff]/20 text-[#3a86ff] flex items-center justify-center text-sm font-bold">
              <i className="fa-solid fa-play"></i>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                {video.title}
              </h3>
              <p className="text-xs text-slate-400">{video.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            title="Close"
          >
            <i className="fa-solid fa-xmark text-base"></i>
          </button>
        </div>

        {/* Video Player Container */}
        <div
          className={`w-full bg-black relative ${
            video.isShort ? 'aspect-[9/16] max-h-[75vh]' : 'aspect-video'
          }`}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Modal Footer / Info */}
        <div className="p-4 sm:p-5 bg-slate-900/80 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-slate-300 leading-relaxed">{video.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {video.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-[#ff0000] text-white hover:bg-[#d90000] flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fa-brands fa-youtube text-sm"></i>
            <span>Watch on YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
};

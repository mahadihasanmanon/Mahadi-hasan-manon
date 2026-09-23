import React from 'react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      id: 'srv-video',
      icon: 'fa-solid fa-film',
      title: 'Video Editing & Post-Production',
      tagline: 'Cinematic, Engaging & High Retention',
      description:
        'Transforming raw camera footage into immersive visual stories. Perfect for YouTube creators, podcasts, brand documentaries, and corporate presentations.',
      deliverables: [
        'Multi-cam editing & audio sync',
        'Story-driven pacing & rhythm cutting',
        'Cinematic color grading & skin retouching',
        'Immersive Foley sound design & mixing',
      ],
      badge: 'Most Popular',
    },
    {
      id: 'srv-motion',
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Motion Graphics & VFX',
      tagline: 'Kinetic Energy & Visual Identity',
      description:
        'Breathing life into static designs through fluid animations, kinetic typography, eye-catching visual effects, and customized branded assets.',
      deliverables: [
        'Kinetic typography & caption animation',
        'Custom logo stings & intro/outro animations',
        '2D visual effects & screen tracking',
        'Engaging lower thirds & title cards',
      ],
      badge: 'High Impact',
    },
    {
      id: 'srv-graphics',
      icon: 'fa-solid fa-palette',
      title: 'Graphic Design & Photo Manipulation',
      tagline: 'Surreal Visuals & High-Converting Ads',
      description:
        'Creating high-CTR social media ad creatives, surreal product photo manipulations, editorial posters, and distinctive brand assets.',
      deliverables: [
        'Complex product photo manipulation & compositing',
        'Social media advertising campaigns (FB/IG)',
        'Event posters, banners & typography art',
        'High-CTR YouTube thumbnail design',
      ],
      badge: 'Visual Craft',
    },
    {
      id: 'srv-shorts',
      icon: 'fa-solid fa-bolt',
      title: 'Viral Shorts & Reels Package',
      tagline: 'Engineered for Maximum Retention',
      description:
        'Short-form vertical video production designed to stop users from scrolling and skyrocket viewer engagement on TikTok, Reels, and YouTube Shorts.',
      deliverables: [
        'Hook optimization in the first 3 seconds',
        'Trendy Alex Hormozi style animated subtitles',
        'Dynamic B-roll integration & sound punchlines',
        '9:16 vertical resolution master export',
      ],
      badge: 'Trending 2026',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Premium Creative <span className="text-[#3a86ff]">Services</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Comprehensive creative solutions tailored to amplify your digital presence, boost engagement, and drive conversions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a86ff]/10 rounded-full blur-2xl group-hover:bg-[#3a86ff]/25 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3a86ff]/10 text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white flex items-center justify-center text-2xl transition-all shadow-md">
                    <i className={service.icon}></i>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-[#3a86ff] border border-[#3a86ff]/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#3a86ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <i className="fa-solid fa-circle-check text-[#3a86ff] text-xs shrink-0"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to start?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#3a86ff] transition-colors"
                >
                  <span>Request a Quote</span>
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

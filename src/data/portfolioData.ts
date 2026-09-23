import { PortfolioConfig } from '../types';
import aiAvatarImg from '../assets/images/profile_portrait_1790068744270.jpg';

/**
 * =======================================================================
 * DYNAMIC PORTFOLIO CONFIGURATION
 * =======================================================================
 * Everything in this website is dynamically driven by this single configuration file.
 * You can effortlessly change your name, contact info, images, videos, skills,
 * API tokens (Telegram, Google Sheet), and links without touching the UI design.
 */
export const portfolioData: PortfolioConfig = {
  personalInfo: {
    name: 'MAHADI HASAN MANON',
    tagline: 'Visual Storyteller & Creative Designer',
    subtitles: [
      'Professional Video Editor',
      'Motion Graphics Artist',
      'Visual Graphic Designer',
      'Post-Production Specialist',
    ],
    bio: 'Passionate and results-driven Video Editor and Graphic Designer with deep expertise in crafting compelling visual narratives, viral high-retention social content, sleek motion graphics, and high-impact commercial branding. Transforming raw ideas into cinematic experiences with 2026 cutting-edge aesthetics.',
    phone: '01884232158',
    email: 'mahadihasanmanon@gmail.com',
    location: 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka',
    workplace: 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka',
    hometown: 'Feni, Bangladesh',
    experienceYears: '3+ Months',
    completedProjects: '50+',
    happyClients: '98%',
    avatarAiUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVhQuURsphUuKwGMjXeQLtnZ_1qC_RZVMsW634YwYgSjA0i20s1kRy76kUH3scqWyEWmFbYnuUEwrQVfxYdlEj0Gme1y0x-hnX-HOiJaKz1MxVpOndQiS4vnRInE947ytM7LUEW2j1ikFkVW7hiHMIqC85Oifl6ydH59AuX825AxZOwKw0gSmDeSID-tzC/s1600/ChatGPT%20Image%20Sep%2022,%202026,%2008_10_07%20PM.png',
    avatarOriginalUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5M1e00hOH1_B_FYWBcP-7Ke8jIwYMSDJRCqqGc9cAPjxyvXOO06TRnHcyJEUudGd-oWOdcPnSTNHZdFTVraXtt6pN7NxETgVVkXCMscgTkTBkB6vRKIpRW2LUduWXcRsZtC09docvqFR-Y9uc5P1FoZUUE7uOeDPM2xW14h0l0uYLz_2z0gF3Af_ovdem/s320/484471516_1821067138667833_7335545543480784399_n.jpg',
    useAiAvatar: true,
    availableForHire: true,
  },

  socialLinks: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/mahadihasan.mahadihasan.9465177/',
      iconClass: 'fa-brands fa-facebook-f',
      color: '#1877f2',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/mahadimanon',
      iconClass: 'fa-brands fa-behance',
      color: '#0057ff',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahadi-hasan-manon-9416473b2/',
      iconClass: 'fa-brands fa-linkedin-in',
      color: '#0a66c2',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com',
      iconClass: 'fa-brands fa-youtube',
      color: '#ff0000',
    },
  ],

  skills: [
    {
      name: 'Video Editing & Pacing',
      level: 95,
      category: 'editing',
      iconClass: 'fa-solid fa-film',
      badge: 'Expert',
    },
    {
      name: 'Motion Graphics & VFX',
      level: 90,
      category: 'motion',
      iconClass: 'fa-solid fa-wand-magic-sparkles',
      badge: 'Advanced',
    },
    {
      name: 'Graphic & Poster Design',
      level: 94,
      category: 'graphics',
      iconClass: 'fa-solid fa-palette',
      badge: 'Expert',
    },
    {
      name: 'Color Grading & LUTs',
      level: 88,
      category: 'editing',
      iconClass: 'fa-solid fa-sliders',
      badge: 'Advanced',
    },
    {
      name: 'Sound Design & Audio Mixing',
      level: 85,
      category: 'editing',
      iconClass: 'fa-solid fa-headphones',
      badge: 'Skilled',
    },
    {
      name: 'Typography & Visual Layout',
      level: 92,
      category: 'graphics',
      iconClass: 'fa-solid fa-font',
      badge: 'Expert',
    },
  ],

  softwareTools: [
    {
      name: 'Adobe Premiere Pro',
      level: 'Advanced Master',
      iconClass: 'fa-solid fa-video',
      description: 'Timeline editing, multi-cam synchronization, rhythm cutting, and seamless transitions.',
    },
    {
      name: 'Adobe After Effects',
      level: 'Motion Specialist',
      iconClass: 'fa-solid fa-cube',
      description: 'Kinetic typography, 2D/3D visual effects, tracking, lower thirds, and intro animations.',
    },
    {
      name: 'Adobe Photoshop',
      level: 'Photo Manipulation Pro',
      iconClass: 'fa-solid fa-image',
      description: 'Complex photo compositing, high-conversion YouTube thumbnails, and digital artwork.',
    },
    {
      name: 'Adobe Illustrator',
      level: 'Vector Master',
      iconClass: 'fa-solid fa-bezier-curve',
      description: 'Vector logo design, iconography, branding assets, and scalable graphics.',
    },
    {
      name: 'DaVinci Resolve',
      level: 'Color Grading',
      iconClass: 'fa-solid fa-circle-half-stroke',
      description: 'Cinematic color correction, film looks, node-based grading, and audio mastering.',
    },
    {
      name: 'Audition & Sound Tools',
      level: 'Audio Engineering',
      iconClass: 'fa-solid fa-music',
      description: 'Foley sound effects, noise reduction, vocal clarity enhancement, and dynamic audio beats.',
    },
  ],

  videoProjects: [
    {
      id: 'vid-1',
      title: 'Cinematic Commercial Reel & Visual Cut',
      category: 'Video Editing',
      youtubeId: 'g2mua3iiDhY',
      youtubeUrl: 'https://youtu.be/g2mua3iiDhY',
      isShort: false,
      duration: 'Full HD',
      description:
        'Fast-paced cinematic montage highlighting rhythm, dynamic sound design, precision speed ramping, and seamless shot transitions.',
      tags: ['Commercial', 'Cinematic', 'Sound Design', 'Speed Ramp'],
    },
    {
      id: 'vid-2',
      title: 'Viral Motion Short & High-Retention Hook',
      category: 'YouTube / Shorts',
      youtubeId: 'd9m2sQmkrXY',
      youtubeUrl: 'https://www.youtube.com/shorts/d9m2sQmkrXY',
      isShort: true,
      duration: 'Shorts 9:16',
      description:
        'High-energy vertical short optimized for maximum viewer retention, featuring dynamic kinetic captions, sound FX, and engaging visual hooks.',
      tags: ['Shorts', 'Kinetic Text', 'Viral Hook', 'Reels'],
    },
    {
      id: 'vid-3',
      title: 'Creative Visual Narrative & Montage',
      category: 'Video Editing',
      youtubeId: 'CYaD4igzYmo',
      youtubeUrl: 'https://youtu.be/CYaD4igzYmo',
      isShort: false,
      duration: 'Full HD',
      description:
        'Story-driven visual editing with color correction, atmospheric sound design, and emotional pacing tailored for digital audiences.',
      tags: ['Storytelling', 'Color Grade', 'Atmospheric', 'VFX'],
    },
    {
      id: 'vid-4',
      title: 'Dynamic Motion Graphic & Trend Shorts',
      category: 'YouTube / Shorts',
      youtubeId: '7t3P-I5hY4s',
      youtubeUrl: 'https://youtube.com/shorts/7t3P-I5hY4s',
      isShort: true,
      duration: 'Shorts 9:16',
      description:
        'Engaging short-form video edit utilizing trending motion graphic overlays, sound effects, and fast-paced aesthetic sequencing.',
      tags: ['Motion Graphics', 'Shorts', 'Social Media', 'Trendy'],
    },
    {
      id: 'vid-5',
      title: 'Promotional Brand Story & Video Production',
      category: 'Commercial',
      youtubeId: 'X3ZJdg2MJoM',
      youtubeUrl: 'https://youtu.be/X3ZJdg2MJoM',
      isShort: false,
      duration: '4K Ultra',
      description:
        'Professional commercial video cut designed for business branding, corporate messaging, and high-impact visual delivery.',
      tags: ['Branding', 'Promo', 'Color Grading', 'Commercial'],
    },
    {
      id: 'vid-6',
      title: 'Dynamic Kinetic Motion & Vertical Reel',
      category: 'YouTube / Shorts',
      youtubeId: 'nHzBbqqNp2Y',
      youtubeUrl: 'https://youtube.com/shorts/nHzBbqqNp2Y',
      isShort: true,
      duration: 'Shorts 9:16',
      description:
        'High-impact vertical video edit featuring animated typography, punchy sound design, and retention-focused visual pacing.',
      tags: ['Shorts', 'Kinetic Text', 'Sound FX', 'Reels'],
    },
    {
      id: 'vid-7',
      title: 'Cinematic Storytelling & Visual Editing Cut',
      category: 'Video Editing',
      youtubeId: '8or6I-MyfOI',
      youtubeUrl: 'https://youtu.be/8or6I-MyfOI',
      isShort: false,
      duration: 'Full HD',
      description:
        'Polished commercial video edit with seamless camera transitions, rich color grading, and audio foley synchronization.',
      tags: ['Cinematic', 'Storytelling', 'Color Grading', 'Sound Design'],
    },
    {
      id: 'vid-8',
      title: 'High-Retention Viral Shorts Edit',
      category: 'YouTube / Shorts',
      youtubeId: 'Ih2h00Nekoc',
      youtubeUrl: 'https://youtube.com/shorts/Ih2h00Nekoc',
      isShort: true,
      duration: 'Shorts 9:16',
      description:
        'Engaging short-form content edit with quick-cut pacing, dynamic zooms, pop-up graphics, and rhythmic beat sync.',
      tags: ['Viral Hooks', 'Shorts', 'Beat Sync', 'Motion'],
    },
    {
      id: 'vid-9',
      title: 'Creative Visual Effects & Motion Shorts',
      category: 'YouTube / Shorts',
      youtubeId: '922nArGSrBE',
      youtubeUrl: 'https://youtube.com/shorts/922nArGSrBE',
      isShort: true,
      duration: 'Shorts 9:16',
      description:
        'Creative social media short showcasing modern visual effects, split-second speed ramping, and eye-catching visual hooks.',
      tags: ['VFX', 'Shorts', 'Speed Ramp', 'Visual Hook'],
    },
    {
      id: 'vid-10',
      title: 'Modern Documentary & Narrative Editing',
      category: 'Video Editing',
      youtubeId: 'JUoIkmVvWkw',
      youtubeUrl: 'https://youtu.be/JUoIkmVvWkw',
      isShort: false,
      duration: 'Full HD',
      description:
        'Documentary-style video pacing with atmospheric B-roll integration, voiceover balance, and compelling narrative flow.',
      tags: ['Documentary', 'B-Roll', 'Narrative', 'Pacing'],
    },
    {
      id: 'vid-11',
      title: 'Commercial Promo & Brand Film Cut',
      category: 'Commercial',
      youtubeId: '6YRMlw1WKMo',
      youtubeUrl: 'https://youtu.be/6YRMlw1WKMo',
      isShort: false,
      duration: '4K Ultra',
      description:
        'High-production commercial showcase highlighting crisp sound design, balanced grade curves, and brand messaging.',
      tags: ['Commercial', 'Promo', 'Brand Film', 'Sound Design'],
    },
    {
      id: 'vid-12',
      title: 'Cinematic Visual Montage & Color Grade',
      category: 'Video Editing',
      youtubeId: 'gGGpl1_zT38',
      youtubeUrl: 'https://youtu.be/gGGpl1_zT38',
      isShort: false,
      duration: 'Full HD',
      description:
        'Paced visual montage highlighting dynamic scene cuts, atmospheric audio layering, and cinematic color correction.',
      tags: ['Cinematic', 'Color Grading', 'Sound Design', 'Visual Cut'],
    },
    {
      id: 'vid-13',
      title: 'High-Impact Digital Commercial & Visual Cut',
      category: 'Video Editing',
      youtubeId: 'PUkgXtFtcqo',
      youtubeUrl: 'https://youtu.be/PUkgXtFtcqo',
      isShort: false,
      duration: 'Full HD',
      description:
        'Polished post-production video edit with seamless rhythm cuts, precise speed ramps, and engaging visual flow.',
      tags: ['Commercial', 'Rhythm Cut', 'Post-Production', 'Full HD'],
    },
  ],

  graphicProjects: [
    {
      id: 'gfx-1',
      title: 'Sonic Pro Speaker Manipulation Ad',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfWxaU5YTVD1iSThEUbSK3s0Ighk0Wyw8-dpQBGjUd61tfqRNpjusqEGP_DX19HnMKZ_v610YTQPhyqmCuzph-nWOlp0oHYaYC06CkOJaiBc_ttj3GsRkWj2ZmXHBK2Y0sn2OApB6eml2PYasZWXsR-xxt7hsw21nSzeCHztjixrC3RS-WY6M2V_RiqJlR/s320/speker.png',
      description:
        'Surreal product photo manipulation integrating floating audio waves, neon luminescence, and dynamic lighting composition.',
      tools: ['Photoshop', 'Lightroom'],
      tags: ['Photo Manipulation', 'Product Ad', 'Neon Lighting'],
    },
    {
      id: 'gfx-2',
      title: 'Apple iPhone Showcase Banner',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyDUj24tA-EfkOtC6ONHGWDPMO7CpRxpM4sbOQbQkbqdVG3t7gtTXScrFfGew3lp7NmEJ2IHmlassDrLQaFlZhiAOUAWo6HjK-JrPQAgKn4CDSAa_ibVQ2uumv2k-JSC04g7vJNoTYm6eGKDQdI5jIBmTph_apLTliisp1lyDEEZ5OVyU-1IPuZbtqm4RK/s320/IPHONE.png',
      description:
        'Sleek modern tech advertisement banner highlighting product reflection, luxury minimalism, and typography hierarchy.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Tech Ad', 'Banner Design', 'Minimalism'],
    },
    {
      id: 'gfx-3',
      title: 'Mahadi Artistic Poster & Identity',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje5S8iLO2kQDMTEo5eqWnWAUTRCcyH1rHD93XVv1oFd3ti8pZTc6Xn1tsDN8cJFkMlC1kjDrD3HCU0RDsogrf6d8xOQ9-zBwIXTN1pgmerlBryPrGlSK-ChZfKB7C3UQO-3kVSlsp2Tqe8qIEor5OsZmZ68L8RVr2aB_ks-KrXdvVCgo1_jWHHH-zHuAhU/s320/Mahadi-3617-1.png',
      description:
        'Personal creative signature poster combining portrait retouching, geometric framing, and modern poster aesthetics.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Poster Art', 'Personal Branding', 'Creative Composition'],
    },
    {
      id: 'gfx-4',
      title: 'Experimental Typography & Visual Concept',
      category: 'Typography',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8PyW0MK_OmbXYGMHAiEh6R7y7PaDwZtAEvXrf28fdZCTSMtnh1FxSR4r7Z7-qYKWRlD8QBcKWCQiMSCx3Jg0NO9ZNXpeGUX-E6ZbZLqJaExGbsgW_6Zo7xLjKn1lizQ6WpUdD-aefXNo0WYp0KKxC0DErbYQ-v_l2v24s_nBc3gQRhxAnXNLteiTTGfRD/s320/3617-Typography.png',
      description:
        'Bold typographic design poster exploring balance, negative space, modern letterform distortion, and striking contrast.',
      tools: ['Illustrator', 'Photoshop'],
      tags: ['Typography', 'Editorial', 'Visual Concept'],
    },
    {
      id: 'gfx-5',
      title: 'High-Impact Social Media Campaign',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg68QvIDCJD_mQoUlETbW8mPTgLQUhyTRC2__3mXEboWYrGrkeERleYgy_oc1PBCw6yFdqYBOPK_LF5SzJJ2nYeblNoOHmMsmQzCS1DbKCa68CEDqofGt0W8TftfcSEjP5uEhuIJ7uBXDU7CAouMSsIYhMqIRibuBYiRlNKEjF-aGJ8EdceFDapYVcQzcEL/s320/download%20(38).png',
      description:
        'Conversion-focused promotional graphic tailored for Facebook and Instagram marketing campaigns with eye-catching elements.',
      tools: ['Photoshop'],
      tags: ['Social Media', 'Campaign', 'Marketing'],
    },
    {
      id: 'gfx-6',
      title: 'Fresh Bottle Product Manipulation',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM04tWvtLENSWlfChzImy6PnJSYzbGv3vAX8ZPsONK2XLDDbiH-SO1FGKLkBuwj6Kxoa-fxW6tHyqevgmi-Nijaeq1waC6TmPHnMzWj6B7IEEbz5rIKxem3wViWFfYdbKmpFjlLQNlZhifqOq89kATEN9oIvSFZPvirt_zn6f9mfl95lAAnKNJRkeR3MD5/s320/BOTTLE.png',
      description:
        'Dynamic beverage splash manipulation showcasing liquid physics, condensation details, and vibrant freshness.',
      tools: ['Photoshop'],
      tags: ['Splash Effect', 'Product Ad', 'Liquid Composite'],
    },
    {
      id: 'gfx-7',
      title: 'Creative Visual Composition IV',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzZ5RB0oP7T81ZJTULjHZnx8PML0oZXUPYTkHA750LRPjK8KdzehKrgSEZ7mJ-qvbcNyOHrZQ3aBUNudsGjjszfbYk2oD2vBnJxRDt3MKke2uJd7mPzYiI-khDxJQqKYtskO4m_X7ZXNg9MRMNbXVtl8aSsEnvSVaneeVNtvRc4icnlBb7RUiqtG5oUlYy/s320/4.png',
      description:
        'Artistic visual composition showcasing lighting harmony, vibrant color grading, and modern creative layout.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Creative Poster', 'Visual Concept', 'Art Direction'],
    },
    {
      id: 'gfx-8',
      title: 'Digital Retouch & Photo Composite #22',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp4bF5kEIGfcMKKYzlx4nTOxww24pWh71_G2xCaHnVHJ9H0X-SJ8JZADaaBca9hZVQO1Tj6TR_rzj1N_t9EZX6qszjJqqIFnovfikVGE-PAYb-yWAIDhaFeWMrNSjlWnqVMArVNl2qH73R0ozn_GR1dsbLdhGVAURxT9c8ZqhRKRjLfEn4k6N-b1by0O1R/s320/22.png',
      description:
        'High-end creative photo compositing and detailed retouching designed for digital advertising campaigns.',
      tools: ['Photoshop'],
      tags: ['Digital Art', 'Retouching', 'Compositing'],
    },
    {
      id: 'gfx-9',
      title: 'Energy Beverage Can Packaging & Mockup',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMvnm3v4OTBGWQa0-QNWiW-vfJ3JQy5bK1KxfUf0Dm6lByBDwzBZrHzO8bt8_SDnJLVSw1cC6c_N3xJTJhRXxl50tC_-ZlWksi1EQCUGI7JviXGykhHAmWeAPb3wpZBID8remCwiu9tEC20UzPUyw5OuqGlv0xUsEqfoE5FTOwclHbCpMPG06godhOeL9g/s320/can%20design2.png',
      description:
        'Custom packaging label design and 3D metallic can mockup with condensation droplets and dynamic background.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Package Design', 'Can Mockup', 'Product Branding'],
    },
    {
      id: 'gfx-10',
      title: 'Studio Headphone Commercial Manipulation',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinMDKLosP3mBGAenMygpRsVvpbKDUhdE9M1YInypd4SpQ41q37gop2qqsl1D4pGJS9P3ovqBWZOjoAbvcId1rBCJ1R7Kw18dw4VQ9WMwhcR8aiqrA9y6V2P1PJe3wQlmBxxBP5DQU25Px3kjMVgX-qP0kUfHBws0ZnVoshtRkVlTglVjprUKrzL0S6hOmN/s320/Headphone.png',
      description:
        'Audio gear commercial photo manipulation highlighting floating design acoustics and studio ambient lighting.',
      tools: ['Photoshop', 'Lightroom'],
      tags: ['Product Manipulation', 'Audio Gear', 'Commercial Ad'],
    },
    {
      id: 'gfx-11',
      title: 'Brand Identity Mockup Series II',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSUVQFAQS63DWSh7uASzK34D-_zyCFDsQK9THIsVSd-2HAdI9OJFECLb9u2-VmlHF4iXgEhGroDbxUKURjOLlRqU_PCkpueAA8B4CslLCbPSHxpelVTVxzOm_eWLx7CeWAexSfwJXe37PFS6udUFX0-FF4kunCZ5fkhyphenhyphenIODV_cQzbhi5s8jUO3krft6t7J/s320/Mahadi_3617_Mockup2.png',
      description:
        'Complete visual identity branding package presentation displayed on premium stationery mockups.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Brand Identity', 'Mockup', 'Stationery'],
    },
    {
      id: 'gfx-12',
      title: 'Visual Identity Display Mockup III',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXFkUZkwkzkHTFMs2h0c3XVvViC0CQeJS5b_yDCIqcGXCko1qkL-78PGoLPE57bH1nPgfwvGORjJvDvrztzdgvGc9wA-_f4-rjxRLFi1JQvyg0C5k_boD4UoN5_um2mH0bVn_jGar7aXWk8S7tF8bMD3LM9I4tEszH-QWZq6ESbvbJ_FUjkxnZNvFnKq8G/s320/Mahadi_3617_Mockup3.png',
      description:
        'High-contrast brand mark showcase presented in realistic lighting environments with textured materials.',
      tools: ['Photoshop'],
      tags: ['Mockup Presentation', 'Identity', 'Visual Design'],
    },
    {
      id: 'gfx-13',
      title: 'Editorial & Print Design Mockup IV',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiOI4e3Nq_pzuQmlSx757G-E6UWZtXkg7iATBgZm3xQP8x3PMwI9jvcWrHyT_H9lwNn2PdCuTGL4wms22gdgF5q0eEkMICkB1upP1b44UrQCEowsnQIhUi3KlAhUFlOFdyJSIYOvUoB6vr0YvHSN9t6-zOCiziNk1QbXo9JlmpxEpb6_h2kvGVBj_SODEs/s320/Mahadi_3617_Mockup4.png',
      description:
        'Brochure and editorial layout display demonstrating typography structure, hierarchy, and paper texture.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Print Design', 'Editorial', 'Mockup'],
    },
    {
      id: 'gfx-14',
      title: 'Corporate Stationery & Branding Mockup V',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0Adsfz-oKgXCsu8bWmRrps765LE2e34Zi3rfLUViLDR2jXwgWMb7UIwUEfKaBViT6ET0-TSPTOsayWZO81A7BpN5u3js-U6wT23zvu6pSVCtOP31nS90Oktk7C2Jmd5c21Y56eVr5kJSfda1-lgzhkrP0ObqUe7IcapRBgUne7L1aPXMh8C9Tb7k6nVVR/s320/Mahadi_3617_Mockup5.png',
      description:
        'Corporate stationery branding kit featuring business cards, envelopes, letterhead, and branded assets.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Corporate Branding', 'Mockup Kit', 'Stationery'],
    },
    {
      id: 'gfx-15',
      title: 'Creative Merchandising Mockup VI',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQdbDBhxRJOWLHuFoxAkYIw8HFmTOp9l9d90FnxiQ3cSl7NcutfFAUfAQbYH0YNZgqK3P6J4Oi0i-6ha8Wn8wo7A-eSzqi7jYVwDcJzQBcMPnVHqRsdkSPSzBnGJJVzaJialJqibeNliuhD6mwcTz2h9vILkFaJFvJswzyGBFxPjH9oNwt0rKnf2AJEv82/s320/Mahadi_3617_Mockup6.png',
      description:
        'Custom merchandise apparel and promotional item mockup designed for brand merchandise campaigns.',
      tools: ['Photoshop'],
      tags: ['Merchandise', 'Mockup', 'Apparel'],
    },
    {
      id: 'gfx-16',
      title: 'Premium Brand Showcase Mockup XVIII',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCTRtdwEI8Z3hQOaJIapsv3kq33QEH1S_MfObV86fCve5WWDiJsPCfDSursdbkYk_XaaP55opvWUThLRXySZl2GG73Fj2refaM8J04OHoyre-iI0SCdgszStRZBBoH9rdIs3AulQQ_-f4dJdmv83Qgg8wDC8wiOjaw5L1NmMlt3ttspCa8ffSuZ7gm9R7Z/s320/Mahadi_3617_Mockup18.png',
      description:
        'Elegant showcase mockup capturing depth, shadow fidelity, and refined tactile brand elements.',
      tools: ['Photoshop'],
      tags: ['Premium Mockup', 'Portfolio Item', 'Identity'],
    },
    {
      id: 'gfx-17',
      title: 'Mahadi Signature Visual Identity',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieDvWLMTgF9hy4bxOxD_72_-tsdNoJadtjgZddJ6822Q3TUgXt12T9mVdz0xY7fgHhxEOPjLEFDDgeYmSe8givaZyMrG5N2l3zZkOaTMtgEVxORzdgBPIVx3REuVd5Gxhbsglqv75fhWnI2mAsfSN2MlKJcze1hyphenhyphencUxUOKNmsmpwWqs2Rue2GHE-Nk7SYo/s320/Mahadi-3617.png',
      description:
        'Personal creative monogram and signature visual identity poster with modern aesthetic treatment.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Signature Identity', 'Poster', 'Art Direction'],
    },
    {
      id: 'gfx-18',
      title: 'Geometric Creative Poster 01',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrYhB3a6-aVrGsYY0VK8UsoWHx82ox_RWjA9IqnSC8tY4Fx1a8t1b-W4SZJnqI5T8PgyGgvNc8LVodE-DKksMrQb7lCyT6Zh70QrbjLNKC3aRlW8YZdJJrsjxls9uO2RL5V285W8sopJftG5amdK6K91LET8ddFYk2M4F1PMaGDjXucdvSmN1A1vPSjM2k/s320/MAHADI-3617-01.png',
      description:
        'Abstract geometric shapes paired with sharp color blocks and clean typography layout.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Poster Art', 'Geometric', 'Creative Visual'],
    },
    {
      id: 'gfx-19',
      title: 'Modern Typography Composition 02',
      category: 'Typography',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_tlO-lyHiop3cdhcQWWWZsPIN29QO1Y22jMYCEFWtFGPGIQQFix6jVdmNAdJewTNuIsetNI-fWrLeO_jVC64bLZ7WV_NsfML9bawKmWZMsWubRS0kuRtUyykVayNBQmD0i_sg9k0c-zpPj96NkiH47fCuDv46hUJBPBzlBRxG6CM9AqYLq4yAr_ayDAl9/s320/MAHADI-3617-02.png',
      description:
        'Sophisticated typographic editorial artwork testing letter spacing, negative space, and rhythm.',
      tools: ['Illustrator', 'Photoshop'],
      tags: ['Typography', 'Editorial Poster', 'Clean Design'],
    },
    {
      id: 'gfx-20',
      title: 'Social Media Promotional Creative 03',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCj1eMLHZRBTDZJG-vCBXtP4tduPhyOQWlpH-H0LGpt-9gqwimvFCUu8FuF4AGMMsN7iSkt8dAKS4pxPsQ1SlhPa0H3JirWm0rBaB5rXT8_xQNU6_p8UATUBkU88g7Kt0T4JBN3ZdqGuHc8nFnvHWvp1u-C_h70Z42XZIxSV0sYzDCTxNj_UNSzTMDV2I3/s320/MAHADI-3617-03.png',
      description:
        'Marketing advertisement creative tailored for social media conversion and high click-through rates.',
      tools: ['Photoshop'],
      tags: ['Social Media', 'Ad Creative', 'Promotion'],
    },
    {
      id: 'gfx-21',
      title: 'Commercial Brand Campaign Poster 05',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcbFLzaTU5ExlKEz8CsmvBZteCXzxCFS0ira6CbEQ88qGE69tUoSBaMDiJAORGNg8BZrPIvukl7RuA00tYbOD3lY3ma7qPn56aRQvQNW2rKTaho_aMjLQxfb481i1DFg6ebYmSs93emKt0eK_mKRevY5LEE27domePXGLK0cajkKv2Dg5zHXOXX36jMn51/s320/MAHADI-3617-05.png',
      description:
        'Commercial banner poster design featuring compelling focal points and brand hierarchy.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Brand Campaign', 'Commercial', 'Poster Art'],
    },
    {
      id: 'gfx-22',
      title: 'Minimalist Product Banner 06',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjckVcgrhyKa6m7y-gO5d50KE-DbcEBUpN1PykScG-ZyNFc6YqlduJleH-bSO5qb83MzX0vWSkR8MuV_3oQCx11E05V1j2J8nUPL4GtorRexW_Lo1uHninS20yeaTfDcNoik0UejUsByQ-WYOXNqyntTzHkGBHg8ImmD7D1nzb2f12hmKms1dSVtjLTwDS_/s320/MAHADI-3617-06.png',
      description:
        'Crisp minimalist product promotional composition emphasizing form, texture, and refined tone.',
      tools: ['Photoshop'],
      tags: ['Minimalist Banner', 'Product Display', 'Composition'],
    },
    {
      id: 'gfx-23',
      title: 'High-Impact Promotional Visual 07',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqE9FmsuQCdN6jzQfUlQvxxTq9ynz-zOezgAaYX2Kmk2wIZPGuP7GzCjjQEyemSuKraZunARlq9MrnkLjpt4XmMjs_YnwHvrw4NYmQG01LcUvGZ57hHvDoOcujvTs5imrgSREVDnHnc8UMnMtM5h5hgzF9rOWxl-8HpO0d5OmnDhPxrd77P-eaUhAGy7kc/s320/MAHADI-3617-07.png',
      description:
        'Eye-catching promotional marketing design created with vibrant gradients and layered typography.',
      tools: ['Photoshop'],
      tags: ['Marketing Poster', 'Digital Media', 'Visual Arts'],
    },
    {
      id: 'gfx-24',
      title: 'Cinematic Visual Arts Poster 09',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSZ4v2-3nmBDtzBYUkXN0bJJPDA57v4H08dTaRZa7mfFOOSjqlkCigvfXd-CFGOI76ecLzWqRYZL_3DWCNRAeZrCTzyBAyrv3d8AtqPDT3-k48kuS-0iWxKuB-rWirnPHXH6q9B0JfCU8zxW-RCgOiEA9F3L6KFeyyED4HRYF3Ti0NGjxjTLqTtRyfNyhW/s320/MAHADI-3617-09.png',
      description:
        'Cinematic lighting and color-graded visual artwork crafted with post-production precision.',
      tools: ['Photoshop', 'Lightroom'],
      tags: ['Cinematic Poster', 'Color Grading', 'Art Piece'],
    },
    {
      id: 'gfx-25',
      title: 'Creative Brand Visual Composition 11',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWT67Q6k_-DH7oLfDV_lZZ0XQug8U-3W-Gr9Q2ab1mKuyhutzDdcO-qR3xYsQJjemMlFdUSWlxOUU4scNqIg_XOw3y8ZICc0mJp9T0uTlgLghBl6V1g-SWOIP6NL23g1sY6lgz40sskuK149FnADdTzJNuxs_PYJjAgeLVzm4uScKMDRJDGqoqiG9Ehe5f/s1600/MAHADI-3617-11.jpg',
      description:
        'Dynamic commercial visual layout featuring layered typography, balanced focal elements, and modern color harmony.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Brand Visual', 'Creative Design', 'Poster Art'],
    },
    {
      id: 'gfx-26',
      title: 'High-Impact Brand Identity Design 13',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_sGMz1YYVtpkc8k7fdVPsdx0mxtWV-79aINvpOboDZ1wtBFx5PXHda0M7JCpj9VaGE9_L9QWAW5tQgyKJ24vF6IdBoi_vcTolC6lAMy-2Ou9qR_XPzXbIEOprEhvDKokOM2aq1gfDdlqYiNFeGtvSnokrSMErwxnT4wf9VGRknn9C_ZYkYgs47YhSCOK5/s1600/MAHADI-3617-13.png',
      description:
        'Striking brand identity showcase with high visual contrast, refined negative space, and modern typographic arrangement.',
      tools: ['Photoshop', 'Illustrator'],
      tags: ['Brand Identity', 'Visual Concept', 'Modern Design'],
    },
    {
      id: 'gfx-27',
      title: 'Premium Branding Presentation Mockup XVII',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvJY1ySnZa7181nwpCgsLOhVJtoPZ0n8CEeCh7Y2ROurQxNmqKKwyFD_4rZipzzH0y3R7CTph1AnYyGwyctUOcL9ZPaTQ6JrG5V2tu4AN6DlsfTsrFV6AKCKtqRY_GUoBFE0epCsIUdc791ddJQrPhsFsIBMr98HKuzm1MTZA2ZShK78-lf0uGpmtOTO2P/s1600/mockup17.png',
      description:
        'Realistic 3D stationery and brand merchandise mockup rendered with soft studio shadows and tactile materials.',
      tools: ['Photoshop'],
      tags: ['Product Mockup', 'Branding', 'Realistic Lighting'],
    },
    {
      id: 'gfx-28',
      title: 'Executive Brand Identity Showcase Mockup XVIII',
      category: 'Branding',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcfYX0atN_3fTOD9cwCKY0vcqNbCni-T5AnG1-hkHa01u-oBHWUrFjyFdzxYxP1Y1NuQ9xiqoyiNYstLClsJpe4UVOY0j5V6ORmKH4HFzyM61K0Z09GPZCgpAjLkPJ0gZO5J6ClRrPimB4xRoM519WR86OFd0h3arZD78iYKUhrjF4az6XvB1TRSI1OWQS/s1600/mockup18.png',
      description:
        'Executive identity package presentation emphasizing clean visual hierarchy, embossing details, and surface textures.',
      tools: ['Photoshop'],
      tags: ['Executive Branding', 'Stationery Mockup', 'Portfolio'],
    },
    {
      id: 'gfx-29',
      title: 'Precision Vector Artwork & Pen Tool Study II',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBRoN2xpDEgKQQPV13DvynObWYEchDjJ9IlewNnYq52aGgiWiwdPJ5jR0XdzHIhTuvh7JVDn5O-dND9J6AW0OyQXdUtX1IjWVHX2YBayLHv9sDjLeUT62f0L_xC4fpZVUKLUmsCRlTOl1sg8kpTID97I2OT89iGhq9OHiXxeKY_mYmJtYACa189TWrJXRs/s1600/pen%20tool2-100.jpg',
      description:
        'Complex vector path mastery and curvature accuracy demonstrating high-precision pen tool craftsmanship.',
      tools: ['Illustrator', 'Photoshop'],
      tags: ['Vector Art', 'Pen Tool', 'Precision Path'],
    },
    {
      id: 'gfx-30',
      title: 'Advanced Vector Illustration & Pen Tool Study IV',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioOHDyGbjfCQErkaH7EVEa6ap7RpgKMnrzRdOiNkJSdddz1okPbqkrXh0AM49EM7UBy9K4rKBuO0nBrGShqtqhB-v7BzgmnEwTrzg0FfvbUfeovyDn4-QcTzeBEpCy91jJaO1ynC2N72hu2-o36Za59C6fmy6e-LYVUcjG9gqtMs6qfchALm1o1IxWNquf/s1600/pen%20tool4-100.jpg',
      description:
        'Detailed vector contouring and anchor point alignment crafted for crisp, infinite-resolution scalable illustrations.',
      tools: ['Illustrator'],
      tags: ['Vector Illustration', 'Bezier Curves', 'Path Drawing'],
    },
    {
      id: 'gfx-31',
      title: 'Master Pen Tool Vector Path Composition',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-TYzEoSZMeGyCa9fuqwpJwKeG4zoRYJ807SwurSZ8fl7aC_SD6rB0BSX6oGx0Xe5J5hoPB42N0bTyAg2_hTy57rENTBuYo0KZYvC_0gJAxNtXeaJaVP1TKPCm1wh3B1-dYQvP0IgZDIDI6DAAI3l6r5DIQJAS1FppGDqR1ZILatWdFbE9IwYZRbeLr1MO/s1600/pen%20tool-100.jpg',
      description:
        'Foundational vector mastery piece showcasing refined Bezier curve precision, smooth geometric arcs, and clean linework.',
      tools: ['Illustrator'],
      tags: ['Vector Design', 'Precision Drawing', 'Anchor Points'],
    },
    {
      id: 'gfx-32',
      title: 'Photoshop Professional Mastery & Certification Piece',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQzHLPeDl8zv53-VfB1-j6gK1vWqsPUB7wp0s1R3AlpuPIfngwjbaU2vQiqZ27Voa0oOFNEjobdSLLv5fSJQhzWAp_QvBsanWG_3GGghyFD65HtAdXrRsiQgUnPuQ7PC0lHP6EfahiR1hhHggjuFsJQCFqUSXUtNyit8o2Qbdlfis33D-N2emZIxIKE1wA/s1600/Photoshop%20Examination.png',
      description:
        'Comprehensive Adobe Photoshop technical examination project highlighting multi-layer blending, masking, and tonal grading.',
      tools: ['Photoshop', 'Lightroom'],
      tags: ['Photoshop Mastery', 'Advanced Compositing', 'Retouching'],
    },
    {
      id: 'gfx-33',
      title: 'Artistic Photo Retouch & Visual Composite XV',
      category: 'Product Manipulation',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv7NbZlJc_rvw1xlYWAMgISHI8Ae1SYVnxjQQZaDrJC-P3ZPl-aIa6UaFWiQHzdxEDzSaqYgFrS2uM8FUWBC5gLCqI3O2y275vL0xkgYva4Vh9GYoywMT4E3qAsOStNMOasOTvmZLFWJfAAH6T0W48B6htbnm35dwx9470hFEZB4Q8wanyc17VSlGr8wwm/s1600/PIC15.jpg',
      description:
        'Intricate digital photo composite with selective color grading, high-frequency separation retouching, and atmospheric depth.',
      tools: ['Photoshop'],
      tags: ['Photo Retouch', 'Compositing', 'Studio Lighting'],
    },
    {
      id: 'gfx-34',
      title: 'Creative Visual Narrative & Composite XVI',
      category: 'Graphic Design',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDtieN_T7dt1Yw-MNCsQ77EVkNbIiP68NwXxvVnihipZixm5IDg-f_lznCHv0_-dO6S34hK9az57cXorzHzM3qBQ31KTqKHyenE5hEeZrL3EdNkH9Xl1iUZhDueyP23ndQ0tXL79q8VzEzJJEj310-qkLsGZA3QjOmOhAdfHL711QDnqnrhta1ddCfYRU1/s1600/PIC16.jpg',
      description:
        'Atmospheric creative artwork highlighting cinematic lighting direction, depth-of-field separation, and fine detail polishing.',
      tools: ['Photoshop', 'Lightroom'],
      tags: ['Creative Composite', 'Visual Art', 'Color Grading'],
    },
  ],

  experiences: [
    {
      period: '7 Years',
      role: 'Shop Manager',
      companyOrType: 'Shabnaz Matching Corner',
      description:
        'Managed overall daily store operations, ensuring smooth workflow, excellent customer service, inventory optimization, and long-term business revenue growth.',
      highlights: [
        'Managed overall daily store operations, ensuring smooth workflow, excellent customer service, and a pleasant shopping environment.',
        'Supervised, trained, and guided store staff to maintain high performance and achieve sales targets.',
        'Oversaw daily sales transactions, billing, cash counter management, and financial reconciliation accurately.',
        'Monitored inventory levels, coordinated stock updates, placed orders for new arrivals, and managed display organization to enhance visual merchandising.',
        'Built and maintained strong, long-term relationships with customers to ensure high satisfaction, repeat business, and brand loyalty.',
        'Handled vendor relations, resolved customer complaints, and implemented strategies to boost overall store revenue.',
      ],
    },
    {
      period: '3 Months Course',
      role: 'Small Business Management',
      companyOrType: 'As-Sunnah Skill Development Institute',
      description:
        'Completed an intensive 3-month professional course on Small Business Management, focusing on entrepreneurship, digital operations, client management, and creative business strategy.',
      highlights: [
        'Comprehensive training in small business operations and digital client management',
        'Financial planning, project costing, service pricing, and delivery milestones',
        'Professional ethics, business communication, and long-term brand building',
      ],
    },
    {
      period: '3+ Months Practice',
      role: 'Video Editor & Motion Artist',
      companyOrType: 'Freelance & Creator Collaborations',
      description:
        'Specializing in high-retention YouTube video cuts, viral Shorts/Reels, brand films, and kinetic motion graphics for content creators and businesses.',
      highlights: [
        'Completed 50+ video editing, motion shorts, and graphic design projects',
        'Mastered kinetic typography, speed ramping, audio Foley, and color grading',
        'Consistent client satisfaction with prompt delivery and creative input',
      ],
    },
    {
      period: 'Creative Design',
      role: 'Graphic Designer & Visual Content Creator',
      companyOrType: 'Digital Media & Ad Creatives',
      description:
        'Crafting commercial product photo manipulations, high-CTR social media advertising posters, and typography compositions.',
      highlights: [
        'Designed high-impact advertising banners, product composites, and branding assets',
        'Proficiency in Photoshop compositing, lighting manipulation, and vector art',
      ],
    },
  ],

  educations: [
    {
      degree: 'Diploma in Engineering',
      fieldOfStudy: 'Computer Science and Technology',
      institution: 'Feni Polytechnic Institute',
      passingYear: '2024',
      result: '3.34 out of 4.00',
      description:
        'Completed a comprehensive technical engineering diploma program in Computer Science & Technology, gaining deep understanding of computational logic, digital media architectures, and creative technology.',
      highlights: [
        'Passing Year: 2024 with CGPA 3.34 out of 4.00',
        'Feni Polytechnic Institute (Government Polytechnic Institute, Bangladesh)',
        'Core focus in computing principles, software tools, digital media systems, and technical troubleshooting',
      ],
    },
    {
      degree: 'Professional Training Course',
      fieldOfStudy: 'Small Business Management',
      institution: 'As-Sunnah Skill Development Institute',
      passingYear: '2024',
      result: 'Completed with Distinction',
      description:
        'Intensive 3-month executive professional course on Small Business Management, focusing on entrepreneurship, operational workflows, and client relationship building.',
      highlights: [
        'Small business operational workflows & digital agency operations',
        'Financial planning, client communication ethics, and brand growth',
      ],
    },
  ],

  testimonials: [
    {
      quote:
        'Manon turned our raw footage into an absolute masterpiece! His sense of timing, rhythm, and sound design is second to none. Our video retention skyrocketed!',
      clientName: 'Samiul Karim',
      clientRole: 'Content Creator & YouTuber',
      rating: 5,
      projectType: 'YouTube Video & Motion Package',
    },
    {
      quote:
        'Extremely talented designer. His product photo manipulation transformed our ad campaign and brought a 35% boost in click-through rates. Highly recommended!',
      clientName: 'Tanvir Ahmed',
      clientRole: 'Brand Manager',
      rating: 5,
      projectType: 'Product Ad & Manipulation',
    },
    {
      quote:
        'Super fast turnaround, creative input, and flawless execution. Working with Mahadi is an absolute breeze. He understands 2026 digital trends deeply.',
      clientName: 'Rafiqul Islam',
      clientRole: 'Agency Director',
      rating: 5,
      projectType: 'Commercial Reels & Motion Graphics',
    },
  ],

  integrations: {
    // Replace with your real Telegram Bot token and Chat ID if desired
    telegramBotToken: '',
    telegramChatId: '',
    // Replace with your Google Apps Script Webhook URL for Google Sheets logging
    googleScriptUrl: '',
    // Embedded Google Map for Feni, Bangladesh
    googleMapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117070.7719602498!2d91.33230623194098!3d23.01594966601449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368297b4e9f3b%3A0x6d9f52f36f87498c!2sFeni!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd',
    googleMapDirectUrl: 'https://maps.google.com/?q=Feni,+Bangladesh',
    whatsappNumber: '8801884232158',
  },
};

export interface SocialLink {
  name: string;
  url: string;
  iconClass: string; // Font Awesome icon class, e.g., 'fa-brands fa-facebook-f'
  color: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'editing' | 'motion' | 'graphics' | 'tools';
  iconClass: string;
  badge?: string;
}

export interface SoftwareTool {
  name: string;
  level: string;
  iconClass: string;
  description: string;
}

export interface VideoProject {
  id: string;
  title: string;
  category: 'Video Editing' | 'Motion Graphics' | 'YouTube / Shorts' | 'Commercial';
  youtubeId: string;
  youtubeUrl: string;
  isShort?: boolean;
  duration?: string;
  description: string;
  tags: string[];
}

export interface GraphicProject {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Product Manipulation' | 'Branding' | 'Typography';
  imageUrl: string;
  description: string;
  tools: string[];
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  companyOrType: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  passingYear: string;
  result: string;
  description?: string;
  highlights?: string[];
}

export interface TestimonialItem {
  quote: string;
  clientName: string;
  clientRole: string;
  rating: number;
  projectType: string;
}

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    tagline: string;
    subtitles: string[];
    bio: string;
    phone: string;
    email: string;
    location: string;
    workplace?: string;
    hometown?: string;
    experienceYears: string;
    completedProjects: string;
    happyClients: string;
    avatarAiUrl: string;
    avatarOriginalUrl: string;
    useAiAvatar: boolean;
    availableForHire: boolean;
  };
  socialLinks: SocialLink[];
  skills: SkillItem[];
  softwareTools: SoftwareTool[];
  videoProjects: VideoProject[];
  graphicProjects: GraphicProject[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  testimonials: TestimonialItem[];
  integrations: {
    telegramBotToken: string;
    telegramChatId: string;
    googleScriptUrl: string;
    googleMapEmbedUrl: string;
    googleMapDirectUrl: string;
    whatsappNumber: string; // Clean number for wa.me link
  };
}

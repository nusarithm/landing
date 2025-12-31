export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectInterest: string;
}

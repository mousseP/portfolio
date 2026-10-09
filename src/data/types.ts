export interface SocialLink {
  name: string
  url: string
  icon: string
  label: string
}

export interface SkillItem {
  name: string
  category: 'frontend' | 'backend' | 'systems' | 'tools' | 'software' | 'design' | 'illustration'
  icon: string
  description: string
}

export interface OwnerProfile {
  name: string
  firstName: string
  lastName: string
  nickname: string
  handle: string
  title: string
  heroRole: string
  location: string
  university: string
  affiliation: string
  shortBio: string
  fullBio: string
  socialLinks: SocialLink[]
  skills: SkillItem[]
}

export interface ProjectItem {
  id: string
  title: string
  ordinal: string
  tagline: string
  description: string
  url?: string
  tags: string[]
  architecture: string
  keyFeatures: string[]
  image: string
  secondaryImages?: string[]
}

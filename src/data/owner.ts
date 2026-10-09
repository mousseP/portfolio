import type { OwnerProfile } from './types'

export const owner: OwnerProfile = {
  name: 'Keith Tabil',
  firstName: 'Keith',
  lastName: 'Tabil',
  nickname: 'Kit',
  handle: 'mousseP',
  title: 'Computer Engineering Student',
  heroRole: 'ENGINEER & DESIGNER',
  location: 'Cagayan, Philippines',
  university: 'Cagayan State University',
  affiliation: 'ICpEP.SE (Cagayan State University Chapter)',
  shortBio: 'Computer Engineering student at Cagayan State University Carig Campus',
  fullBio: "Hi, I'm Keith Tabil (mousseP), a self-taught digital and graphical artist based in the Philippines. I enjoy creating illustrations and graphical designs whenever I can. Also with a growing interest in web  design, I try my best to learn the trends and deliver what my client needs to establish their own website. ",
  quote: 'Designing software with clear purpose, solid architecture, and attention to typographic craft.',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'github',
      icon: 'Github',
      label: 'github.com/Sodayooo-dev'
    },
    {
      name: 'LinkedIn',
      url: 'linkedin',
      icon: 'Linkedin',
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      url: 'email',
      icon: 'Mail',
      label: 'email'
    }
  ],
  education: [
    {
      period: '2023 to Present',
      degree: 'BS Computer Engineering',
      institution: 'Cagayan State University',
      field: 'Computer Engineering (BSCpE)',
      highlights: 'Focus on computer systems servicing, network configuration, and hardware-software integration.'
    }
  ],
  experience: [
    {
      period: '2023 to Present',
      role: 'Lorem Ipsum or smth',
      organization: 'ICpEP.SE CSU Chapter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      skills: ['Kotlin', 'Android SDK', 'SQLite', 'Event Ops']
    },
    {
      period: '2024 to Present',
      role: 'something-something',
      organization: 'Personal Cloud & Labs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      skills: ['Ubuntu', 'Node.js', 'Apache', 'PM2', 'Networking']
    }
  ],
  languages: [
    {
      language: 'English',
      level: 'Professional Working',
      percentage: 95
    },
    {
      language: 'Tagalog (Filipino)',
      level: 'Native',
      percentage: 100
    },
    {
      language: 'Ilocano',
      level: 'Regional Native',
      percentage: 100
    }
  ],
  skills: [
    {
      name: 'CSP',
      category: 'illustration',
      icon: '/projects/csp.png',
      description: 'Digital illustration, line art, manga, and conceptual character design'
    },
    {
      name: 'Ibispaint',
      category: 'illustration',
      icon: '/projects/ibispaint.png',
      description: 'Mobile and tablet digital painting, brush customization, and sketching'
    },
    {
      name: 'Canva',
      category: 'design',
      icon: '/projects/canva.png',
      description: 'Marketing layouts, social media graphics, posters, and presentation decks'
    },
    {
      name: 'Figma',
      category: 'design',
      icon: '/projects/figma.png',
      description: 'UI/UX design, interactive wireframing, component design systems, and prototypes'
    },
    {
      name: 'Photopea',
      category: 'tools',
      icon: '/projects/photopea.png',
      description: 'Advanced raster graphics editing, PSD layer manipulation, and photo composition'
    },
    {
      name: 'PicsArt',
      category: 'tools',
      icon: '/projects/picsart.png',
      description: 'Creative photo editing, collage styling, graphic effects, and mobile typography'
    }
  ]
}

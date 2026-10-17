import type { OwnerProfile } from './types'

const base = import.meta.env.BASE_URL

export const owner: OwnerProfile = {
  name: 'Keith Tabil',
  firstName: 'Keith',
  lastName: 'Tabil',
  nickname: 'Kit',
  handle: 'mousseP',
  title: 'Computer Engineering Student, Designer and Artist',
  location: 'Cagayan, Philippines',
  shortBio: 'Computer Engineering student at Cagayan State University Carig Campus',
  fullBio: "Hi!!! I am a self-taught digital and graphical artist based in the Philippines. " +
      "I have a passion for arts, traditional, digital and crafts as well graphics and designing. " +
      "Currently pursuing a degree in Computer Engineering, I also have a growing interest in web designing." +
      "I try my best to learn the trends and deliver what my client needs to establish their own website. ",
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/mousseP',
      icon: 'Github',
      label: 'github.com/mousseP'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/keithtabil',
      icon: 'Linkedin',
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      url: 'mariekeith.tabil@gmail.com',
      icon: 'Mail',
      label: 'email'
    }
  ],
  skills: [
    {
      name: 'CSP',
      category: 'illustration',
      icon: `${base}projects/csp.png`,
      description: 'For digital illustration and animation'
    },
    {
      name: 'Ibispaint',
      category: 'illustration',
      icon: `${base}projects/ibispaint.png`,
      description: 'For mobile digital illustration and photo editing'
    },
    {
      name: 'Canva',
      category: 'design',
      icon: `${base}projects/canva.png`,
      description: 'For layouts, graphics, and publication materials'
    },
    {
      name: 'Figma',
      category: 'design',
      icon: `${base}projects/figma.png`,
      description: 'For UI/UX design'
    },
    {
      name: 'Photopea',
      category: 'tools',
      icon: `${base}projects/photopea.png`,
      description: 'For graphics and photo editing'
    },
    {
      name: 'PicsArt',
      category: 'tools',
      icon: `${base}projects/picsart.png`,
      description: 'For photo editing, collage styling, and graphics'
    }
  ]
}

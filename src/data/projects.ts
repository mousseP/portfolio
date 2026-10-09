import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'project-one',
    title: 'Web UI/UX & Interactive Design',
    ordinal: 'First',
    tagline: 'Character Concept Art, Linework & Digital Painting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://example.com',
    tags: ['CSP', 'Ibispaint', 'Character Design', 'Digital Illustration', 'Color Theory'],
    architecture: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    keyFeatures: [
      'Lorem ipsum dolor sit amet consectetur',
      'Adipiscing elit sed do eiusmod tempor',
      'Incididunt ut labore et dolore magna',
      'Excepteur sint occaecat cupidatat non proident'
    ],
    image: '/projects/tattaovet.png',
    secondaryImages: ['/projects/Recruits.png', '/projects/askaudrey.png']
  },
  {
    id: 'project-two',
    title: 'Graphic Design & Visual Identity',
    ordinal: 'Second',
    tagline: 'Brand Assets, Event Posters & Social Media Layouts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://example.com',
    tags: ['Canva', 'Photopea', 'PicsArt', 'Typography', 'Visual Identity'],
    architecture: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
    keyFeatures: [
      'At vero eos et accusamus et iusto odio',
      'Dignissimos ducimus qui blanditiis praesentium',
      'Voluptatum deleniti atque corrupti quos dolores',
      'Similique sunt in culpa qui officia deserunt'
    ],
    image: '/placeholders/project-placeholder-2.svg',
    secondaryImages: ['/placeholders/project-placeholder-3.svg', '/placeholders/project-thumb.svg']
  },
  {
    id: 'project-three',
    title: 'Digital Illustration & Character Art',
    ordinal: 'Third',
    tagline: 'Modern Web Interfaces, Wireframes & Visual Prototypes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: '',
    tags: ['Figma', 'Canva', 'Photopea', 'UI/UX Design', 'Web Layouts'],
    architecture: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    keyFeatures: [
      'Neque porro quisquam est qui dolorem ipsum',
      'Quia dolor sit amet consectetur adipisci velit',
      'Sed quia non numquam eius modi tempora',
      'Incidunt ut labore et dolore magnam aliquam'
    ],
    image: '/projects/xilonen.png',
    secondaryImages: ['/projects/agalea.png', '/projects/april.png', '/projects/envybaby.png', '/projects/feb.png', '/projects/mousse.png']
  },
]

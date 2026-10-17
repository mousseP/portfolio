import type { ProjectItem } from './types'

const base = import.meta.env.BASE_URL

export const projects: ProjectItem[] = [
  {
    id: 'project-one',
    title: 'Web UI/UX & Interactive Design',
    ordinal: 'First',
    image: `${base}projects/tattaovet.png`,
    secondaryImages: [`${base}projects/Recruits.png`, `${base}projects/askaudrey.png`]
  },
  {
    id: 'project-two',
    title: 'Graphic Design & Visual Identity',
    ordinal: 'Second',
    image: `${base}projects/edit1.jpg`,
    secondaryImages: [`${base}projects/edit2.png`, `${base}projects/edit3.png`, `${base}projects/edit4.png`, `${base}projects/edit5.png`, `${base}projects/edit6.jpg`]
  },
  {
    id: 'project-three',
    title: 'Digital Illustration & Character Art',
    ordinal: 'Third',
    image: `${base}projects/xilonen.png`,
    secondaryImages: [`${base}projects/agalea.png`, `${base}projects/april.png`, `${base}projects/envybaby.png`, `${base}projects/feb.png`,
      `${base}projects/xingqiu.png`, `${base}projects/lilia.jpg`, `${base}projects/MARCH.png`,
      `${base}projects/nov.png`, `${base}projects/twstoc.jpg`]
  },
]

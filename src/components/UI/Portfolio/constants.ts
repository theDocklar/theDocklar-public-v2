export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
};

// For desktop
export const desktopHeaderPhrase = [
  'How we transformed',
  "brands' online presence",
];
export const desktopParagraphPhrase = [
  'Selected case studies that blend craft, performance and measurable outcomes.',
  'Real products, real impact — designed and built with care.',
];

// For mobile
export const mobileHeaderPhrase = [
  'How we transformed',
  "brands' online presence",
];
export const mobileParagraphPhrase = [
  'Selected case studies that blend craft and performance.',
  'Real products, real impact.',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sathkara — Sathkara end to end Donation web application',
    description: 'Sathkara is a web application that allows users to donate to a cause. It is a full stack application that uses Next.js, TypeScript, and Framer Motion.',
    category: 'Web App',
    image: '/images/portfolio1.png',
    link: 'https://sathkara.org'
  },
  {
    id: 2,
    title: 'Perfomad',
    description: 'Perfomad is a portfolio agency website that allows users to showcase their work and drive conversions.',
    category: 'Agency Website',
    image: '/images/portfolio2.png',
    link: 'https://perfomad.com'
  },
  {
    id: 3,
    title: 'VetmaxPharma',
    description: 'VetmaxPharma is a product catalogue website that allows users to showcase their products and drive conversions.',
    category: 'Product Catalogue ',
    image: '/images/portfolio3.png',
    link: 'https://vetmaxpharma.com'
  },
  {
    id: 4,
    title: 'Vision Haven',
    description: 'Quantity Survey agency website that allows users to showcase their work and drive conversions.',
    category: 'Agency Website',
    image: '/images/portfolio4.png',
    link: 'https://visionhaven.co'
  },
  {
    id: 5,
    title: 'Teragon Solutions',
    description: 'Quantity Survey agency website that allows users to showcase their work and drive conversions.',
    category: 'Agency Website',
    image: '/images/teragon.png',
    link: 'https://teragonsolutions.com'
  },
  {
    id: 6,
    title: 'Growth Lab',
    description: 'Quantity Survey agency website that allows users to showcase their work and drive conversions.',
    category: 'Personal Portfolio',
    image: '/images/growthlab.png',
    link: 'https://growthlab.lk'
  }
];

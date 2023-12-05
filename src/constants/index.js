import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  shoppi,
  bookstore,
  portfolioTailwindCss,
  instagram,
  emporio,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  //   {
  //     imageUrl: motion,
  //     name: 'Motion',
  //     type: 'Animation',
  //   },
  //   {
  //     imageUrl: mui,
  //     name: 'Material-UI',
  //     type: 'Frontend',
  //   },
  //   {
  //     imageUrl: nextjs,
  //     name: 'Next.js',
  //     type: 'Frontend',
  //   },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  //   {
  //     imageUrl: redux,
  //     name: 'Redux',
  //     type: 'State Management',
  //   },
  //   {
  //     imageUrl: sass,
  //     name: 'Sass',
  //     type: 'Frontend',
  //   },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  //   {
  //     imageUrl: typescript,
  //     name: 'TypeScript',
  //     type: 'Frontend',
  //   },
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/dafahfabiansyah',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
  {
    name: 'Instagram',
    iconUrl: instagram,
    link: 'https://www.instagram.com/dafbians/',
  },
];

export const projects = [
  {
    // iconUrl: shoppi,
    iconUrl: shoppi,
    theme: 'btn-back-red',
    name: 'Shoppi',
    description: 'E-Commerce yang dibuat dengan MongoDB, Express JS ,React JS, Node JS',
    link: 'https://github.com/dafahfabiansyah/shoppi-e-commerce',
  },
  {
    iconUrl: bookstore,
    theme: 'btn-back-green',
    name: 'Book Store',
    description: 'CRUD menggunakan dibuat dengan MongoDB, Express JS, React JS, Node JS',
    link: 'https://github.com/dafahfabiansyah/BookStore-Mern',
  },
  {
    iconUrl: portfolioTailwindCss,
    theme: 'btn-back-green',
    name: 'Portfolio Tailwind CSS ',
    description: 'Portfolio  HTML menggunakan Tailwind CSS',
    link: 'https://github.com/dafahfabiansyah/portofolio-tailwind-css3',
  },
  {
    iconUrl: emporio,
    theme: 'btn-back-green',
    name: 'Emporio Shop',
    description: 'Web page yang menggunakan API Sistem Toko',
    link: 'https://github.com/dafahfabiansyah/Final-Project-Sisko',
  },
];

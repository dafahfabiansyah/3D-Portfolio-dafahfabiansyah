import { meta, shopify, starbucks, tesla, eduwork, animelist } from '../assets/images';
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
  zustand,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express JS',
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
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
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
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: zustand,
    name: 'Zustand',
    type: 'Frontend',
  },
];

export const experiences = [
  // {
  //   title: 'React.js Developer',
  //   company_name: 'Starbucks',
  //   icon: starbucks,
  //   iconBg: '#accbe1',
  //   date: 'March 2020 - April 2021',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#fbc3bc',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#b7e4c7',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  {
    title: 'Full stack Developer',
    company_name: 'Eduwork.id',
    icon: eduwork,
    iconBg: '#a2d2ff',
    date: 'June 2023 - November 2023',
    points: [
      'Developed and designed a web application, creating a more engaging user interface, to improve overall presentation and design using React.js and Tailwind CSS',
      'Apply advanced techniques for database management, optimize data retrieval and storage processes to improve overall system efficiency, using MySQL and MongoDB.',
      'Developed APIs to allow backend and front-end applications to connect and communicate with each other using Node Js, Express JS, MongoDB and MySQL.',
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
    link: 'https://www.linkedin.com/in/dafah-fabian-syah-688755232/',
  },
  {
    name: 'Instagram',
    iconUrl: instagram,
    link: 'https://www.instagram.com/dafbians/',
  },
];

export const projects = [
  {
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
  {
    iconUrl: animelist,
    theme: 'btn-back-green',
    name: 'AnimeList',
    description: 'Web page untuk mencari rekomendasi anime hits',
    link: 'https://github.com/dafahfabiansyah/CuyAnimeList',
  },
];

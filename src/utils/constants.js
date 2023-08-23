import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: "Empowering adventurers to embrace history's marvels through imaginative gadgets, sparking curiosity and connections across time.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: "Envisioning a world where time-traveler's toolkit products bridge eras, inspiring joy, wonder, and unity across diverse timelines.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'AeonArtifacts, born from a love for both history and innovation, brings time-hopping dreams to life since its inception.',
  },
];

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;

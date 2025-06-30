// src/data/productsData.ts
import preview1 from '../assets/images/valorant_preview1.png';
import preview2 from '../assets/images/valorant_preview2.png';
import ValorantImage from '../assets/images/valorant.webp';
import CSGOImage from '../assets/images/counterstrike.webp';
import GenshinImpactImage from '../assets/images/genshinimpact.webp';
import RobloxImage from '../assets/images/roblox.webp';
import TheFinalsImage from '../assets/images/thefinals.webp';
import SecretLabImage from '../assets/images/seretlab.webp';

export interface Mode {
  name: string;
  desc: string;
  price: number;
  checkoutUrl: string;
}

export interface Product {
  slug: string;
  title: string;
  status: 'up-to-date' | 'expired';
  tags: string[];
  description: string;
  warnings: string;
  supported: string[];
  images: string[];
  modes: Mode[];
}

export const products: Product[] = [
  {
    slug: 'valorant',
    title: 'Valorant',
    status: 'up-to-date',
    tags: ['BOX ESP', 'SKELETON ESP'],
    description: `Experience Valorant like never before with our carefully crafted cheat,
designed for players who demand both power and security.`,
    warnings: `To better understand bans, please join our Discord community and read our #anti-ban-guide.`,
    supported: ['22H2', '23H2', '24H2'],
    images: [preview1, preview2],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 8,
        checkoutUrl: '/api/scout',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 40,
        checkoutUrl: '/api/operator',
      },
    ],
  },
  {
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    status: 'expired',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    images: [CSGOImage],
    modes: [
      {
        name: 'Basic Mode',
        desc: '1-day access.',
        price: 4,
        checkoutUrl: '/api/cs2-basic',
      },
    ],
  },
  {
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    status: 'expired',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    images: [GenshinImpactImage],
    modes: [
      {
        name: 'Basic Mode',
        desc: '1-day access.',
        price: 4,
        checkoutUrl: '/api/genshin-basic',
      },
    ],
  },
  {
    slug: 'roblox',
    title: 'Roblox',
    status: 'expired',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    images: [RobloxImage],
    modes: [
      {
        name: 'Basic Mode',
        desc: '1-day access.',
        price: 8,
        checkoutUrl: '/api/roblox-basic',
      },
    ],
  },
  {
    slug: 'the-finals',
    title: 'The Finals',
    status: 'expired',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    images: [TheFinalsImage],
    modes: [
      {
        name: 'Basic Mode',
        desc: '1-day access.',
        price: 8,
        checkoutUrl: '/api/finals-basic',
      },
    ],
  },
  {
    slug: 'secret-lab',
    title: 'Secret Lab: SL',
    status: 'expired',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    images: [SecretLabImage],
    modes: [
      {
        name: 'Basic Mode',
        desc: '1-day access.',
        price: 4,
        checkoutUrl: '/api/secretlab-basic',
      },
    ],
  },
];

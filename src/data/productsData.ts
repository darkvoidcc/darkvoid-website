import preview1 from '../assets/images/valorant_preview1.png';
import preview2 from '../assets/images/valorant_preview2.png';
import ValorantImage from '../assets/images/valorant.webp';
import CSGOImage from '../assets/images/counterstrike.webp';
import GenshinImpactImage from '../assets/images/genshinimpact.webp';
import RobloxImage from '../assets/images/roblox.webp';
import TheFinalsImage from '../assets/images/thefinals.webp';
import SecretLabImage from '../assets/images/secretlab.webp';

export interface Mode {
  name: string;
  desc: string;
  price: number;
  checkoutUrl: string;
}

export interface Product {
  slug: string;
  title: string;
  status: 'up-to-date' | 'expired' | 'in-maintenance' | 'soon';
  tags: string[];
  description: string;
  warnings: string;
  supported: string[];
  thumbnail: string;
  preview: string[];
  modes: Mode[];
}

export const products: Product[] = [
  {
    slug: 'secret-lab',
    title: 'Secret Lab: SL',
    status: 'soon',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    thumbnail: SecretLabImage,
    preview: [],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 4,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 20,
        checkoutUrl: '',
      },
    ],
  },
  {
    slug: 'valorant',
    title: 'Valorant',
    status: 'soon',
    tags: ['BOX ESP', 'SKELETON ESP'],
    description: `Experience Valorant like never before with our carefully crafted cheat, designed for players who demand stealth and safety over features.`,
    warnings: `To better understand bans, please join our Discord community and read our #anti-ban-guide.`,
    supported: [
      'Compatible only with Windows 11 24H2, with VBS and HVCI required to be enabled.',
    ],
    thumbnail: ValorantImage,
    preview: [preview1, preview2],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 8,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 40,
        checkoutUrl: '',
      },
    ],
  },
  {
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    status: 'soon',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    thumbnail: CSGOImage,
    preview: [],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 8,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 40,
        checkoutUrl: '',
      },
    ],
  },
  {
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    status: 'soon',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    thumbnail: GenshinImpactImage,
    preview: [],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 4,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 20,
        checkoutUrl: '',
      },
    ],
  },
  {
    slug: 'roblox',
    title: 'Roblox',
    status: 'soon',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    thumbnail: RobloxImage,
    preview: [],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 4,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 20,
        checkoutUrl: '',
      },
    ],
  },
  {
    slug: 'the-finals',
    title: 'The Finals',
    status: 'soon',
    tags: [],
    description: `Coming soon.`,
    warnings: ``,
    supported: [],
    thumbnail: TheFinalsImage,
    preview: [],
    modes: [
      {
        name: 'Scout Mode',
        desc: '3-day full access.',
        price: 8,
        checkoutUrl: '',
      },
      {
        name: 'Operator Mode',
        desc: '30-day full access.',
        price: 40,
        checkoutUrl: '',
      },
    ],
  },
];

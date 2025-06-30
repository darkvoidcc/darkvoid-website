// src/pages/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import Separator from '../components/Separator';
import RegionToggle, { Region } from '../components/RegionToggle';
import ModeSelector, { Mode } from '../components/ModeSelector';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import preview1 from '../assets/images/valorant_preview1.png';
import preview2 from '../assets/images/valorant_preview2.png';
import styles from './ProductDetail.module.css';

const product = {
  title: 'Valorant',
  tags: ['BOX ESP', 'SKELETON ESP'],
  description: `Experience Valorant like never before with our carefully crafted cheat,
designed for players who demand both power and safety. This undetectable hack
delivers the perfect blend of competitive edge and security, giving you
enhanced features to dominate every match while staying completely under the
radar. Why choose between strength and protection when you can have it all?
Elevate your gameplay with the Valorant cheat you’ve always wished for—
powerful, secure, and built to keep you ahead of the game.`,
  status: 'up-to-date' as const,
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
};

// Global = English modes from product, CIS = Russian‐localized modes:
const globalModes: Mode[] = product.modes;
const cisModes: Mode[] = [
  {
    name: 'Режим скаута',
    desc: 'Полный доступ на 3 дня.',
    price: 9,
    checkoutUrl: '/api/cis-scout',
  },
  {
    name: 'Режим оператора',
    desc: 'Полный доступ на 30 дней.',
    price: 45,
    checkoutUrl: '/api/cis-operator',
  },
];

export default function ProductDetail() {
  const [region, setRegion] = useState<Region>('global');
  const [modes, setModes] = useState<Mode[]>(globalModes);
  const [selectedModeName, setSelectedModeName] = useState<string>(
    globalModes[0].name,
  );

  // whenever region toggles, swap in the right mode list & reset selection
  useEffect(() => {
    const list = region === 'cis' ? cisModes : globalModes;
    setModes(list);
    setSelectedModeName(list[0].name);
  }, [region]);

  // find the full Mode object for the current selection
  const selectedMode = modes.find((m) => m.name === selectedModeName)!;

  const handlePayment = () => {
    window.location.href = selectedMode.checkoutUrl;
  };

  return (
    <main className={styles.container}>
      <div className={styles.columns}>
        {/* —— Left Content —— */}
        <section className={styles.content}>
          <div className={styles.productHeader}>
            <header className={styles.title}>
              <span className={styles.section}>Products</span>
              <span className={styles.separator}>/</span>
              <span className={styles.subtitle}>{product.title}</span>
            </header>
            <span className={styles.status}>
              {product.status.toUpperCase()}
            </span>
          </div>

          <div className={styles.tags}>
            {product.tags.map((t) => (
              <span
                key={t}
                className={styles.tag}>
                {t}
              </span>
            ))}
          </div>

          <p className={styles.paragraph}>{product.description}</p>

          <div className={styles.platforms}>
            <strong>SUPPORTED PLATFORMS</strong>
            <div>
              <p>{product.supported.join(', ')}</p>
              <div style={{ display: 'flex', gap: '4px' }}>
                <Icon name="intel" />
                <Icon name="nvidia" />
                <Icon name="arm" />
              </div>
            </div>
          </div>

          <div className={styles.warning}>
            <strong>BAN RISK</strong>
            <p>{product.warnings}</p>
          </div>

          <div className={styles.preview}>
            {product.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Preview ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* —— Right Checkout Panel —— */}
        <aside className={styles.checkout}>
          <div className={styles.checkoutHeader}>
            <Icon
              name="cart"
              className={styles.checkoutIcon}
            />{' '}
            <h2 className={styles.checkoutHeading}>Checkout</h2>
          </div>
          <p className={styles.paragraph}>
            Select your region so we can find a convenient payment method for
            you.
          </p>

          <Separator
            color="var(--text-color)"
            dashLength={12}
            gapLength={6}
            thickness={2}
          />

          <RegionToggle
            selected={region}
            onChange={setRegion}
          />

          <ModeSelector
            modes={modes}
            selected={selectedModeName}
            onChange={setSelectedModeName}
          />

          <Separator
            color="var(--text-color)"
            dashLength={12}
            gapLength={6}
            thickness={2}
          />

          <p className={styles.total}>€{selectedMode.price.toFixed(2)}</p>
          <Button
            className={styles.paymentBtn}
            onClick={handlePayment}>
            Continue to Payment
          </Button>
          <p className={styles.terms}>
            By continuing, you accept{' '}
            <a href="/resources/terms">Terms of Services</a>
          </p>
        </aside>
      </div>
    </main>
  );
}

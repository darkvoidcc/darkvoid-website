// src/pages/resources/Index.tsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css';
import gsap from 'gsap';

export default function Resources() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector!;
      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: 'power1.out' },
      });

      tl.fromTo(
        q(`.${styles.title}`),
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0 },
      );
      tl.fromTo(
        q(`.${styles.cards} .card`),
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, stagger: 0.2 },
        '-=0.3',
      );
      tl.fromTo(
        q(`.${styles.links} a`),
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, stagger: 0.15 },
        '-=0.4',
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className={styles.resources}>
      <h1 className={styles.title}>Resources</h1>

      <div className={styles.cards}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>FAQ</h2>
            <p className={styles.cardDescription}>
              Everything you need to know about our platform
            </p>
            <Link
              to="/resources/faq"
              className={styles.cardLink}>
              View All
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Anti-ban</h2>
            <p className={styles.cardDescription}>
              How to avoid getting banned
            </p>
            <Link
              to="/resources/antibanguide"
              className={styles.cardLink}>
              View All
            </Link>
          </div>

          <div className={styles.links}>
            <Link
              to="/resources/terms"
              className={styles.footerLink}>
              Terms of Conditions
            </Link>
            <Link
              to="/resources/privacy"
              className={styles.footerLink}>
              Privacy Policy &amp; Cookies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

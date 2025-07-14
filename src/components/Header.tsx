// src/components/Header.tsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './Header.module.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: 'power1.out' },
      });

      tl.from(`.${styles.logoIcon}`, { opacity: 0, y: -20 });

      tl.from(`.${styles.link}`, { opacity: 0, y: -10, stagger: 0.2 }, '-=0.4');
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      className={styles.header}
      ref={headerRef}>
      <RouterLink to="/">
        <Icon
          name="fullLogo"
          className={styles.logoIcon}
        />
      </RouterLink>
      <nav className={styles.nav}>
        <RouterLink
          to="/products"
          className={`${styles.link} txt-body`}>
          <Icon
            name="products"
            className={styles.icon}
          />
          Products
        </RouterLink>
        <RouterLink
          to="/resources"
          className={`${styles.link} txt-body`}>
          <Icon
            name="misc"
            className={styles.icon}
          />
          Resources
        </RouterLink>
        <RouterLink
          to="/status"
          className={`${styles.link} txt-body`}>
          <Icon
            name="status"
            className={styles.icon}
          />
          Status
        </RouterLink>
      </nav>
    </header>
  );
}

import { JSX, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';
import styles from './Main.module.css';
import loaderSection from '../assets/images/Loader section.webp';
import gsap from 'gsap';

/**
 * Main component
 * @description Main component that serves as the main content area of the application.
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Main />
 */
export function Main(): JSX.Element {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power1.out' } });

      // Logo animation
      tl.from(`.${styles.logoIcon}`, { opacity: 0, y: -30 })
        // Main text animations
        .from(`.${styles.mainText}`, { opacity: 0, x: -20, stagger: 0.2 }, '-=0.4')
        .from(`.${styles.mainTextP}`, { opacity: 0, x: 20 }, '-=0.5')
        // Section fade-in
        .from(`.${styles.mainSection}`, { opacity: 0, y: 20 }, '-=0.4')
        // Loader image slides up from bottom
        .from(
          `.${styles.loaderImageWrapper}`,
          { y: 200, opacity: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.3'
        );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className={styles.main}>
      <Icon name="logo" className={styles.logoIcon} />
      <div className={styles.mainContent}>
        <h1 className={`${styles.mainText} txt-title`}>
          The safest gaming experience_
        </h1>
        <p className={`${styles.mainTextP} txt-body`}>
          Darkvoid — private software for those committed to forever-lasting
          accounts.
        </p>
      </div>
      <section className={styles.mainSection}>
        <Button
          onClick={() => window.open('/products', '_self')}
          icon={<Icon name="crown" />}
        >
          Become MVP
        </Button>
      </section>
      <div className={styles.loaderImageWrapper}>
        <img
          src={loaderSection}
          alt="Loader"
          className={styles.loaderImage}
        />
      </div>
    </main>
  );
}

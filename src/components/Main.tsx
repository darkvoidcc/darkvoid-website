import { JSX } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';
import styles from './Main.module.css';
import loaderSection from '../assets/images/Loader section.webp';

/**
 * Main component
 * @description Main component that serves as the main content area of the application.
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Main />
 */
export function Main(): JSX.Element {
  return (
    <main>
      <Icon
        name="logo"
        className={styles.logoIcon}
      />
      <div className={styles.mainContent}>
        <h1 className={`${styles.mainText} txt-title`}>
          The safest gaming experience_
        </h1>
        <p className={`${styles.mainTextP} txt-body`}>
          Darkvoid — private software for those committed to forever-lasting
          accounts.
        </p>
      </div>
      <section className="main-section">
        <Button
          onClick={() => window.open('/products', '_self')}
          icon={<Icon name="crown" />}>
          Become MVP
        </Button>
        <div className={styles.loaderImageWrapper}>
          <img
            src={loaderSection}
            alt=""
            className={styles.loaderImage}
          />
        </div>
      </section>
    </main>
  );
}

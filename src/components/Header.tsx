import { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './Header.module.css';

/**
 * Header Component
 * @description Main navigation header component with links to different sections
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Header />
 */
export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <RouterLink to="/">
        <Icon
          name="fullLogo"
          className={styles.logoIcon}
        />
      </RouterLink>
      {/* Navigation Links */}
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
        <RouterLink
          to="/contact"
          className={`${styles.link} txt-body`}>
          <Icon
            name="contact"
            className={styles.icon}
          />
          Contact
        </RouterLink>
      </nav>
    </header>
  );
}

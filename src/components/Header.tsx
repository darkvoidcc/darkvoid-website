import { JSX } from 'react';
import { Link } from './Link';
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
      <Icon
        name="fullLogo"
        className={styles.logoIcon}
      />
      {/* Navigation Links */}
      <nav className={styles.nav}>
        <Link
          href="/products"
          icon={
            <Icon
              name="products"
              className={styles.icon}
            />
          }
          text="Products"
          className={`${styles.link} txt-body`}
        />
        <Link
          href="/resources"
          icon={
            <Icon
              name="misc"
              className={styles.icon}
            />
          }
          text="Resources"
          className={`${styles.link} txt-body`}
        />
        <Link
          href="/status"
          icon={
            <Icon
              name="status"
              className={styles.icon}
            />
          }
          text="Status"
          className={`${styles.link} txt-body`}
        />
        <Link
          href="/contact"
          icon={
            <Icon
              name="contact"
              className={styles.icon}
            />
          }
          text="Contact"
          className={`${styles.link} txt-body`}
        />
      </nav>
    </header>
  );
}

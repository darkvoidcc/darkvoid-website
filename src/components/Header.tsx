import { JSX } from 'react';
import { Link } from './Link';
import { Icon } from './Icon';
import styles from './Header.module.css';

/**
 * Header Component
 * @description Main navigation header component with links to different sections
 * @returns {JSX.Element} The rendered header component
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Header />
 */
export function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-between px-9 py-4 bg-black/80">
      {/* Logo */}
      <Icon
        name="logo"
        size={40}
        className="logo-icon w-28 h-auto"
      />
      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        <Link
          href="/products"
          icon={
            <Icon
              name="products"
              size={20}
            />
          }
          text="Products"
          className={`link gap-1 transition-colors ${styles.navLink}`}
        />
        <Link
          href="/resources"
          icon={
            <Icon
              name="misc"
              size={20}
            />
          }
          text="Resources"
          className={`link transition-colors ${styles.navLink}`}
        />
        <Link
          href="/status"
          icon={
            <Icon
              name="status"
              size={20}
            />
          }
          text="Status"
          className={`link transition-colors ${styles.navLink}`}
        />
        <Link
          href="/contact"
          icon={
            <Icon
              name="contact"
              size={20}
            />
          }
          text="Contact"
          className={`link transition-colors ${styles.navLink}`}
        />
      </nav>
    </header>
  );
}

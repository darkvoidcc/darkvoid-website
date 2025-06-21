import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
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

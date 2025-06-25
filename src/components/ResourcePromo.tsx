import React from 'react';
import styles from './ResourcePromo.module.css';

export type ResourcePromoProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: React.ReactNode;
};

export function ResourcePromo({
  icon,
  title,
  description,
  buttonText,
  buttonUrl,
  buttonIcon,
}: ResourcePromoProps) {
  return (
    <section className={styles.promo}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a
        href={buttonUrl}
        className={styles.button}>
        <span>{buttonText}</span>
      </a>
    </section>
  );
}

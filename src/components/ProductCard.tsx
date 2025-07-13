import React, { useRef, useEffect } from 'react';
import styles from './ProductCard.module.css';
import { Icon } from './Icon';
import { Button } from './Button';
import gsap from 'gsap';

interface ProductCardProps {
  image: string;
  title: string;
  status: 'up-to-date' | 'maintance' | 'expired' | 'soon' | 'in-maintenance';
  price: string;
  onPurchase?: () => void;
  statusLabel?: string;
}

const statusConfig = {
  'up-to-date': {
    icon: 'upToDate',
    className: styles.statusUpToDate,
    label: 'Up-to-date',
  },
  maintance: {
    icon: 'maintance',
    className: styles.statusMaintance,
    label: 'Maintance',
  },
  expired: {
    icon: 'error',
    className: styles.statusExpired,
    label: 'Expired',
  },
  soon: {
    icon: 'clock',
    className: styles.statusSoon,
    label: 'Coming Soon',
  },
  'in-maintenance': {
    icon: 'maintance',
    className: styles.statusInMaintenance,
    label: 'In Maintenance',
  },
} as const;

export function ProductCard({
  image,
  title,
  status,
  price,
  onPurchase,
  statusLabel,
}: ProductCardProps) {
  const config = statusConfig[status] ?? {
    icon: 'error',
    className: styles.statusExpired,
    label: 'Unknown',
  };
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power1.out' },
      });

      tl.from(cardRef.current, { opacity: 0, y: 40 });

      tl.from(
        cardRef.current!.querySelector(`.${styles.cardImage}`),
        { opacity: 0, scale: 0.8, duration: 0.6 },
        '-=0.3',
      );

      tl.from(
        cardRef.current!.querySelector(`.${styles.cardRow}`),
        { opacity: 0, y: 20 },
        '-=0.3',
      );

      tl.from(
        cardRef.current!.querySelector(`.${styles.cardFooter}`),
        { opacity: 0, y: 20 },
        '-=0.3',
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardRow}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={`${styles.status} ${config.className}`}>
            <Icon
              name={config.icon}
              className={styles.icon}
            />
            {statusLabel || config.label}
          </span>
        </div>
        <hr className={styles.dash} />
        <div className={styles.cardFooter}>
          <span className={styles.price}>{price}</span>
          <Button
            icon={<Icon name="cart" />}
            className={styles.purchaseButton}
            onClick={onPurchase}>
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}

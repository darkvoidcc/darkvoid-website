import React from 'react';
import styles from './ProductCard.module.css';
import { Icon } from './Icon';
import { Button } from './Button';

interface ProductCardProps {
  image: string;
  title: string;
  status: 'up-to-date' | 'maintance' | 'expired';
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
} as const;

export function ProductCard({
  image,
  title,
  status,
  price,
  onPurchase,
  statusLabel,
}: ProductCardProps) {
  const config = statusConfig[status];
  return (
    <div className={styles.card}>
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

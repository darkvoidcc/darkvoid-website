import React from 'react';
import styles from './ProductCard.module.css';
import { Icon } from './Icon';
import { Button } from './Button';

interface ProductCardProps {
  image: string;
  title: string;
  status: string;
  statusType?: 'up-to-date' | 'outdated' | 'maintance';
  price: string;
  onPurchase?: () => void;
}

export function ProductCard({
  image,
  title,
  status,
  statusType = 'up-to-date',
  price,
  onPurchase,
}: ProductCardProps) {
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
          <span className={styles.status}>
            <Icon
              name={
                statusType === 'up-to-date'
                  ? 'upToDate'
                  : statusType === 'maintance'
                  ? 'maintance'
                  : 'error'
              }
              className={styles.icon}
            />
            {status}
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

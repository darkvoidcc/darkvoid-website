import React from 'react';
import styles from './RegionToggle.module.css';
import { Icon } from '../components/Icon';

export type Region = 'global' | 'cis';

interface Props {
  selected: Region;
  onChange: (r: Region) => void;
}

export default function RegionToggle({ selected, onChange }: Props) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.button} ${
          selected === 'global' ? styles.active : ''
        }`}
        onClick={() => onChange('global')}>
        <Icon
          name="globe"
          color="currentColor"
        />
        <span>Global Region</span>
      </button>
      <button
        type="button"
        className={`${styles.button} ${
          selected === 'cis' ? styles.active : ''
        }`}
        onClick={() => onChange('cis')}>
        <Icon
          name="flagPurchase"
          color="currentColor"
        />
        <span>CIS Region</span>
      </button>
    </div>
  );
}

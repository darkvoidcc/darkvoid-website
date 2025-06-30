import React from 'react';
import styles from './RegionToggle.module.css';
import { Icon } from '../components/Icon';

export type Region = 'global' | 'cis';

interface RegionToggleProps {
  selected: Region;
  onChange: (region: Region) => void;
}

const RegionToggle: React.FC<RegionToggleProps> = ({ selected, onChange }) => (
  <div className={styles.container}>
    <button
      type="button"
      className={`${styles.button} ${
        selected === 'global' ? styles.active : ''
      }`}
      onClick={() => onChange('global')}>
      <Icon name="globe" />
      <span>Global region</span>
    </button>
    <button
      type="button"
      className={`${styles.button} ${selected === 'cis' ? styles.active : ''}`}
      onClick={() => onChange('cis')}>
      <Icon name="flagPurchase" />
      <span>CIS Region</span>
    </button>
  </div>
);

export default RegionToggle;

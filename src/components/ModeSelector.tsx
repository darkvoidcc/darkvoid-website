import React from 'react';
import styles from './ModeSelector.module.css';

// 👇 export the Mode interface
export interface Mode {
  name: string;
  desc: string;
  price: number;
  checkoutUrl: string;
}

interface ModeSelectorProps {
  modes: Mode[];
  selected: string;
  onChange: (modeName: string) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({
  modes,
  selected,
  onChange,
}) => (
  <div className={styles.container}>
    {modes.map((mode) => {
      const isActive = mode.name === selected;
      return (
        <label
          key={mode.name}
          className={`${styles.card} ${isActive ? styles.active : ''}`}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value={mode.name}
                  checked={isActive}
                  onChange={() => onChange(mode.name)}
                  className={styles.input}
                />
                <span className={styles.title}>{mode.name}</span>
              </div>

              <span className={styles.price}>€{mode.price.toFixed(2)}</span>
            </div>
            <p className={styles.desc}>{mode.desc}</p>
          </div>
        </label>
      );
    })}
  </div>
);

// 👇 this must be here
export default ModeSelector;

import { JSX } from 'react';
import { Icon } from './Icon';
import styles from './Main.module.css';

/**
 * Main component
 * @description Main component that serves as the main content area of the application.
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Main />
 */
export function Main(): JSX.Element {
  return (
    <main>
      <Icon
        name="logo"
        className={styles.logoIcon}
      />
      <div className="main-content">
        <h1 className="txt-title">The safest gaming experience_</h1>
        <p className="txt-body">
          Darkvoid — private software for those committed to forever-lasting
          accounts.
        </p>
      </div>
    </main>
  );
}

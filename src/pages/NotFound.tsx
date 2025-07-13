import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className={styles.button}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

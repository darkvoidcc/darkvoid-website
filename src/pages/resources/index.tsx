import styles from './Index.module.css';

export default function Resources() {
  return (
    <main className={styles.resources}>
      <h1 className={styles.title}>Resources</h1>

      <div className={styles.cards}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>FAQ</h2>
            <p className={styles.cardDescription}>
              Everything you need to know about our platform
            </p>
            <a
              href="/resources/faq"
              className={styles.cardLink}>
              View All
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Anti-ban</h2>
            <p className={styles.cardDescription}>
              How to avoid getting banned
            </p>
            <a
              href="/resources/antibanguide"
              className={styles.cardLink}>
              View All
            </a>
          </div>

          <div className={styles.links}>
            <a
              href="/terms"
              className={styles.footerLink}>
              Term of Conditions
            </a>
            <a
              href="/privacy"
              className={styles.footerLink}>
              Privacy Policy &amp; Cookies
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

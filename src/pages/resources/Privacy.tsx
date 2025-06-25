import styles from './TermsAndPrivacy.module.css';

export default function Privacy() {
  return (
    <div
      id="privacy"
      className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.section}>Resources</h1>
        <span className={styles.separator}>/</span>
        <h2 className={styles.subtitle}>Privacy Policy &amp; Cookies</h2>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>INTRODUCTION</h3>
        <p className={styles.paragraph}>
          At DarkVoid, we value your privacy and are committed to safeguarding
          your personal information. This Privacy Policy explains what data we
          collect from you, how we use it, and the steps we take to keep it
          secure. By using our services, you consent to the practices described
          in this policy. Our goal is to be transparent about our data practices
          and ensure you feel confident in how your information is handled.
        </p>
        <h3 className={styles.heading}>INFORMATION COLLECTION</h3>
        <p className={styles.paragraph}>
          We collect only the minimum information necessary to provide our
          services. Specifically, we collect:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Email Addresses: We gather your email address to process payments
            and communicate with you about our services.
          </li>
          <li className={styles.listItem}>
            Unique Hardware Identifiers (HWID): We collect HWID values to secure
            our license keys and prevent unauthorized use of our software.
          </li>
        </ul>
        <h3 className={styles.heading}>DATA USAGE</h3>
        <p className={styles.paragraph}>
          The information we collect serves specific, limited purposes:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Email Addresses: Used to process your payments and provide customer
            support or software access after your payment.
          </li>
          <li className={styles.listItem}>
            HWID: Used to validate your license key and protect our software
            from piracy or misuse.
          </li>
        </ul>
        <h3 className={styles.heading}>DATA SHARING</h3>
        <p className={styles.paragraph}>
          Your personal information stays with us. We do not sell, share, or
          disclose it to any third parties. The only exceptions are if we are
          legally obligated to do so (e.g., by a court order) or if it is
          necessary to protect our legal rights or property. Otherwise, your
          data remains strictly confidential.
        </p>
        <h3 className={styles.heading}>DATA SECURITY</h3>
        <p className={styles.paragraph}>
          We prioritize the security of your personal information. Here’s how we
          protect it:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Encryption: All personal data stored on our servers is encrypted
            using industry-standard techniques. Your data remains encrypted at
            all times, except when it is necessary to access it for specific
            purposes, such as payment processing or license validation.
          </li>
          <li className={styles.listItem}>
            Additional Safeguards: Our servers are protected with secure access
            controls and are regularly monitored to detect and prevent
            unauthorized access.
          </li>
        </ul>
        <h3 className={styles.heading}>USER RIGHTS</h3>
        <p className={styles.paragraph}>
          You have control over your personal information. If you would like us
          to delete your data, simply reach out to us, and we will promptly
          address your request. Here’s what you can do:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Request Deletion: Contact us at the contact information provided
            below, and we will permanently delete your personal data from our
            servers within 24 hours of your request, confirming the action by
            sending you a confirmation email once completed.
          </li>
          <li className={styles.listItem}>
            Access or Correct Data: You also have the right to request access to
            the data we hold about you or to correct any inaccuracies.
          </li>
        </ul>
        <h3 className={styles.heading}>COOKIES</h3>
        <p className={styles.paragraph}>
          At DarkVoid, we prioritize your privacy and do not use or store
          cookies on our website or in our services. Cookies are small text
          files that websites often use to track user behavior or store
          information about your browsing session. Since we are committed to
          minimizing the data we collect, we have chosen not to implement
          cookies at all. This means we do not track your online activities,
          store information about your visits, or use cookies for any purpose,
          including third-party cookies. Our services are designed to function
          without relying on cookies, ensuring that your experience with us is
          as private, anonymous, and secure as possible.
        </p>
        <h3 className={styles.heading}>UPDATES TO THE POLICY</h3>
        <p className={styles.paragraph}>
          We may occasionally update this Privacy Policy to reflect changes in
          our practices, technology, or legal requirements. When we make
          updates, we will post the latest version of the policy on this page.
        </p>
        <h3 className={styles.heading}>LEGAL COMPLIANCE</h3>
        <p className={styles.paragraph}>
          DarkVoid adheres to all relevant data protection laws, including the
          General Data Protection Regulation (GDPR) and the
          Bundesdatenschutzgesetz (BDSG) in Germany. These laws grant you
          specific rights over your data, such as the right to access, correct,
          or delete your personal information. We are committed to upholding
          these rights and ensuring your data is handled in accordance with
          German and EU data protection standards. For more details about your
          rights and how to exercise them, you can visit the official website of
          the Federal Commissioner for Data Protection and Freedom of
          Information (BfDI) at{' '}
          <a href="https://www.bfdi.bund.de">https://www.bfdi.bund.de</a>.
        </p>
        <h3 className={styles.heading}>CONTACT INFORMATION</h3>
        <p className={styles.paragraph}>
          For questions or support, contact us at{' '}
          <a href="mailto:support@darkvoid.cc">support@darkvoid.cc</a>.
        </p>
        <p className={styles.updated}>
          This document was last updated on June 6, 2025.
        </p>
      </div>
    </div>
  );
}

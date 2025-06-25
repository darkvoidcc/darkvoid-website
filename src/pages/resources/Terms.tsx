import styles from './TermsAndPrivacy.module.css';

export default function Terms() {
  return (
    <div
      id="terms"
      className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.section}>Resources</h1>
        <span className={styles.separator}>/</span>
        <h2 className={styles.subtitle}>Terms &amp; Conditions</h2>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>INTRODUCTION</h3>
        <p className={styles.paragraph}>
          At DarkVoid, we are dedicated to delivering top-quality video game
          cheat software while maintaining a secure and fair environment for our
          users. This Terms of Conditions outlines the rules governing your use
          of our software and services. By accessing or using our software, you
          agree to follow these terms fully. Our aim is to be upfront about what
          we expect from you and what you can expect from us, fostering trust
          and clarity in our relationship.
        </p>
        <h3 className={styles.heading}>ELIGIBILITY AND RESTRICTIONS</h3>
        <p className={styles.paragraph}>
          To use our software and services, you must meet these requirements:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            You are not an anti-cheat developer or affiliated with any
            anti-cheat organization. If you are part of such a group, you must
            leave this site immediately.
          </li>
          <li className={styles.listItem}>
            You agree to use our software only for personal, non-commercial
            purposes.
          </li>
          <li className={styles.listItem}>
            You will not share, resell, or redistribute our software or license
            keys.
          </li>
        </ul>
        <p className={styles.paragraph}>
          These rules help us safeguard our technology and maintain the
          integrity of our offerings.
        </p>
        <h3 className={styles.heading}>LICENSE AND USAGE</h3>
        <p className={styles.paragraph}>
          When you purchase our software, we grant you a limited, non-exclusive,
          non-transferable license for personal use only. This license is linked
          to your unique Hardware Identifier (HWID). While the license cannot be
          shared with another user, you are permitted to transfer it to a new
          device through a HWID reset process, up to two (2) times. Each
          individually purchased license key allows for exactly two (2) HWID
          resets. To request a HWID reset, contact our support team at{' '}
          <a href="mailto:support@darkvoid.cc">support@darkvoid.cc</a> or create
          a ticket in our official Discord/Telegram. After two resets, no
          further HWID changes will be permitted.
        </p>
        <p className={styles.paragraph}>You agree to:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Use the software only on the device tied to your current HWID.
          </li>
          <li className={styles.listItem}>
            Avoid bypassing security features, such as HWID validation.
          </li>
          <li className={styles.listItem}>
            Refrain from using the software for illegal or unauthorized
            activities.
          </li>
        </ul>
        <p className={styles.paragraph}>
          If you break these terms, we may revoke your license.
        </p>
        <h3 className={styles.heading}>INTELLECTUAL PROPERTY</h3>
        <p className={styles.paragraph}>
          All rights to our software—including copyrights, trademarks, and
          patents—belong to DarkVoid or our licensors. You may not copy, modify,
          reverse engineer, or create derivative works from our software. Our
          software is protected by law and international agreements, and any
          misuse could lead to legal consequences.
        </p>
        <h3 className={styles.heading}>PROHIBITED ACTIVITIES</h3>
        <p className={styles.paragraph}>
          To keep our software and services secure, you agree not to:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Decompile, disassemble, or reverse engineer the software.
          </li>
          <li className={styles.listItem}>
            Use it to build or support competing products or services.
          </li>
          <li className={styles.listItem}>
            Share your license key or software access with others.
          </li>
          <li className={styles.listItem}>
            Use it in ways that could damage our business or reputation.
          </li>
          <li className={styles.listItem}>
            Disrupt our services or servers in any way.
          </li>
        </ul>
        <p className={styles.paragraph}>
          Breaking these rules may result in your license being terminated and
          possible legal action.
        </p>
        <h3 className={styles.heading}>TERMINATION</h3>
        <p className={styles.paragraph}>
          We can end your license and access to our software at any time if you
          violate these Terms of Conditions. If this happens, you must stop
          using the software and delete all copies from your device. We may also
          terminate your license if we stop offering the software or if the law
          requires it.
        </p>
        <h3 className={styles.heading}>DISCLAIMERS</h3>
        <p className={styles.paragraph}>
          Our software is provided “as is,” without any guarantees of perfectly
          working. We don’t promise it will be free of errors or work with every
          system. You understand that using cheat software might break the rules
          of the games you play. Any risks—like game bans or penalties from
          developers—are yours to bear.
        </p>
        <h3 className={styles.heading}>LIMITATION OF LIABILITY</h3>
        <p className={styles.paragraph}>
          To the extent allowed by law, DarkVoid is not responsible for any
          damages or losses caused by your use of our software or services. This
          includes issues like game bans, data loss, or other problems tied to
          your use.
        </p>
        <h3 className={styles.heading}>GOVERNING LAW</h3>
        <p className={styles.paragraph}>
          These Terms of Conditions are governed by German law. Any disputes
          will be handled in German courts.
        </p>
        <h3 className={styles.heading}>CHANGES TO THESE TERMS</h3>
        <p className={styles.paragraph}>
          We might update these Terms of Conditions to reflect new practices or
          legal needs. We’ll let you know about major changes by posting the
          updated version on our website. If you keep using our software after
          these updates, it means you accept the new terms.
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

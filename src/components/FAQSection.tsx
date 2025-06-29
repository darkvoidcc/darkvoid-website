// src/components/FAQSection.tsx
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
  initialOpen?: boolean;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <AccordionItem key={i} {...item} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer, initialOpen = false }: FAQItem) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className={styles.toggleIcon}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}

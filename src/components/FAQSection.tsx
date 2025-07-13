import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
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
  const initialIndex = items.findIndex((item) => item.initialOpen);
  const [openIndex, setOpenIndex] = useState(
    initialIndex >= 0 ? initialIndex : -1,
  );

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  open,
  onClick,
}: FAQItem & { open: boolean; onClick: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    if (open) {
      const fullHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, pointerEvents: 'none' },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          pointerEvents: 'auto',
          onComplete: () => {
            el.style.height = 'auto';
          },
        },
      );
    } else {
      const currentHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: currentHeight, opacity: 1, pointerEvents: 'auto' },
        {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          pointerEvents: 'none',
        },
      );
    }
  }, [open]);

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onClick}
        aria-expanded={open}>
        {question}
        <span className={styles.toggleIcon}>{open ? '−' : '+'}</span>
      </button>
      <div
        ref={answerRef}
        className={styles.answer}
        style={{
          overflow: 'hidden',
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          padding: open ? undefined : 0,
        }}>
        {answer}
      </div>
    </div>
  );
}

import { JSX, useRef, useEffect } from 'react';
import styles from './Button.module.css';
import gsap from 'gsap';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  icon,
}: ButtonProps): JSX.Element {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(btnRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: 'power1.out',
      });
    }, btnRef);
    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { scale: 1 },
        {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut',
        },
      );
    }
    if (onClick) onClick();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`${styles.btn} ${className}`}
      disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

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

  const handleMouseEnter = () => {
    if (btnRef.current && !disabled) {
      gsap.to(btnRef.current, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power1.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current && !disabled) {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power1.out',
      });
    }
  };

  const handleMouseDown = () => {
    if (btnRef.current && !disabled) {
      gsap.to(btnRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power1.inOut',
      });
    }
  };

  const handleMouseUp = () => {
    if (btnRef.current && !disabled) {
      gsap.to(btnRef.current, {
        scale: 1.05,
        duration: 0.1,
        ease: 'power1.out',
      });
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${styles.btn} ${className}`}
      disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

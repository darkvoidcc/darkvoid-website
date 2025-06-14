import { JSX } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode; // opsiyonel icon
}

/**
 * Button Component
 * @description A reusable button component with customizable styles and behavior
 * @version 1.0.0
 * @param {Object} props - The properties for the button component
 * @param {React.ReactNode} props.children - The content to display inside the button
 * @param {() => void} [props.onClick] - The function to call when the button is clicked
 * @param {string} [props.className=''] - Additional CSS classes to apply to the button
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {React.ReactNode} [props.icon] - Optional icon to display left of the button text
 * @returns {JSX.Element} The rendered button component
 * @author Neodevils
 * @example
 * <Button icon={<Icon name="cart" />} onClick={() => alert('Hey, welcome to darkvoid!')}>
 *   Buy Now
 * </Button>
 */
export function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  icon,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${className}`}
      disabled={disabled}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

import React, { JSX } from 'react';

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

/**
 * Link Component
 * @description This component renders a link with a specific style. Link has an icon and text.
 * @param {Object} props The properties passed to the component.
 * @param {string} props.href The URL the link points to.
 * @param {React.ReactNode} props.icon The icon to display next to the text.
 * @param {string} props.text The text to display in the link.
 * @param {string} [props.className] Additional CSS classes to apply to the link.
 * @returns {JSX.Element} The rendered link component.
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Link href="https://darkvoid.cc/products" icon={<Icon />} text="Products" />
 */
export function Link({
  href,
  icon,
  text,
  className = '',
}: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={`link ${className}`}>
      {icon}
      {text}
    </a>
  );
}

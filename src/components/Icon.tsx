import React from 'react';

import { ReactComponent as AntiAim } from '../assets/icons/Anti-Aim Icon.svg';
import { ReactComponent as BoltBadgeClock } from '../assets/icons/Bolt Badge Clock Icon.svg';
import { ReactComponent as Cart } from '../assets/icons/Cart Icon.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/Chevron Right Icon.svg';
import { ReactComponent as Clock } from '../assets/icons/Clock Icon.svg';
import { ReactComponent as Contact } from '../assets/icons/Contact Icon.svg';
import { ReactComponent as Crown } from '../assets/icons/Crown Icon.svg';
import { ReactComponent as Customization } from '../assets/icons/Customization Icon.svg';
import { ReactComponent as ErrorIcon } from '../assets/icons/Error Icon.svg';
import { ReactComponent as Exploit } from '../assets/icons/Exploit Icon.svg';
import { ReactComponent as Key } from '../assets/icons/Key Icon.svg';
import { ReactComponent as FullLogo } from '../assets/icons/Full Logo.svg';
import { ReactComponent as Logo } from '../assets/icons/Logo.svg';
import { ReactComponent as Maintance } from '../assets/icons/Maintance Icon.svg';
import { ReactComponent as Misc } from '../assets/icons/Misc Icon.svg';
import { ReactComponent as Principles } from '../assets/icons/Principles Icon.svg';
import { ReactComponent as Products } from '../assets/icons/Products Icon.svg';
import { ReactComponent as Ragebot } from '../assets/icons/Ragebot Icon.svg';
import { ReactComponent as Status } from '../assets/icons/Status Icon.svg';
import { ReactComponent as UpToDate } from '../assets/icons/Up-to-date Icon.svg';
import { ReactComponent as Visuals } from '../assets/icons/Visuals Icon.svg';
import { ReactComponent as Website } from '../assets/icons/Website Icon.svg';
import { ReactComponent as Activity } from '../assets/icons/Activity Icon.svg';
import { ReactComponent as EyeOff } from '../assets/icons/Eye Off Icon.svg';
import { ReactComponent as Flag } from '../assets/icons/Flag Icon.svg';

// Icon types
export type IconName =
  | 'antiAim'
  | 'boltBadgeClock'
  | 'cart'
  | 'chevronRight'
  | 'clock'
  | 'contact'
  | 'crown'
  | 'customization'
  | 'error'
  | 'expired'
  | 'exploit'
  | 'key'
  | 'fullLogo'
  | 'logo'
  | 'maintance'
  | 'misc'
  | 'principles'
  | 'products'
  | 'ragebot'
  | 'status'
  | 'upToDate'
  | 'visuals'
  | 'website'
  | 'activity'
  | 'eyeOff'
  | 'flag';

const iconMap: Record<
  IconName,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  antiAim: AntiAim,
  boltBadgeClock: BoltBadgeClock,
  cart: Cart,
  chevronRight: ChevronRight,
  clock: Clock,
  contact: Contact,
  crown: Crown,
  customization: Customization,
  error: ErrorIcon,
  expired: ErrorIcon,
  exploit: Exploit,
  key: Key,
  fullLogo: FullLogo,
  logo: Logo,
  maintance: Maintance,
  misc: Misc,
  principles: Principles,
  products: Products,
  ragebot: Ragebot,
  status: Status,
  upToDate: UpToDate,
  visuals: Visuals,
  website: Website,
  activity: Activity,
  flag: Flag,
  eyeOff: EyeOff,
};

interface IconProps {
  name: IconName;
  color?: string;
  className?: string;
}

/**
 * Icon component for displaying SVG icons as React components.
 * @description This component renders an SVG icon based on the provided name, color, and className.
 * @param {Object} props - The properties for the icon component.
 * @param {IconName} props.name - The name of the icon to display.
 * @param {string} [props.color='currentColor'] - The color of the icon. Default is 'currentColor'.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the icon.
 * @version 1.0.0
 * @author Neodevils
 * @example
 * <Icon name="products" color="#000" className="custom-icon" />
 */
export function Icon({
  name,
  color = 'currentColor',
  className = '',
}: IconProps) {
  const SvgIcon = iconMap[name];
  return (
    <SvgIcon
      fill={color}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

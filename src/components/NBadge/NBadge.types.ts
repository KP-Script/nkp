import { ReactNode, CSSProperties } from 'react';

export type BadgeType = 'dot' | 'number' | 'text' | 'icon';
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeShape = 'round' | 'square' | 'pill';

export interface BadgeOffset {
  x: number;
  y: number;
}

export interface NBadgeProps {
  children?: ReactNode;
  content?: ReactNode;
  type?: BadgeType;
  position?: BadgePosition;
  offset?: BadgeOffset;
  size?: BadgeSize;
  shape?: BadgeShape;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  maxCount?: number;
  showZero?: boolean;
  dot?: boolean;
  invisible?: boolean;
  className?: string;
  style?: CSSProperties;
  badgeStyle?: CSSProperties;
  onClick?: () => void;
  'aria-label'?: string;
}

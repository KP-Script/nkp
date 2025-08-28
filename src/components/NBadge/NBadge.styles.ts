import { CSSProperties } from 'react';
import { BadgePosition, BadgeSize, BadgeShape } from './NBadge.types';

export const getBadgeWrapperStyles = (): CSSProperties => ({
  position: 'relative',
  display: 'inline-block',
});

export const getBadgeStyles = (
  position: BadgePosition,
  size: BadgeSize,
  shape: BadgeShape,
  color?: string,
  backgroundColor?: string,
  borderColor?: string,
  offset?: { x: number; y: number }
): CSSProperties => {
  const sizeMap = {
    small: { minWidth: '16px', height: '16px', fontSize: '10px', padding: '0 4px' },
    medium: { minWidth: '20px', height: '20px', fontSize: '12px', padding: '0 6px' },
    large: { minWidth: '24px', height: '24px', fontSize: '14px', padding: '0 8px' },
  };

  const positionMap = {
    'top-left': { top: '0', left: '0', transform: 'translate(-50%, -50%)' },
    'top-right': { top: '0', right: '0', transform: 'translate(50%, -50%)' },
    'bottom-left': { bottom: '0', left: '0', transform: 'translate(-50%, 50%)' },
    'bottom-right': { bottom: '0', right: '0', transform: 'translate(50%, 50%)' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  const shapeMap = {
    round: { borderRadius: '50%' },
    square: { borderRadius: '0' },
    pill: { borderRadius: '10px' },
  };

  const baseStyles: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    border: borderColor ? `1px solid ${borderColor}` : 'none',
    boxSizing: 'border-box',
    zIndex: 1,
    ...sizeMap[size],
    ...positionMap[position],
    ...shapeMap[shape],
    color: color || '#fff',
    backgroundColor: backgroundColor || '#ff4d4f',
  };

  if (offset) {
    const currentTransform = baseStyles.transform || '';
    baseStyles.transform = `${currentTransform} translate(${offset.x}px, ${offset.y}px)`;
  }

  return baseStyles;
};

export const getDotStyles = (size: BadgeSize): CSSProperties => {
  const dotSizeMap = {
    small: { width: '8px', height: '8px' },
    medium: { width: '10px', height: '10px' },
    large: { width: '12px', height: '12px' },
  };

  return {
    ...dotSizeMap[size],
    minWidth: 'unset',
    padding: 0,
    borderRadius: '50%',
  };
};

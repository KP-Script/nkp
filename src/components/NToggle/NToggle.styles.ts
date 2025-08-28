import { CSSProperties } from 'react';
import { ToggleSize, KnobShape } from './NToggle.types';

export const getToggleWrapperStyles = (): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
});

export const getToggleStyles = (
  size: ToggleSize,
  checked: boolean,
  disabled: boolean,
  onColor?: string,
  offColor?: string,
  animated?: boolean
): CSSProperties => {
  const sizeMap = {
    small: { width: 32, height: 18 },
    medium: { width: 44, height: 24 },
    large: { width: 56, height: 30 },
  } as const;

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    ...sizeMap[size],
    backgroundColor: checked ? (onColor || '#1890ff') : (offColor || '#d9d9d9'),
    borderRadius: sizeMap[size].height / 2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: animated ? 'all 0.2s ease-in-out' : 'none',
    opacity: disabled ? 0.6 : 1,
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  };
};

export const getKnobStyles = (
  size: ToggleSize,
  checked: boolean,
  knobShape: KnobShape,
  knobColor?: string,
  animated?: boolean
): CSSProperties => {
  const sizeMap = {
    small: { width: 14, height: 14, translateX: checked ? 16 : 2 },
    medium: { width: 20, height: 20, translateX: checked ? 22 : 2 },
    large: { width: 26, height: 26, translateX: checked ? 28 : 2 },
  } as const;

  const knob = sizeMap[size];

  return {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: knob.width,
    height: knob.height,
    backgroundColor: knobColor || '#fff',
    borderRadius: knobShape === 'round' ? '50%' : '2px',
    transform: `translateY(-50%) translateX(${knob.translateX}px)`,
    transition: animated ? 'transform 0.2s ease-in-out' : 'none',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px',
    color: '#666',
  };
};

export const getLabelStyles = (): CSSProperties => ({
  fontSize: '14px',
  color: '#333',
  userSelect: 'none',
});

export const getTextStyles = (size: ToggleSize): CSSProperties => ({
  position: 'absolute',
  fontSize: size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px',
  fontWeight: 'bold',
  color: '#fff',
  userSelect: 'none',
  pointerEvents: 'none',
});

export const getOnTextStyles = (size: ToggleSize): CSSProperties => ({
  ...getTextStyles(size),
  left: size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px',
});

export const getOffTextStyles = (size: ToggleSize): CSSProperties => ({
  ...getTextStyles(size),
  right: size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px',
});

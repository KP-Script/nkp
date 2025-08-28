import React, { forwardRef } from 'react';
import { NBadgeProps } from './NBadge.types';
import { getBadgeWrapperStyles, getBadgeStyles, getDotStyles } from './NBadge.styles';

export const NBadge = forwardRef<HTMLDivElement, NBadgeProps>(({
  children,
  content,
  type = 'number',
  position = 'top-right',
  offset,
  size = 'medium',
  shape = 'round',
  color,
  backgroundColor,
  borderColor,
  maxCount = 99,
  showZero = false,
  dot = false,
  invisible = false,
  className = '',
  style,
  badgeStyle,
  onClick,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const renderBadgeContent = () => {
    if (dot || type === 'dot') return null;
    
    if (type === 'number' && typeof content === 'number') {
      if (content === 0 && !showZero) return null;
      return content > maxCount ? `${maxCount}+` : content;
    }
    
    return content;
  };

  const badgeContent = renderBadgeContent();
  const isDot = dot || type === 'dot';
  const shouldShowBadge = !invisible && (isDot || badgeContent !== null);

  const badgeStyles = {
    ...getBadgeStyles(position, size, shape, color, backgroundColor, borderColor, offset),
    ...(isDot ? getDotStyles(size) : {}),
    ...badgeStyle,
  };

  return (
    <div
      ref={ref}
      className={`nkp-badge-wrapper ${className}`}
      style={{ ...getBadgeWrapperStyles(), ...style }}
      {...props}
    >
      {children}
      {shouldShowBadge && (
        <span
          className="nkp-badge"
          style={badgeStyles}
          onClick={onClick}
          aria-label={ariaLabel || (typeof badgeContent === 'string' || typeof badgeContent === 'number' ? `Badge: ${badgeContent}` : 'Badge')}
          role={onClick ? 'button' : undefined}
          tabIndex={onClick ? 0 : undefined}
        >
          {!isDot && badgeContent}
        </span>
      )}
    </div>
  );
});

NBadge.displayName = 'NBadge';

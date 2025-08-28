import React, { useState, useCallback, forwardRef, KeyboardEvent } from 'react';
import { NToggleProps } from './NToggle.types';
import {
  getToggleWrapperStyles,
  getToggleStyles,
  getKnobStyles,
  getLabelStyles,
  getOnTextStyles,
  getOffTextStyles,
} from './NToggle.styles';

export const NToggle = forwardRef<HTMLButtonElement, NToggleProps>(({
  checked,
  defaultChecked = false,
  disabled = false,
  size = 'medium',
  onColor,
  offColor,
  knobColor,
  knobShape = 'round',
  onText,
  offText,
  onIcon,
  offIcon,
  label,
  labelPosition = 'right',
  animated = true,
  className = '',
  style,
  onChange,
  onFocus,
  onBlur,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  id,
  ...props
}, ref) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;

  const handleToggle = useCallback(() => {
    if (disabled) return;
    
    const newChecked = !checkedValue;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  }, [checkedValue, disabled, isControlled, onChange]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);

  const toggleElement = (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checkedValue}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      id={id}
      className={`nkp-toggle ${className}`}
      style={{
        ...getToggleStyles(size, checkedValue, disabled, onColor, offColor, animated),
        ...style,
      }}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    >
      {/* On Text */}
      {onText && checkedValue && (
        <span style={getOnTextStyles(size)}>
          {onText}
        </span>
      )}
      
      {/* Off Text */}
      {offText && !checkedValue && (
        <span style={getOffTextStyles(size)}>
          {offText}
        </span>
      )}

      {/* Knob */}
      <span
        className="nkp-toggle-knob"
        style={getKnobStyles(size, checkedValue, knobShape, knobColor, animated)}
      >
        {checkedValue ? onIcon : offIcon}
      </span>
    </button>
  );

  if (label) {
    const labelElement = (
      <span style={getLabelStyles()}>
        {label}
      </span>
    );

    return (
      <div className="nkp-toggle-wrapper" style={getToggleWrapperStyles()}>
        {labelPosition === 'left' && labelElement}
        {toggleElement}
        {labelPosition === 'right' && labelElement}
      </div>
    );
  }

  return toggleElement;
});

NToggle.displayName = 'NToggle';

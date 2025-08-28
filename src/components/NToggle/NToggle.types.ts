import { ReactNode, CSSProperties } from 'react';

export type ToggleSize = 'small' | 'medium' | 'large';
export type KnobShape = 'round' | 'square';

export interface NToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: ToggleSize;
  onColor?: string;
  offColor?: string;
  knobColor?: string;
  knobShape?: KnobShape;
  onText?: string;
  offText?: string;
  onIcon?: ReactNode;
  offIcon?: ReactNode;
  label?: string;
  labelPosition?: 'left' | 'right';
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (checked: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  id?: string;
}

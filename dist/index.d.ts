import React, { ReactNode, CSSProperties } from 'react';

type BadgeType = 'dot' | 'number' | 'text' | 'icon';
type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
type BadgeSize = 'small' | 'medium' | 'large';
type BadgeShape = 'round' | 'square' | 'pill';
interface BadgeOffset {
    x: number;
    y: number;
}
interface NBadgeProps {
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

declare const NBadge: React.ForwardRefExoticComponent<NBadgeProps & React.RefAttributes<HTMLDivElement>>;

type ToggleSize = 'small' | 'medium' | 'large';
type KnobShape = 'round' | 'square';
interface NToggleProps {
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

declare const NToggle: React.ForwardRefExoticComponent<NToggleProps & React.RefAttributes<HTMLButtonElement>>;

declare const classNames: (...classes: (string | undefined | null | false)[]) => string;
declare const mergeStyles: (...styles: (CSSProperties | undefined)[]) => CSSProperties;

export { NBadge, NBadgeProps, NToggle, NToggleProps, classNames, mergeStyles, NBadge as nbadge, NToggle as ntoggle };

// Utility functions for the library
import type { CSSProperties } from 'react';

export const classNames = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
};

export const mergeStyles = (...styles: (CSSProperties | undefined)[]): CSSProperties => {
    const definedStyles = styles.filter((s): s is CSSProperties => Boolean(s));
    return definedStyles.reduce<CSSProperties>((acc, style) => ({ ...acc, ...style }), {} as CSSProperties);
};

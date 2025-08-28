import { CSSProperties } from 'react';
import { BadgePosition, BadgeSize, BadgeShape } from './NBadge.types';
export declare const getBadgeWrapperStyles: () => CSSProperties;
export declare const getBadgeStyles: (position: BadgePosition, size: BadgeSize, shape: BadgeShape, color?: string, backgroundColor?: string, borderColor?: string, offset?: {
    x: number;
    y: number;
}) => CSSProperties;
export declare const getDotStyles: (size: BadgeSize) => CSSProperties;

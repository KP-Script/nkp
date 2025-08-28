import { CSSProperties } from 'react';
import { ToggleSize, KnobShape } from './NToggle.types';
export declare const getToggleWrapperStyles: () => CSSProperties;
export declare const getToggleStyles: (size: ToggleSize, checked: boolean, disabled: boolean, onColor?: string, offColor?: string, animated?: boolean) => CSSProperties;
export declare const getKnobStyles: (size: ToggleSize, checked: boolean, knobShape: KnobShape, knobColor?: string, animated?: boolean) => CSSProperties;
export declare const getLabelStyles: () => CSSProperties;
export declare const getTextStyles: (size: ToggleSize) => CSSProperties;
export declare const getOnTextStyles: (size: ToggleSize) => CSSProperties;
export declare const getOffTextStyles: (size: ToggleSize) => CSSProperties;

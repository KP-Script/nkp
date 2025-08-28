import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useCallback } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var getBadgeWrapperStyles = function () { return ({
    position: 'relative',
    display: 'inline-block',
}); };
var getBadgeStyles = function (position, size, shape, color, backgroundColor, borderColor, offset) {
    var sizeMap = {
        small: { minWidth: '16px', height: '16px', fontSize: '10px', padding: '0 4px' },
        medium: { minWidth: '20px', height: '20px', fontSize: '12px', padding: '0 6px' },
        large: { minWidth: '24px', height: '24px', fontSize: '14px', padding: '0 8px' },
    };
    var positionMap = {
        'top-left': { top: '0', left: '0', transform: 'translate(-50%, -50%)' },
        'top-right': { top: '0', right: '0', transform: 'translate(50%, -50%)' },
        'bottom-left': { bottom: '0', left: '0', transform: 'translate(-50%, 50%)' },
        'bottom-right': { bottom: '0', right: '0', transform: 'translate(50%, 50%)' },
        'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    };
    var shapeMap = {
        round: { borderRadius: '50%' },
        square: { borderRadius: '0' },
        pill: { borderRadius: '10px' },
    };
    var baseStyles = __assign(__assign(__assign(__assign({ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', lineHeight: 1, whiteSpace: 'nowrap', textAlign: 'center', border: borderColor ? "1px solid ".concat(borderColor) : 'none', boxSizing: 'border-box', zIndex: 1 }, sizeMap[size]), positionMap[position]), shapeMap[shape]), { color: color || '#fff', backgroundColor: backgroundColor || '#ff4d4f' });
    if (offset) {
        var currentTransform = baseStyles.transform || '';
        baseStyles.transform = "".concat(currentTransform, " translate(").concat(offset.x, "px, ").concat(offset.y, "px)");
    }
    return baseStyles;
};
var getDotStyles = function (size) {
    var dotSizeMap = {
        small: { width: '8px', height: '8px' },
        medium: { width: '10px', height: '10px' },
        large: { width: '12px', height: '12px' },
    };
    return __assign(__assign({}, dotSizeMap[size]), { minWidth: 'unset', padding: 0, borderRadius: '50%' });
};

var NBadge = forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, _b = _a.type, type = _b === void 0 ? 'number' : _b, _c = _a.position, position = _c === void 0 ? 'top-right' : _c, offset = _a.offset, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.shape, shape = _e === void 0 ? 'round' : _e, color = _a.color, backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, _f = _a.maxCount, maxCount = _f === void 0 ? 99 : _f, _g = _a.showZero, showZero = _g === void 0 ? false : _g, _h = _a.dot, dot = _h === void 0 ? false : _h, _j = _a.invisible, invisible = _j === void 0 ? false : _j, _k = _a.className, className = _k === void 0 ? '' : _k, style = _a.style, badgeStyle = _a.badgeStyle, onClick = _a.onClick, ariaLabel = _a["aria-label"], props = __rest(_a, ["children", "content", "type", "position", "offset", "size", "shape", "color", "backgroundColor", "borderColor", "maxCount", "showZero", "dot", "invisible", "className", "style", "badgeStyle", "onClick", 'aria-label']);
    var renderBadgeContent = function () {
        if (dot || type === 'dot')
            return null;
        if (type === 'number' && typeof content === 'number') {
            if (content === 0 && !showZero)
                return null;
            return content > maxCount ? "".concat(maxCount, "+") : content;
        }
        return content;
    };
    var badgeContent = renderBadgeContent();
    var isDot = dot || type === 'dot';
    var shouldShowBadge = !invisible && (isDot || badgeContent !== null);
    var badgeStyles = __assign(__assign(__assign({}, getBadgeStyles(position, size, shape, color, backgroundColor, borderColor, offset)), (isDot ? getDotStyles(size) : {})), badgeStyle);
    return (jsxs("div", __assign({ ref: ref, className: "nkp-badge-wrapper ".concat(className), style: __assign(__assign({}, getBadgeWrapperStyles()), style) }, props, { children: [children, shouldShowBadge && (jsx("span", __assign({ className: "nkp-badge", style: badgeStyles, onClick: onClick, "aria-label": ariaLabel || (typeof badgeContent === 'string' || typeof badgeContent === 'number' ? "Badge: ".concat(badgeContent) : 'Badge'), role: onClick ? 'button' : undefined, tabIndex: onClick ? 0 : undefined }, { children: !isDot && badgeContent })))] })));
});
NBadge.displayName = 'NBadge';

var getToggleWrapperStyles = function () { return ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
}); };
var getToggleStyles = function (size, checked, disabled, onColor, offColor, animated) {
    var sizeMap = {
        small: { width: 32, height: 18 },
        medium: { width: 44, height: 24 },
        large: { width: 56, height: 30 },
    };
    return __assign(__assign({ position: 'relative', display: 'inline-flex', alignItems: 'center' }, sizeMap[size]), { backgroundColor: checked ? (onColor || '#1890ff') : (offColor || '#d9d9d9'), borderRadius: sizeMap[size].height / 2, cursor: disabled ? 'not-allowed' : 'pointer', transition: animated ? 'all 0.2s ease-in-out' : 'none', opacity: disabled ? 0.6 : 1, border: 'none', outline: 'none', boxSizing: 'border-box' });
};
var getKnobStyles = function (size, checked, knobShape, knobColor, animated) {
    var sizeMap = {
        small: { width: 14, height: 14, translateX: checked ? 16 : 2 },
        medium: { width: 20, height: 20, translateX: checked ? 22 : 2 },
        large: { width: 26, height: 26, translateX: checked ? 28 : 2 },
    };
    var knob = sizeMap[size];
    return {
        position: 'absolute',
        top: '50%',
        left: '0',
        width: knob.width,
        height: knob.height,
        backgroundColor: knobColor || '#fff',
        borderRadius: knobShape === 'round' ? '50%' : '2px',
        transform: "translateY(-50%) translateX(".concat(knob.translateX, "px)"),
        transition: animated ? 'transform 0.2s ease-in-out' : 'none',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px',
        color: '#666',
    };
};
var getLabelStyles = function () { return ({
    fontSize: '14px',
    color: '#333',
    userSelect: 'none',
}); };
var getTextStyles = function (size) { return ({
    position: 'absolute',
    fontSize: size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px',
    fontWeight: 'bold',
    color: '#fff',
    userSelect: 'none',
    pointerEvents: 'none',
}); };
var getOnTextStyles = function (size) { return (__assign(__assign({}, getTextStyles(size)), { left: size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px' })); };
var getOffTextStyles = function (size) { return (__assign(__assign({}, getTextStyles(size)), { right: size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px' })); };

var NToggle = forwardRef(function (_a, ref) {
    var checked = _a.checked, _b = _a.defaultChecked, defaultChecked = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, onColor = _a.onColor, offColor = _a.offColor, knobColor = _a.knobColor, _e = _a.knobShape, knobShape = _e === void 0 ? 'round' : _e, onText = _a.onText, offText = _a.offText, onIcon = _a.onIcon, offIcon = _a.offIcon, label = _a.label, _f = _a.labelPosition, labelPosition = _f === void 0 ? 'right' : _f, _g = _a.animated, animated = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? '' : _h, style = _a.style, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], id = _a.id, props = __rest(_a, ["checked", "defaultChecked", "disabled", "size", "onColor", "offColor", "knobColor", "knobShape", "onText", "offText", "onIcon", "offIcon", "label", "labelPosition", "animated", "className", "style", "onChange", "onFocus", "onBlur", 'aria-label', 'aria-labelledby', "id"]);
    var _j = useState(defaultChecked), internalChecked = _j[0], setInternalChecked = _j[1];
    var isControlled = checked !== undefined;
    var checkedValue = isControlled ? checked : internalChecked;
    var handleToggle = useCallback(function () {
        if (disabled)
            return;
        var newChecked = !checkedValue;
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newChecked);
    }, [checkedValue, disabled, isControlled, onChange]);
    var handleKeyDown = useCallback(function (event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleToggle();
        }
    }, [handleToggle]);
    var toggleElement = (jsxs("button", __assign({ ref: ref, type: "button", role: "switch", "aria-checked": checkedValue, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, disabled: disabled, id: id, className: "nkp-toggle ".concat(className), style: __assign(__assign({}, getToggleStyles(size, checkedValue, disabled, onColor, offColor, animated)), style), onClick: handleToggle, onKeyDown: handleKeyDown, onFocus: onFocus, onBlur: onBlur }, props, { children: [onText && checkedValue && (jsx("span", __assign({ style: getOnTextStyles(size) }, { children: onText }))), offText && !checkedValue && (jsx("span", __assign({ style: getOffTextStyles(size) }, { children: offText }))), jsx("span", __assign({ className: "nkp-toggle-knob", style: getKnobStyles(size, checkedValue, knobShape, knobColor, animated) }, { children: checkedValue ? onIcon : offIcon }))] })));
    if (label) {
        var labelElement = (jsx("span", __assign({ style: getLabelStyles() }, { children: label })));
        return (jsxs("div", __assign({ className: "nkp-toggle-wrapper", style: getToggleWrapperStyles() }, { children: [labelPosition === 'left' && labelElement, toggleElement, labelPosition === 'right' && labelElement] })));
    }
    return toggleElement;
});
NToggle.displayName = 'NToggle';

var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};
var mergeStyles = function () {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    var definedStyles = styles.filter(function (s) { return Boolean(s); });
    return definedStyles.reduce(function (acc, style) { return (__assign(__assign({}, acc), style)); }, {});
};

export { NBadge, NToggle, classNames, mergeStyles, NBadge as nbadge, NToggle as ntoggle };
//# sourceMappingURL=index.esm.js.map

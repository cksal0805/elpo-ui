import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

/*! *****************************************************************************
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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var buttonTheme = {
    color: {
        primary: '#3585f6',
        secondary: '#38d9a9',
        inherit: 'inherit',
    },
    size: {
        small: '100px',
        medium: '200px',
        large: '300px',
    }
};
var fillStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, disabled ? '#a9a9a9' : 'white', !disabled && animation && darken(0.06, selectColor));
};
var outlinedStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, selectColor, !disabled && animation && lighten(0.37, buttonTheme.color[color]));
};
var textStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: none;\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    border: none;\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, !disabled && animation && lighten(0.37, buttonTheme.color[color]));
};
var mobileStyle = function (_a) {
    var mobileViewsize = _a.mobileViewsize, size = _a.size;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  & .mobile {\n    display: none;\n  }\n  @media screen and (max-width: ", "px) {\n    width: calc(", " / 2);\n    & .mobile {\n      display: block;\n    }\n    & .init {\n      display: none;\n    }\n  }\n"], ["\n  & .mobile {\n    display: none;\n  }\n  @media screen and (max-width: ", "px) {\n    width: calc(", " / 2);\n    & .mobile {\n      display: block;\n    }\n    & .init {\n      display: none;\n    }\n  }\n"])), mobileViewsize, buttonTheme.size[size]);
};
var StyledButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 0;\n  padding: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  width: ", ";\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 0;\n  padding: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  width: ", ";\n  ", "\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    return (buttonTheme.size[size]);
}, function (_a) {
    var mobileViewsize = _a.mobileViewsize;
    return mobileViewsize && mobileStyle;
}, function (_a) {
    var theme = _a.theme;
    if (theme === 'fill') {
        return fillStyle;
    }
    else if (theme === 'outlined') {
        return outlinedStyle;
    }
    else {
        return textStyle;
    }
});
function Button(_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? 'fill' : _b, _c = _a.animation, animation = _c === void 0 ? true : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, startIcon = _a.startIcon, endIcon = _a.endIcon, mobileViewButton = _a.mobileViewButton, _f = _a.disabled, disabled = _f === void 0 ? false : _f;
    return (React.createElement(StyledButton, { disabled: disabled, theme: theme, color: color, animation: animation, size: size, mobileViewsize: mobileViewButton === null || mobileViewButton === void 0 ? void 0 : mobileViewButton.viewSize },
        mobileViewButton &&
            React.createElement("span", { className: "mobile" },
                React.createElement("span", null, mobileViewButton.icon)),
        React.createElement("span", { className: "init" },
            startIcon && React.createElement("span", null, startIcon),
            children,
            endIcon && React.createElement("span", null, endIcon))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { Button };
//# sourceMappingURL=index.es.js.map

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var polished = require('polished');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
        small: '4px 10px',
        medium: '8px 22px',
        large: '10px 34px',
    }
};
var fillStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, disabled ? '#a9a9a9' : 'white', !disabled && animation && polished.darken(0.06, selectColor));
};
var outlinedStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, selectColor, !disabled && animation && polished.lighten(0.37, buttonTheme.color[color]));
};
var textStyle = function (_a) {
    var color = _a.color, animation = _a.animation, disabled = _a.disabled;
    var selectColor = disabled ? '#e0e0e0' : buttonTheme.color[color];
    return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: none;\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "], ["\n    border: none;\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      transition: 0.6s;\n    }\n  "])), selectColor, !disabled && animation && polished.lighten(0.37, buttonTheme.color[color]));
};
var mobileStyle = function (_a) {
    var mobileViewsize = _a.mobileViewsize, size = _a.size;
    return styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  & .mobile {\n    display: none;\n  }\n  @media screen and (max-width: ", "px) {\n    padding: ", ";\n    & .mobile {\n      display: block;\n    }\n    & .init {\n      display: none;\n    }\n  }\n"], ["\n  & .mobile {\n    display: none;\n  }\n  @media screen and (max-width: ", "px) {\n    padding: ", ";\n    & .mobile {\n      display: block;\n    }\n    & .init {\n      display: none;\n    }\n  }\n"])), mobileViewsize, buttonTheme.size[size]);
};
var StartIcon = styled__default['default'].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inherit;\n  margin-left: -4px;\n  margin-right: 8px;\n"], ["\n  display: inherit;\n  margin-left: -4px;\n  margin-right: 8px;\n"])));
var EndIcon = styled__default['default'].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inherit;\n  margin-left: 8px;\n  margin-right: -4px;\n"], ["\n  display: inherit;\n  margin-left: 8px;\n  margin-right: -4px;\n"])));
var StyledButton = styled__default['default'].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  border: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  box-sizing: border-box;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  align-items: center;\n  padding: ", ";\n  & .init {\n    width: 100%;\n    display: inherit;\n    align-items: center;\n    justify-content: inherit;\n  }\n  ", "\n  ", "\n"], ["\n  display: flex;\n  border: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  box-sizing: border-box;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  align-items: center;\n  padding: ", ";\n  & .init {\n    width: 100%;\n    display: inherit;\n    align-items: center;\n    justify-content: inherit;\n  }\n  ", "\n  ",
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
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? 'fill' : _b, _c = _a.animation, animation = _c === void 0 ? true : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, startIcon = _a.startIcon, endIcon = _a.endIcon, mobileViewButton = _a.mobileViewButton, _f = _a.disabled, disabled = _f === void 0 ? false : _f, onClick = _a.onClick;
    return (React__default['default'].createElement(StyledButton, { disabled: disabled, theme: theme, color: color, animation: animation, size: size, mobileViewsize: mobileViewButton === null || mobileViewButton === void 0 ? void 0 : mobileViewButton.viewSize, onClick: onClick },
        mobileViewButton &&
            React__default['default'].createElement("span", { className: "mobile" },
                React__default['default'].createElement("span", null, mobileViewButton.icon)),
        React__default['default'].createElement("span", { className: "init" },
            startIcon && React__default['default'].createElement(StartIcon, null, startIcon),
            React__default['default'].createElement("span", null, children),
            endIcon && React__default['default'].createElement(EndIcon, null, endIcon))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

exports.Button = Button;
//# sourceMappingURL=index.js.map

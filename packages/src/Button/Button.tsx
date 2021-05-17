import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { IButtonProps, IStyleButtonProps } from './Button.type';

interface IButtonTheme {
  color: {
    [key: string]: string
  }
  size: {
    [key: string]: string
  }
}
const buttonTheme: IButtonTheme = {
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
}
const fillStyle = ({ color, animation, disabled }: IStyleButtonProps) => {
  const selectColor = disabled? '#e0e0e0' : buttonTheme.color[color];
  return css`
    background-color: ${selectColor};
    color: ${disabled ? '#a9a9a9' : 'white'};
    &:hover {
      background-color: ${!disabled && animation && darken(0.06, selectColor)};
      transition: 0.6s;
    }
  `
}
const outlinedStyle = ({ color, animation, disabled }: IStyleButtonProps) => {
  const selectColor = disabled? '#e0e0e0' : buttonTheme.color[color];
  return css`
    border: 1px solid ${selectColor};
    background-color: transparent;
    color: ${selectColor};
    &:hover {
      background-color: ${!disabled && animation && lighten(0.37, buttonTheme.color[color])};
      transition: 0.6s;
    }
  `
}

const textStyle = ({ color, animation, disabled }: IStyleButtonProps) => {
  const selectColor = disabled? '#e0e0e0' : buttonTheme.color[color];
  return css`
    border: none;
    background-color: transparent;
    color: ${selectColor};
    &:hover {
      background-color: ${!disabled && animation && lighten(0.37, buttonTheme.color[color])};
      transition: 0.6s;
    }
  `
}
const mobileStyle = ({ mobileViewsize, size }: IStyleButtonProps) => css`
  & .mobile {
    display: none;
  }
  @media screen and (max-width: ${mobileViewsize}px) {
    padding: ${buttonTheme.size[size]};
    & .mobile {
      display: block;
    }
    & .init {
      display: none;
    }
  }
`
const StartIcon = styled.span`
  display: inherit;
  margin-left: -4px;
  margin-right: 8px;
`
const EndIcon = styled.span`
  display: inherit;
  margin-left: 8px;
  margin-right: -4px;
`
const StyledButton = styled.button<IStyleButtonProps>`
  display: inline-flex;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  box-sizing: border-box;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: ${({ size }) => (buttonTheme.size[size])};
  & .init {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
  ${({mobileViewsize}) => mobileViewsize && mobileStyle}
  ${({ theme }) => {
    if (theme === 'fill') {
      return fillStyle;
    } else if (theme === 'outlined') {
      return outlinedStyle;
    } else {
      return textStyle;
    }}
  }
`
function Button({
  children, 
  theme='fill',
  animation=true,
  color='primary',
  size='medium',
  startIcon,
  endIcon,
  mobileViewButton,
  disabled=false,
  onClick
 }:IButtonProps):JSX.Element {
  return (
    <StyledButton
      disabled = {disabled}
      theme = {theme}
      color = {color}
      animation = {animation}
      size = {size}
      mobileViewsize = {mobileViewButton?.viewSize}
      onClick={onClick}
    >
      {
      mobileViewButton && 
      <span className="mobile">
        <span>{mobileViewButton.icon}</span>
      </span>
      }
      <span className="init">
        {startIcon && <StartIcon>{startIcon}</StartIcon>}
        <span>{children}</span>
        {endIcon && <EndIcon>{endIcon}</EndIcon>}
      </span>
    </StyledButton>
  );
}

export default Button;

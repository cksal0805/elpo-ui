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
    small: '100px',
    medium: '200px',
    large: '300px',
  }
}
const fillStyle = ({ color, animation }: IStyleButtonProps) => {
  return css`
    border: 1px solid ${buttonTheme.color[color]};
    background-color: ${buttonTheme.color[color]};
    color: white;
    &:hover {
      background-color: ${animation && darken(0.06, buttonTheme.color[color])};
      transition: 0.6s;
    }
  `
}
const outlinedStyle = ({ color, animation }: IStyleButtonProps) => {
  return css`
    border: 1px solid ${buttonTheme.color[color]};
    background-color: transparent;
    color: ${buttonTheme.color[color]};
    &:hover {
      background-color: ${animation && lighten(0.37, buttonTheme.color[color])};
      transition: 0.6s;
    }
  `
}

const textStyle = ({ color, animation }: IStyleButtonProps) => {
  return css`
    border: none;
    background-color: transparent;
    color: ${buttonTheme.color[color]};
    &:hover {
      background-color: ${animation && lighten(0.37, buttonTheme.color[color])};
      transition: 0.6s;
    }
  `
}
const mobileStyle = ({ mobileViewsize, size }: IStyleButtonProps) => css`
  & .mobile {
    display: none;
  }
  @media screen and (max-width: ${mobileViewsize}px) {
    width: calc(${buttonTheme.size[size]} / 2);
    & .mobile {
      display: block;
    }
    & .init {
      display: none;
    }
  }
`
const StyledButton = styled.button<IStyleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 0;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  width: ${({ size }) => (buttonTheme.size[size])};
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
 }:IButtonProps):JSX.Element {
  return (
    <StyledButton
      disabled = {disabled}
      theme = {theme}
      color = {color}
      animation = {animation}
      size = {size}
      mobileViewsize = {mobileViewButton?.viewSize}
    >
      {
      mobileViewButton && 
      <span className="mobile">
        <span>{mobileViewButton.icon}</span>
      </span>
      }
      <span className="init">
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </span>
    </StyledButton>
  );
}

export default Button;

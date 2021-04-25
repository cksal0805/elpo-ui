import React from 'react';
import { IButtonProps } from './Button.type';

function Button({ children }:IButtonProps):JSX.Element {
  return (
    <button type="button">
      {children}
    </button>
  );
}

export default Button;

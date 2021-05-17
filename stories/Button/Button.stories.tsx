import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { IButtonProps } from './Button.type';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<IButtonProps> = args => <Button {...args}>버튼</Button>;

export const FillButton = Template.bind({});
FillButton.args = {
  theme: 'fill',
  size: 'medium',
  mobileViewButton: {
    icon: <div>mo</div>,
    viewSize: '1000',
  },
};

export const FillDisabledButton = Template.bind({});
FillDisabledButton.args = {
  theme: 'fill',
  disabled: true,
};

export const OutlineDisabledButton = Template.bind({});
OutlineDisabledButton.args = {
  theme: 'outlined',
  disabled: true,
};

export const TextDisabledButton = Template.bind({});
TextDisabledButton.args = {
  theme: 'text',
  disabled: true,
};
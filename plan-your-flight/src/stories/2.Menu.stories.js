import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import MainMenu from '../components/MainMenu/MainMenu';

export default {
  title: 'Menu',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Menu = () => (
  <MainMenu/>
);

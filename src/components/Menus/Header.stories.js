import React from 'react';
import Header from './Header';
import { fn } from '@storybook/test';

export default {
  title: 'Header/Header',
  component: Header,
};
const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Header Title',
  onToggleAppGrid: () => {fn()},
};
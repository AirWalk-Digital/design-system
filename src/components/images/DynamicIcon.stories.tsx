import React from 'react';
import { StoryFn } from '@storybook/react';
import DynamicIcon, { DynamicIconProps } from './DynamicIcon';

export default {
  title: 'Images & Icons/DynamicIcon',
  component: DynamicIcon,
  tags: ['autodocs'],
};

const Template: StoryFn<DynamicIconProps> = (args) => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>;

export const LightCloud = Template.bind({});
LightCloud.args = {
  style: 'light',
  iconName: 'cloud',
  size: '10x'
};

export const SolidUser = Template.bind({});
SolidUser.args = {
  style: 'solid',
  iconName: 'user',
  size: '10x'
};

export const RegularClock = Template.bind({});
RegularClock.args = {
  style: 'regular',
  iconName: 'clock',
  size: '10x'
};

export const DuotoneCamera = Template.bind({});
DuotoneCamera.args = {
  style: 'duotone',
  iconName: 'camera',
  size: '10x'
};

export const Automation = Template.bind({});
Automation.args = {
  style: 'kit',
  iconName: 'automation',
  size: '10x'
};


// // Dynamically create stories for each icon in the list
// iconList.forEach((icon) => {
//   const storyName = `${icon.style.charAt(0).toUpperCase() + icon.style.slice(1)}${icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}`;
//   export const [storyName] = Template.bind({});
//   [storyName].args = { style: icon.style, iconName: icon.name };
// });
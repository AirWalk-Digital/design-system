import React from 'react';
import AppLauncher from './AppLauncher';

export default {
  title: 'Header/AppLauncher',
  component: AppLauncher,
};

const Template = (args) => <AppLauncher {...args} />;

export const Default = Template.bind({});
Default.args = {
  apps: [
    {
      name: 'Mail',
      style: 'kit',
      link: 'https://mail.example.com',
      icon: 'automation',
    },
    {
      name: 'Calendar',
      style: 'light',
      link: 'https://calendar.example.com',
      icon: 'calendar',
    },
    // Add more app items here...
  ],
};
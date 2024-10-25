/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { IconProvider } from '../src/components/images/IconProvider';
import React from 'react';
import '../src/index.css';

const preview = {
  parameters: {
    tags: ['autodocs'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  (Story) => (
    <IconProvider>
      <Story />
    </IconProvider>
  ),
];

export default preview;

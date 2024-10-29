/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js
// import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { withThemeByClassName } from '@storybook/addon-themes';

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
  // withThemeByDataAttribute({
  //   themes: {
  //     light: 'light',
  //     dark: 'dark',
  //   },
  //   defaultTheme: 'light',
  //   attributeName: 'data-mode',
  // }),
  withThemeByClassName<Renderer>({
        themes: {
          light: '',
          dark: 'dark',
          green: 'green',
        },
        defaultTheme: 'light',
      }),
  (Story) => (
      <Story />
  ),
];

export default preview;

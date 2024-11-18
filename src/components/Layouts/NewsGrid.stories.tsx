import * as React from 'react';
import NewsGrid from './NewsGrid';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof NewsGrid> = {
  title: 'Layouts/NewsGrid',
  component: NewsGrid,
  tags: ['autodocs'],
  argTypes: {
    // color: {
    //   options: ['primary', 'secondary', 'tertiary', 'quaternary', 'highlight', 'accent', 'muted', 'paper'],
    //   control: { type: 'select' },
    // }
  },
  decorators: [
    (Story: React.FC) => (
        <div className="p-2">
        <Story />
      </div>
    ),
  ],
  
};
export default meta;

type Story = StoryObj<typeof NewsGrid>;

export const Primary: Story = {
  args : {
//   icon: { type: 'thin', name: 'star' },
//   title : 'Primary Insights',
//   body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.',
//   color: 'secondary',
}
};


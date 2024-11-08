// import { toSnakeCase } from '@/lib/utils/stringUtils';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import { GithubBranchDialog } from './GithubBranchDialog';
import { Toaster } from "@/components/ui/toaster"

export default {
  title: 'Editor/GithubBranchDialog',
  component: GithubBranchDialog,
  parameters: {},
  tags: ['autodocs'],
  args: {
    open: true,
    onSubmit: fn(),
    onOpenChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Story />
          <Toaster />
      </div>
    ),
  ],
} as Meta<typeof GithubBranchDialog>;

type Story = StoryObj<typeof GithubBranchDialog>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <GithubBranchDialog
        open={args.open}
        onSubmit={args.onSubmit}
        onOpenChange={args.onOpenChange}
        // other props you might need to pass
      />
    );
  },
};
export const Default: Story = {
  ...Template,
};

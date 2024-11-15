import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import type { ContentItem } from '@/lib/Types';

import GithubControl from './GithubControl';

import { GithubBranchDialog } from './GithubBranchDialog';
import { Toaster } from "@/components/ui/toaster"

async function dummyDelay(result: string) {
  fn();
  const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  switch (result) {
    case 'success':
      return 'success';
    case 'other':
        return 'other';
    case 'error':
      throw new Error('An error occurred');
    default:
      throw new Error('An error occurred');
  }
}


export default {
  title: 'Editor/GithubControl',
  component: GithubControl,
  tags: ['autodocs'],
  parameters: {
    actions: { argTypesRegex: '^on.*|^handle*' },
    nextjs: {
      appDirectory: true,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    result: { control: { type: 'radio' }, options: ['success', 'error'] },
    // backgroundColor: { control: 'color' },
  },

  args: {
    onBranchChange: () => dummyDelay('success'),
    onPR: () => dummyDelay('success'),
    onPublishDraft: () => dummyDelay('success'),
    onSave: () => dummyDelay('success'),
    onNewBranch: () => dummyDelay('success'),
  },
  
  decorators: [
    (Story) => (
      <div style={{ '--sidebar-width': '16rem', display: 'flex', justifyContent: 'center', alignItems: 'center' } as React.CSSProperties}>
        <div className="--sidebar-width:16rem w-[--sidebar-width]">
          <Story/>
          <Toaster />
        </div>
      </div>
    ),
  ],
} as Meta<typeof GithubControl>;

const dummyContext: ContentItem = {
  source: 'github',
  repo: 'airwalk_patterns',
  owner: 'airwalk-digital',
  branch: 'main',
  path: 'providers',
  reference: 'provider',
  collections: ['services'],
};

const branches = [
  {
    name: 'main',
    commit: {
      sha: '53bfd8457509778140caa47b01c6476d661f1b34',
      url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34',
    },
    protected: true,
  },
  {
    name: 'branch-1',
    commit: {
      sha: '53bfd8457509778140caa47b01c6476d661f1b34',
      url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34',
    },
    protected: false,
  },
  {
    name: 'branch-2-and-a-very-long-name-even-longer-than-this',
    commit: {
      sha: '09a01dc4e148c35412d3a6a00a384930a41b813b',
      url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/09a01dc4e148c35412d3a6a00a384930a41b813b',
    },
    protected: false,
  },
  {
    name: 'branch-3',
    commit: {
      sha: '7080423b89568b0427cb781f8b753f52fbc394e0',
      url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0',
    },
    protected: false,
  },
];

export const Simple = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext, branch: 'branch-1' },
    branches,
    // editMode: false,
    fetchBranches: fn(),
  },
};

export const Fail = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext, branch: 'branch-1' },
    branches,
    onNewBranch: () => dummyDelay('error'),
    fetchBranches: fn(),
  },
};

export const BadResponse = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext, branch: 'branch-1' },
    branches,
    onNewBranch: () => dummyDelay('other'),
    fetchBranches: fn(),
  },
};

export const ReallyLongBranchName = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext, branch: 'branch-with-a-very-long-name-even-longer-than-this' },
    branches: [{
      name: 'branch-with-a-very-long-name-even-longer-than-this',
      commit: {
        sha: '7080423b89568b0427cb781f8b753f52fbc394e0',
        url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0',
      },
      protected: false,
    },...branches],
    fetchBranches: fn(),
  },
};

export const LotsOfBranches = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext, branch: 'branch-1' },
    branches: [ ...branches, ...branches, ...branches, ...branches, ...branches, ...branches ],
    // editMode: false,
    fetchBranches: fn(),
  },
};


export const DefaultBranch = {
  args: {
    defaultContext: dummyContext,
    context: { ...dummyContext },
    branches,
    fetchBranches: fn(),
  },
};

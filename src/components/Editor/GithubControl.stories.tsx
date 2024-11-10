import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import type { ContentItem } from '@/lib/Types';

import GithubControl from './GithubControl';

import { GithubBranchDialog } from './GithubBranchDialog';
import { Toaster } from "@/components/ui/toaster"

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
    handlePublishDraft: fn(),
    // fetchBranches?: (collection: any) => void;
    handleNewBranch: fn(),
    handlePR: fn(),
  },
  
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="w-[--sidebar-width]">
          <Story/>
          <Toaster />
        </div>
      </div>
    ),
  ],
} as Meta<typeof GithubControl>;

// const Template: StoryFn<typeof GithubControl> = (args) => <GithubControl {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   open: true,
//   height: '64px',
//   handleEdit: fn(),
//   handlePrint: () => alert('Print clicked'),
//   handleAdd: () => alert('Add clicked'),
//   handlePresentation: () => alert('Presentation clicked'),
//   collection: { branch: 'main' },
//   context: { branch: 'main' },
//   branches: [{ name: 'main' }, { name: 'dev' }],
//   onContextUpdate: (context) => console.log('Context updated', context),
//   editMode: false,
// };

interface ExtendedContentItem extends ContentItem {
  base_branch: string;
}

const dummyCollection: ExtendedContentItem = {
  source: 'github',
  repo: 'airwalk_patterns',
  owner: 'airwalk-digital',
  branch: 'main',
  base_branch: 'main',
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
    name: 'branch-2',
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

// function fn()() {}

export const Simple = {
  args: {
    open: true,
    collection: dummyCollection,
    context: { ...dummyCollection, branch: 'branch-1' },
    branches,
    // editMode: false,
    fetchBranches: fn(),
  },
};

export const EditMode = {
  args: {
    open: true,
    top: 0,
    handleEdit: fn(),
    handleRefresh: fn(),
    handlePrint: fn(),
    handleAddContent: fn(),
    onContextUpdate: fn(),
    handlePresentation: fn(),
    handlePublishDraft: fn(),
    collection: dummyCollection,
    context: { ...dummyCollection, branch: 'branch-1' },
    branches,
    editMode: true,
    fetchBranches: fn(),
    handlePR: fn(),
  },
};

export const DefaultBranch = {
  args: {
    open: true,
    top: 0,
    handleEdit: fn(),
    handleRefresh: fn(),
    handlePrint: fn(),
    handleAdd: fn(),
    onContextUpdate: fn(),
    handlePresentation: fn(),
    collection: dummyCollection,
    context: { ...dummyCollection },
    branches,
    editMode: true,
    fetchBranches: fn(),
  },
};

const Template: StoryFn<typeof GithubControl> = (args: any) => {
  // const [collection, setCollection] = useState(dummyCollection);
  const context: ContentItem = {
    branch: 'main',
    collections: [''],
    source: '',
    repo: '',
    owner: '',
    path: '',
    reference: '',
  };

  async function dummyDelay() {
    fn();
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // await delay(2000);
    switch (args.result) {
      case 'success':
        return 'success';
      case 'error':
        throw new Error('An error occurred');
      default:
        throw new Error('An error occurred');
    }
  }

  return (
    <GithubControl
      {...args}
      collection={args.collection}
      context={context}
      branches={args.branches}
      handlePR={() => dummyDelay()}
    />
  );
};

export const FullDemo: StoryFn<typeof GithubControl> = Template.bind({});
FullDemo.args = {
  collection: dummyCollection,
  context: { ...dummyCollection, branch: 'branch-1' },
  branches: branches.map((branch) => branch.name),
  handlePR: async () => await dummyFn(true)
};

export const APISuccess: StoryFn<typeof GithubControl> = Template.bind({});
APISuccess.args = {
  collection: dummyCollection,
  context: { ...dummyCollection, branch: 'branch-1' },
  branches: branches.map((branch) => branch.name),
  handlePR: async () => await dummyFn(true)
};

export const APIError: StoryFn<typeof GithubControl> = Template.bind({});
APIError.args = {
  collection: dummyCollection,
  context: { ...dummyCollection, branch: 'branch-1' },
  branches: branches.map((branch) => branch.name),
  handlePR: async () => await dummyFn(true)
};


async function dummyFn(state: boolean) {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(2000);
  if (state) {
    return 'success';
  } else {
    throw new Error('An error occurred');
  }
}

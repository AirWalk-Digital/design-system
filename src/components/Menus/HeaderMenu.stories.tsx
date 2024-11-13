import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

import HeaderMenu from './HeaderMenu';
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';

export default {
  title: 'Menus/HeaderMenu',
  component: HeaderMenu,
} as Meta<typeof HeaderMenu>;

type Story = StoryObj<typeof HeaderMenu>;

export const Primary: Story = {
  args: {
    name: 'Product',
    items: [
      {
        name: 'Analytics',
        description: 'Understand your traffic',
        href: '#',
        icon: ChartPieIcon, // Pass the component, not <ChartPieIcon />
      },
      {
        name: 'Engagement',
        description: 'Interact with customers',
        href: '#',
        icon: CursorArrowRaysIcon,
      },
      {
        name: 'Security',
        description: 'Protect your data',
        href: '#',
        icon: FingerPrintIcon,
      },
    ],
    actions: [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
        { name: 'View all products', href: '#', icon: RectangleGroupIcon },
      ]
  },
};

export const LinkOnly: Story = {
    args: {
      name: 'Link Only',
      href: '#',
    },
  };

  export const LotsOfItems: Story = {
    args: {
      name: 'Product',
      items: [
        {
          name: 'Analytics',
          description: 'Understand your traffic',
          href: '#',
          icon: ChartPieIcon, // Pass the component, not <ChartPieIcon />
        },
        {
          name: 'Engagement',
          description: 'Interact with customers',
          href: '#',
          icon: CursorArrowRaysIcon,
        },
        {
          name: 'Security',
          description: 'Protect your data',
          href: '#',
          icon: FingerPrintIcon,
        },
        {
          name: 'Security',
          description: 'Protect your data',
          href: '#',
          icon: FingerPrintIcon,
        },
        {
          name: 'Security2',
          description: 'Protect your data',
          href: '#',
          icon: FingerPrintIcon,
        },
        {
          name: 'Security3',
          description: 'Protect your data',
          href: '#',
          icon: FingerPrintIcon,
        },
        {
          name: 'Security4',
          description: 'Protect your data',
          href: '#',
          icon: FingerPrintIcon,
        },
      ],
      actions: [
          { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
          { name: 'Contact sales', href: '#', icon: PhoneIcon },
          { name: 'View all products', href: '#', icon: RectangleGroupIcon },
        ]
    },
  };
  
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {FeatureCard} from '@components/Cards/FeatureCard';
import FeatureGrid from '@components/Layouts/FeatureGrid';
import { FeatureCardProps } from '@components/Cards/FeatureCard';

export default {
  title: 'Layouts/FeatureGrid',
  component: FeatureGrid,
} as Meta;

// Template for FeatureCardGrid
const Template: StoryFn = (args) => <FeatureGrid {...args} />;

// Default Story
export const Default = Template.bind({});

// Example of multiple FeatureCards inside FeatureCardGrid
Default.args = {
  children: (
    <>
      <FeatureCard
        title="Performance"
        description="Boost your app performance"
        iconName="rocket"
        iconStyle="solid"
        color="blue"
      />
      <FeatureCard
        title="Security"
        description="Keep your data safe"
        iconName="shield-alt"
        iconStyle="solid"
        color="blue"
      />
      <FeatureCard
        title="Automation"
        description="Automate your processes"
        iconName="robot"
        iconStyle="regular"
        color="green"
      />
    </>
  ),
};
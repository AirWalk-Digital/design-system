import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { IconProvider } from '../images/IconProvider';

export default {
  title: 'Cards/FeatureCard',
  component: FeatureCard,
  decorators: [
    (Story) => (
      <IconProvider>
        <Story />
      </IconProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<FeatureCardProps> = (args) => <FeatureCard {...args} />;

export const GreenCard = Template.bind({});
GreenCard.args = {
  title: 'Green Feature',
  description: 'This is a green feature card.',
  iconName: 'check-circle',
  iconStyle: 'solid',
  color: 'green',
};

export const BlueCard = Template.bind({});
BlueCard.args = {
  title: 'Blue Feature',
  description: 'This is a blue feature card.',
  iconName: 'info-circle',
  iconStyle: 'regular',
  color: 'blue',
};

export const NavyCard = Template.bind({});
NavyCard.args = {
  title: 'Navy Feature',
  description: 'This is a navy feature card.',
  iconName: 'star',
  iconStyle: 'duotone',
  color: 'navy',
};
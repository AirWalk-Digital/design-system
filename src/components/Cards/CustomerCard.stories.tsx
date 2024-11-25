import type { Meta, StoryObj } from '@storybook/react';
import { CustomerCard } from './CustomerCard';


export default {
  title: 'Cards/CustomerCard',
  component: CustomerCard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['birthday', 'work_anniversary', 'company_event'],
    },
    date: { control: 'date' },
    title: { control: 'text' },
    description: { control: 'text' },
    avatarSrc: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof CustomerCard>;

export const Default: Story = {
  args:   { name: "Acme Corp", logo: "/logos/acme.png", href: "/customers/acme"},
  
};
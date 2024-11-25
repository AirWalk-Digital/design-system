import * as React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

/**
 * An image element with a fallback for representing the user.
 */
const meta = {
  title: "Base/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the avatar.
 */
export const Default: Story = {}

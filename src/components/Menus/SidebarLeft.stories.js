import {
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    Check,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    FilePlus,
    Edit,
    Printer,
    Folder,
    Frame,
    LifeBuoy,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Send,
    Settings2,
    Share,
    Plus,
    Sparkles,
    SquareTerminal,
    Trash2,
  } from "lucide-react"

import React from 'react';
import SidebarLeft from './SidebarLeft';
import { SidebarProvider } from '@/components/ui/sidebar';
import { fn } from "@storybook/test";
export default {
  title: 'Menus/SidebarLeft',
  component: SidebarLeft,
};

const Template = (args) => <SidebarProvider><SidebarLeft {...args} /></SidebarProvider>;

export const Default = Template.bind({});
Default.args = {
    title: "Playground",
    subTitle: "Airview",
    mainNav: [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    secondaryNav: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
    onSidebarMenu : fn()
  }
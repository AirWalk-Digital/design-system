import React from 'react';
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
import Documentation from './Documentation.js';
import { fn } from '@storybook/test';

export default {
  title: 'Pages/Documentation',
  component: Documentation,
  decorators: [
    (Story: React.FC) => (
      <div className="bg-sidebar">
        <Story />
      </div>
    ),
  ],
};

const Template = (args: any) => <Documentation {...args} />;

export const Default = {
  render: Template,
  args: {
    onToggleAppGrid: () => { fn() },
    sidebarLeft: {
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
    },
    sidebarRight: {
      tableOfContents: [
        {
          title: "Getting Started",
          url: "#",
          items: [
            {
              title: "Installation",
              url: "#",
              isActive: true,
            },
            {
              title: "Project Structure",
              url: "#",
            },
          ],
        },
        {
          title: "Building Your Application",
          url: "#",
          items: [
            {
              title: "Routing",
              url: "#",
              isDraft: true,
            },
            {
              title: "Data Fetching",
              url: "#",
            },
            {
              title: "Rendering",
              url: "#",
            },
            {
              title: "Caching",
              url: "#",
            },
            {
              title: "Styling",
              url: "#",
            },
            {
              title: "Optimizing",
              url: "#",
            },
            {
              title: "Configuring",
              url: "#",
            },
            {
              title: "Testing",
              url: "#",
            },
            {
              title: "Authentication",
              url: "#",
            },
            {
              title: "Deploying",
              url: "#",
            },
            {
              title: "Upgrading",
              url: "#",
            },
            {
              title: "Examples",
              url: "#",
            },
          ],
        },
        {
          title: "API Reference",
          url: "#",
          items: [
            {
              title: "Components",
              url: "#",
            },
            {
              title: "File Conventions",
              url: "#",
            },
            {
              title: "Functions",
              url: "#",
            },
            {
              title: "next.config.js Options",
              url: "#",
            },
            {
              title: "CLI",
              url: "#",
            },
            {
              title: "Edge Runtime",
              url: "#",
            },
          ],
        },
        {
          title: "Architecture",
          url: "#",
          items: [
            {
              title: "Accessibility",
              url: "#",
            },
            {
              title: "Fast Refresh",
              url: "#",
            },
            {
              title: "Next.js Compiler",
              url: "#",
            },
            {
              title: "Supported Browsers",
              url: "#",
            },
            {
              title: "Turbopack",
              url: "#",
            },
          ],
        },
        {
          title: "Community",
          url: "#",
          items: [
            {
              title: "Contribution Guide",
              url: "#",
            },
          ],
        },
      ],
      onAddDocument: fn(),
      onEditDocument: fn(),
      onPrintDocument: fn(),
    },
  },
};
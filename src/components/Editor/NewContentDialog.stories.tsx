import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { delay, http, HttpResponse } from 'msw';
import React from 'react';
import { Target } from 'lucide-react';
import { faLayerGroup, faNotebook } from '@awesome.me/kit-ff3b5aaa16/icons/classic/light';
import { NewContentDialog } from './NewContentDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { type SiteConfig } from '@/lib/Types';
import { Toaster } from "@/components/ui/toaster"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Editor/NewContentDialog',
  component: NewContentDialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    handleAdd: { action: 'clicked' },
    // backgroundColor: { control: 'color' },
  },
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
} as Meta<typeof NewContentDialog>;


type Story = StoryObj<typeof NewContentDialog>;

const Provider = <FontAwesomeIcon icon={faLayerGroup} />
const Note = <FontAwesomeIcon icon={faNotebook} />
const config: SiteConfig["content"] = {
    services: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'services', // the base path for the content
        reference: 'service', // how the collection is referred to in frontmatter links
        collections: ['knowledge', 'designs'],
        icon: Target,
        menu: { component: 'MainButtonMenu', collection: 'providers' }, // the menu to use on the left and the baseline for the menu
      },
      providers: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'providers', // the base path for the content
        reference: 'provider', // how the collection is referred to in frontmatter links
        collections: ['services', 'notes'],
        icon: Provider,
        menu: {
          component: 'MainButtonMenu',
          collection: 'providers',
          scope: 'services',
        }, // the menu to use on the left and the baseline for the menu
      },
      solutions: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'solutions', // the base path for the content
        reference: 'solution', // how the collection is referred to in frontmatter links
        collections: ['knowledge', 'designs'],
        menu: { component: 'MainButtonMenu', collection: 'solutions' }, // the menu to use on the left and the baseline for the menu
      },
      knowledge: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'knowledge', // the base path for the content
        reference: 'knowledge', // how the collection is referred to in frontmatter links
        menu: { component: 'DummyMenu', collection: null }, // the menu to use on the left
      },
      designs: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'designs', // the base path for the content
        reference: 'design', // how the collection is referred to in frontmatter links
        collections: ['knowledge'],
      },
      customers: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'customers', // the base path for the content
        reference: 'customer', // how the collection is referred to in frontmatter links
        collections: ['knowledge', 'projects', 'notes'],
      },
      projects: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'projects', // the base path for the content
        reference: 'project', // how the collection is referred to in frontmatter links
        collections: ['knowledge', 'notes'],
        menu: { component: 'MainButtonMenu', collection: 'customers' }, // the menu to use on the left and the baseline for the menu
      },
      products: {
        source: 'github', // The source of the content
        repo: 'airwalk_patterns', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'products', // the base path for the content
        reference: 'product', // how the collection is referred to in frontmatter links
        collections: ['knowledge', 'designs'],
      },
      notes: {
        source: 'github', // The source of the content
        repo: 'airwalk_notes', // The name of the repo
        owner: 'airwalk-digital', // The owner of the repo
        branch: 'main',
        path: 'notes', // the base path for the content
        reference: 'note', // how the collection is referred to in frontmatter links
        icon: Note,
        menu: { component: 'DummyMenu', collection: null }, // the menu to use on the left
      },
    }

    const parentOptions = (config: { [key: string]: any }): { [key: string]: { label: string, reference: string, icon?: React.ComponentType<React.ComponentProps<"svg">> | JSX.Element; }[] } => {
            const parentContentElements: { [key: string]: { label: string, reference: string, icon?: React.ComponentType<React.ComponentProps<"svg">> | JSX.Element; }[] } = {};
          
            Object.entries(config).forEach(([contentType, content]) => {
              content?.collections?.forEach((collection: string) => {
                const entries = parentContentElements[collection] || [];
                entries.push({ label: contentType, reference: config[contentType].reference, icon: config[contentType].icon ? config[contentType].icon : null });
                parentContentElements[collection] = entries;
              });
            });
          
            return parentContentElements;
          };

    const docTypes = Object.entries(config)
    .map(([_, item]) => {
      // Now TypeScript understands `item` is a `ContentItem` or undefined
      if (item && item.reference && item.path) {
        return {
          label: item.reference,
          value: item.path.split('/').pop(), // Extract the last segment of the path as the prefix
          icon: item.icon,
        };
      }
      return null; // Exclude the item from the list
    })
    .filter(
      (entry): entry is { label: string; value: string, icon: React.ComponentType<React.ComponentProps<"svg">> | JSX.Element; } => entry !== null
    );

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <NewContentDialog
        
        {...args}
      />
    );
  },
};
export const Default: Story = {
  ...Template,
  args: {
    docTypes: docTypes,
    parentOptions: parentOptions(config),
  },
};

const testData = [
  {
    label: 'GenAI Agentic Automation with AutoGen',
    url: '/docs/designs/ai_autogen/_index.md',
  },
  {
    label: 'AI Request Routing',
    url: '/docs/designs/ai_request_routing_lwkvef8q/_index.md',
  },
  {
    label: 'AWS Cost Analysis',
    url: '/docs/designs/aws_cost_analysis/_index.md',
  },
  {
    label: 'AWS Endpoint Service (PrivateLink)',
    url: '/docs/designs/aws_endpoint_service_privatelink_ld2yt8og/_index.md',
  },
  {
    label: 'AWS Landing Zone',
    url: '/docs/designs/aws_landing_zone_lo70o5w8/_index.md',
  },
  {
    label: 'AWS Usage optimisation',
    url: '/docs/designs/aws_usage_optimisation/_index.md',
  },
  {
    label: 'Azure Cost Allocation',
    url: '/docs/designs/azure_cost_allocation/_index.md',
  },
  {
    label: 'Azure Landing Zone',
    url: '/docs/designs/azure_landing_zone/_index.md',
  },
  {
    label: 'Azure Private Link Services',
    url: '/docs/designs/azure_private_link_services_ldd7nuqc/_index.md',
  },
  {
    label: 'Azure Usage Analysis',
    url: '/docs/designs/azure_usage_analysis/_index.md',
  },
  {
    label: 'Azure Usage optimisation',
    url: '/docs/designs/azure_usage_optimisation/_index.md',
  },
  {
    label: 'Conditional Access',
    url: '/docs/designs/conditional_access_lqgfqwth/_index.md',
  },
  {
    label: 'Discovery - Azure Governance Export',
    url: '/docs/designs/discovery_azure_governance_export_l7yyys9e/_index.md',
  },
  {
    label: 'AWS Landing Zone - Elastic Kubernetes Service (EKS)',
    url: '/docs/designs/elastic_kubernetes_service_eks_ljwysr3d/_index.md',
  },
  {
    label: 'Maturity Model',
    url: '/docs/designs/finops_maturity_model/_index.md',
  },
  {
    label: 'Github Codespaces',
    url: '/docs/designs/github_codespaces/_index.md',
  },
  {
    label: 'High Level Design',
    url: '/docs/designs/high_level_design_lczbvf99/_index.md',
  },
  {
    label: 'Istio Ambient Mesh',
    url: '/docs/designs/istio_ambient_mesh_leemxsdx/_index.md',
  },
  {
    label: 'Microsoft 365 DSC',
    url: '/docs/designs/microsoft_365_dsc_l7yx1xgu/_index.md',
  },
];

export const MockedSuccess: Story = {
  ...Template,
  args: {
    docTypes: docTypes,
    parentOptions: parentOptions(config),
  },

  parameters: {
    msw: {
      handlers: [
        http.get('/api/content/structure', async () => {
          await delay(800);
          return HttpResponse.json(testData);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  ...Template,
  args: {
    docTypes: docTypes,
    parentOptions: parentOptions(config),
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/api/content/structure', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};

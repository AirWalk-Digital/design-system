import React from 'react';
import SidebarRight from './SidebarRight';
import { SidebarProvider } from '@/components/ui/sidebar';
import { fn } from '@storybook/test';

export default {
  title: 'Menus/SidebarRight',
  component: SidebarRight,
};

const Template = (args) => <SidebarProvider><SidebarRight {...args} /></SidebarProvider>;
import GithubControl from '@/components/Editor/GithubControl';




export const Default = Template.bind({});
Default.args = {
  editorComponent: <GithubControl onPublishDraft={fn()} handleNewBranch={fn()} handlePR={fn()} />,
  onNavClick: fn(),
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
  relatedContent: {
    "knowledge": [
      {
        "label": "AWS Risk Assessment Terraform Module",
        "url": "/knowledge/terraform_risk_assessment_AWS/_index.md",
        "type": "published"
      },
      {
        "label": "AWS Airview CCF Terraform Module",
        "url": "/knowledge/terraform_aws_airview_ccf/_index.md",
        "type": "published"
      }
    ],
    "services": [
      {
        "label": "AWS Account Vending Machine",
        "url": "/services/aws_account_vending_machine/_index.md",
        "type": "published"
      },
      {
        "label": "<Product> Security Pattern - Template",
        "url": "/services/product_security_pattern_template/_index.md",
        "type": "published"
      },
      {
        "label": "Security Pattern Status",
        "url": "/services/security_pattern_status/_index.md",
        "type": "published"
      },
      {
        "label": "AWS Beanstalk",
        "url": "/services/aws_beanstalk/_index.md",
        "type": "published"
      },
      {
        "label": "AWS Account Vending Machine Terraform Module",
        "url": "/services/aws_account_vending_machine/terraform-aws-module-account-vending-machine.md",
        "type": "published"
      },
      {
        "label": "AWS Airwalk Network Firewall Terraform Module",
        "url": "/services/aws_vpc/terraform-aws-airwalk-module-networkfirewall.md",
        "type": "published"
      },
      {
        "label": "AWS VCP Terraform Module",
        "url": "/services/aws_vpc/terraform-aws-vpc.md",
        "type": "published"
      },
      {
        "label": "AWS WAF and Shield",
        "url": "/services/aws_waf_and_shield/_index.md",
        "type": "published"
      }
    ]
  },  
  isEditMode: true,
  onAddDocument: fn(),
  onEditDocument: fn(),
  onPrintDocument: fn(),
  onGithubClick: fn(),
};


export const NoTableOfContents = Template.bind({});
NoTableOfContents.args = {
  onAddDocument: fn(),
  onEditDocument: fn(),
  onPrintDocument: fn(),
};

export const NoGithubLink = Template.bind({});
NoGithubLink.args = {
  editorComponent: <GithubControl onPublishDraft={fn()} handleNewBranch={fn()} handlePR={fn()} />,
  onAddDocument: fn(),
  onEditDocument: fn(),
  onPrintDocument: fn(),
  onGithubClick: null,
};

export const OnlyRelatedDocuments = Template.bind({});
OnlyRelatedDocuments.args = {
  
  relatedContent: {
    "knowledge": [
      {
        "label": "AWS Risk Assessment Terraform Module",
        "url": "/knowledge/terraform_risk_assessment_AWS/_index.md",
        "type": "published"
      },
      {
        "label": "AWS Airview CCF Terraform Module",
        "url": "/knowledge/terraform_aws_airview_ccf/_index.md",
        "type": "published"
      }
    ],
    "services": [
      {
        "label": "AWS Account Vending Machine",
        "url": "/services/aws_account_vending_machine/_index.md",
        "type": "published"
      },
      {
        "label": "<Product> Security Pattern - Template",
        "url": "/services/product_security_pattern_template/_index.md",
        "type": "draft"
      },
      {
        "label": "Security Pattern Status",
        "url": "/services/security_pattern_status/_index.md",
        "type": "note"
      },
      {
        "label": "AWS Beanstalk",
        "url": "/services/aws_beanstalk/_index.md",
        "type": "published"
      },
      {
        "label": "AWS Account Vending Machine Terraform Module",
        "url": "/services/aws_account_vending_machine/terraform-aws-module-account-vending-machine.md",
        "type": "published"
      },
      {
        "label": "AWS Airwalk Network Firewall Terraform Module",
        "url": "/services/aws_vpc/terraform-aws-airwalk-module-networkfirewall.md",
        "type": "published"
      },
      {
        "label": "AWS VCP Terraform Module",
        "url": "/services/aws_vpc/terraform-aws-vpc.md",
        "type": "published"
      },
      {
        "label": "AWS WAF and Shield",
        "url": "/services/aws_waf_and_shield/_index.md",
        "type": "published"
      }
    ]
  },  
  onAddDocument: fn(),
  onEditDocument: fn(),
  onPrintDocument: fn(),
};

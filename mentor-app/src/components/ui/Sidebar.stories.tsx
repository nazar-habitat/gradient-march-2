import type { Meta, StoryObj } from '@storybook/react';
import Sidebar, {
  SIDEBAR_WIDTH_COLLAPSED_PX,
  SIDEBAR_WIDTH_EXPANDED_PX,
} from './Sidebar';
import { defaultSidebarSections } from './defaultSidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  id: 'ui-sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-screen bg-black">
        <Story />
        <main className="flex-1 p-5 text-neutral-400">
          Content area (sidebar collapsed = {SIDEBAR_WIDTH_COLLAPSED_PX}px, expanded = {SIDEBAR_WIDTH_EXPANDED_PX}px)
        </main>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    sections: defaultSidebarSections,
    activeKey: 'overview',
  },
  parameters: {
    docs: {
      description: {
        story: 'Collapsed by default (96px). Hover to expand (256px); icons stay fixed, labels slide in.',
      },
    },
  },
};

export const NoActiveItem: Story = {
  args: {
    sections: defaultSidebarSections,
  },
};

/** Sidebar forced to expanded state (256px) without hover. Story id: ui-sidebar--force-expanded */
export const ForceExpanded: Story = {
  id: 'force-expanded',
  name: 'Force expanded',
  args: {
    sections: defaultSidebarSections,
    activeKey: 'overview',
    forceExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar forced to expanded state (256px) without hover. Useful for reviewing full logo and labels.',
      },
    },
  },
};

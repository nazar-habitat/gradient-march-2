import type { Meta, StoryObj } from '@storybook/react';
import {
  createRouter,
  createRootRoute,
  RouterProvider,
} from '@tanstack/react-router';
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
    (Story) => {
      const rootRoute = createRootRoute({
        component: () => (
          <div className="flex min-h-screen bg-black">
            <Story />
            <main className="flex-1 p-5 text-neutral-400">
              Content area (sidebar collapsed = {SIDEBAR_WIDTH_COLLAPSED_PX}px, expanded = {SIDEBAR_WIDTH_EXPANDED_PX}px)
            </main>
          </div>
        ),
      });
      const router = createRouter({ routeTree: rootRoute });
      return <RouterProvider router={router} />;
    },
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

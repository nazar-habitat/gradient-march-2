import type { Meta, StoryObj } from '@storybook/react';
import {
  ChartBarSquareIcon,
  LightBulbIcon,
  ListBulletIcon,
  Menu2Icon,
  DatabaseIcon,
  MultipleFoldersIcon,
  ArrowDownTrayIcon,
} from '@/components/icons';
import Sidebar, {
  type SidebarSection,
  SIDEBAR_WIDTH_COLLAPSED_PX,
  SIDEBAR_WIDTH_EXPANDED_PX,
} from './Sidebar';

/**
 * Default nav sections — Figma Gradient Design System.
 * Icons (from @iconicicons/react, aliased in @/components/icons):
 *   Overview         → ChartBarSquareIcon (DashboardIcon)
 *   Recommendations  → LightBulbIcon (SunIcon / bulb)
 *   Implementations  → ListBulletIcon (ClipboardIcon)
 *   Data Quality     → Menu2Icon (MenuIcon)
 *   ADC Analysis     → DatabaseIcon (ServerIcon)
 *   Custom Reports   → MultipleFoldersIcon (LayersIcon)
 *   Export Data      → ArrowDownTrayIcon (DownloadIcon)
 */
export const DEFAULT_SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    items: [
      {
        key: 'overview',
        label: 'Overview',
        icon: ChartBarSquareIcon,
        path: '#',
      },
    ],
  },
  {
    label: 'Improvements',
    items: [
      { key: 'recommendations', label: 'Recommendations', icon: LightBulbIcon, path: '#' },
      { key: 'implementations', label: 'Implementations', icon: ListBulletIcon, path: '#' },
      { key: 'data-quality', label: 'Data Quality', icon: Menu2Icon, path: '#' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { key: 'adc-analysis', label: 'ADC Analysis', icon: DatabaseIcon, path: '#' },
    ],
  },
  {
    label: 'Other',
    items: [
      { key: 'custom-reports', label: 'Custom Reports', icon: MultipleFoldersIcon, path: '#' },
      { key: 'export-data', label: 'Export Data', icon: ArrowDownTrayIcon, path: '#' },
    ],
  },
];

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
    sections: DEFAULT_SIDEBAR_SECTIONS,
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
    sections: DEFAULT_SIDEBAR_SECTIONS,
  },
};

/** Sidebar forced to expanded state (256px) without hover. Story id: ui-sidebar--force-expanded */
export const ForceExpanded: Story = {
  id: 'force-expanded',
  name: 'Force expanded',
  args: {
    sections: DEFAULT_SIDEBAR_SECTIONS,
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

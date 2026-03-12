/**
 * Default sidebar nav — used everywhere (Storybook Default story, settings, app layout).
 * Same as the approved "Default" sidebar in UI/Sidebar.
 */
import {
  ChartBarSquareIcon,
  LightBulbIcon,
  ListBulletIcon,
  Menu2Icon,
  DatabaseIcon,
  MultipleFoldersIcon,
  ArrowDownTrayIcon,
  Cog6ToothIcon,
} from '@/components/icons';
import type { SidebarSection } from './Sidebar';

export const defaultSidebarSections: SidebarSection[] = [
  {
    items: [
      {
        key: 'overview',
        label: 'Overview',
        icon: ChartBarSquareIcon,
        path: '/',
      },
    ],
  },
  {
    label: 'Improvements',
    items: [
      { key: 'recommendations', label: 'Recommendations', icon: LightBulbIcon, path: '/recommendations' },
      { key: 'implementations', label: 'Implementations', icon: ListBulletIcon, path: '/implementations' },
      { key: 'data-quality', label: 'Data Quality', icon: Menu2Icon, path: '/data-quality' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { key: 'adc-analysis', label: 'ADC Analysis', icon: DatabaseIcon, path: '/adc-analysis' },
    ],
  },
  {
    label: 'Other',
    items: [
      { key: 'custom-reports', label: 'Custom Reports', icon: MultipleFoldersIcon, path: '/custom-reports' },
      { key: 'export-data', label: 'Export Data', icon: ArrowDownTrayIcon, path: '/export-data' },
      { key: 'settings', label: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
    ],
  },
];

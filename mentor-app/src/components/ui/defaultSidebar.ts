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
} from '@/components/icons';
import type { SidebarSection } from './Sidebar';

export const defaultSidebarSections: SidebarSection[] = [
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

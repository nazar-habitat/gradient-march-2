/**
 * Default sidebar nav — used everywhere (Storybook Default story, settings, app layout).
 * Same as the approved "Default" sidebar in UI/Sidebar.
 */
import {
  HomeIcon,
  LightBulbIcon,
  CodeIcon,
  ChartIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
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
        icon: HomeIcon,
        path: '/',
      },
    ],
  },
  {
    label: 'Improvements',
    items: [
      { key: 'recommendations', label: 'Recommendations', icon: LightBulbIcon, path: '/recommendations' },
      { key: 'implementations', label: 'Implementations', icon: CodeIcon, path: '/implementations' },
      { key: 'data-quality', label: 'Data Quality', icon: ChartIcon, path: '/data-quality' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { key: 'adc-analysis', label: 'ADC Analysis', icon: DocumentChartBarIcon, path: '/adc-analysis' },
    ],
  },
  {
    label: 'Other',
    items: [
      { key: 'custom-reports', label: 'Custom Reports', icon: DocumentTextIcon, path: '/custom-reports' },
      { key: 'export-data', label: 'Export Data', icon: ArrowDownTrayIcon, path: '/export-data' },
      { key: 'settings', label: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
    ],
  },
];

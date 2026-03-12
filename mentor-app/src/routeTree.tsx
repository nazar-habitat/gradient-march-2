import { createRootRoute, createRoute } from '@tanstack/react-router';
import RootLayout from '@/routes/__root';
import SettingsPage from '@/pages/settings';

const rootRoute = createRootRoute({
  component: RootLayout,
});

function placeholderPage(title: string) {
  return function Placeholder() {
    return (
      <div className="flex flex-1 flex-col bg-black">
        <div className="border-b border-neutral-800 px-10 py-5">
          <h1 className="text-xl font-medium text-white">{title}</h1>
        </div>
        <div className="flex-1 p-10 text-neutral-500 text-sm">
          {title} — coming soon
        </div>
      </div>
    );
  };
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SettingsPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
});

const recommendationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recommendations',
  component: placeholderPage('Recommendations'),
});

const implementationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/implementations',
  component: placeholderPage('Implementations'),
});

const dataQualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/data-quality',
  component: placeholderPage('Data Quality'),
});

const adcAnalysisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/adc-analysis',
  component: placeholderPage('ADC Analysis'),
});

const customReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/custom-reports',
  component: placeholderPage('Custom Reports'),
});

const exportDataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/export-data',
  component: placeholderPage('Export Data'),
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  settingsRoute,
  recommendationsRoute,
  implementationsRoute,
  dataQualityRoute,
  adcAnalysisRoute,
  customReportsRoute,
  exportDataRoute,
]);

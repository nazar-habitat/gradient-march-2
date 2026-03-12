import { Outlet } from '@tanstack/react-router';
import { useRouterState } from '@tanstack/react-router';
import Layout from '@/components/ui/Layout';
import Sidebar from '@/components/ui/Sidebar';
import { defaultSidebarSections } from '@/components/ui/defaultSidebar';

/** Map pathname to sidebar activeKey. "/" shows Settings page so we highlight Settings. */
function pathnameToActiveKey(pathname: string): string | undefined {
  if (pathname === '/' || pathname === '') return 'settings';
  const segment = pathname.replace(/^\//, '').split('/')[0];
  const map: Record<string, string> = {
    settings: 'settings',
    recommendations: 'recommendations',
    implementations: 'implementations',
    'data-quality': 'data-quality',
    'adc-analysis': 'adc-analysis',
    'custom-reports': 'custom-reports',
    'export-data': 'export-data',
  };
  return map[segment];
}

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar
        sections={defaultSidebarSections}
        activeKey={pathnameToActiveKey(pathname)}
      />
      <Layout className="flex-1 flex flex-col min-h-screen bg-black">
        <Outlet />
      </Layout>
    </div>
  );
}

export default RootLayout;

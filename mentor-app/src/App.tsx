import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import themeConfig from './themeConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themeConfig}>
        <div className="min-h-screen bg-black text-white font-sans">
          <h1 className="text-2xl font-semibold p-6">Mentor App</h1>
          <p className="px-6 text-neutral-400">
            Data center cooling optimization platform — ready for development.
          </p>
        </div>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;

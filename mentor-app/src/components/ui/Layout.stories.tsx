import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Layout from './Layout';

const { Header, Content, Sider } = Layout;

const meta: Meta<typeof Layout> = {
  title: 'UI/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <Story />
      </ConfigProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Playground: Story = {
  render: () => (
    <Layout className="min-h-[240px]">
      <Header className="!bg-neutral-900 !px-4 !py-3 !h-auto !leading-none">
        Header
      </Header>
      <Layout className="flex-1">
        <Sider width={200} className="!bg-neutral-950">
          Sider
        </Sider>
        <Content className="!p-4 !bg-black">
          Content
        </Content>
      </Layout>
    </Layout>
  ),
};

export const AppShell: Story = {
  name: 'App shell (sider + main)',
  render: () => (
    <Layout className="min-h-[320px] bg-black">
      <Sider
        width={96}
        className="!bg-black border-r border-neutral-800"
        style={{ minHeight: '100%' }}
      >
        <div className="flex flex-col h-full py-5 px-4 items-center">
          <span className="text-white font-medium text-xl">M</span>
        </div>
      </Sider>
      <Layout className="flex-1 min-h-[320px] bg-black">
        <Header className="!bg-neutral-900 !px-6 !py-4 !h-auto !leading-none flex items-center justify-between border-b border-neutral-800">
          <span className="text-white text-xl font-medium">Settings</span>
        </Header>
        <Content className="bg-black border border-neutral-800 border-b-0 rounded-t-3xl pt-6 px-6 pb-6">
          <p className="text-neutral-400 text-sm">Main content area</p>
        </Content>
      </Layout>
    </Layout>
  ),
};

export const HeaderOnly: Story = {
  name: 'Header only',
  render: () => (
    <Layout className="min-h-[120px]">
      <Header className="!bg-neutral-900 !px-4 !py-3 !h-auto">
        Header only
      </Header>
      <Content className="!p-4">Content</Content>
    </Layout>
  ),
};

export const ContentOnly: Story = {
  name: 'Content only',
  render: () => (
    <Layout className="min-h-[120px]">
      <Content className="!p-4">Content only (no header/sider)</Content>
    </Layout>
  ),
};

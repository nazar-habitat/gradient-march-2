import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <Story />
      </ConfigProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    orientation: {
      control: 'select',
      options: ['left', 'right', 'center'],
    },
    dashed: { control: 'boolean' },
    plain: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  args: {
    type: 'horizontal',
  },
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Divider orientation="left">Left</Divider>
      <Divider orientation="center">Center</Divider>
      <Divider orientation="right">Right</Divider>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex gap-2 items-center h-12">
      <span>One</span>
      <Divider type="vertical" />
      <span>Two</span>
      <Divider type="vertical" />
      <span>Three</span>
    </div>
  ),
};

export const Dashed: Story = {
  args: {
    dashed: true,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <p>Content above</p>
      <Divider {...args} />
      <p>Content below</p>
    </div>
  ),
};

export const SettingsStyle: Story = {
  name: 'Settings page style (neutral border)',
  render: () => (
    <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
      <div className="px-3 py-3">Row 1</div>
      <Divider className="!my-0 !border-neutral-800" />
      <div className="px-3 py-3">Row 2</div>
    </div>
  ),
};

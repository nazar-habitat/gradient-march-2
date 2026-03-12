import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { Cog6ToothIcon } from '@/components/icons';
import themeConfig from '../../themeConfig';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <Story />
      </ConfigProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 28, 32, 40, 48, 56, 64],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  args: {
    children: 'U',
    size: 'default',
  },
};

export const Initials: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Avatar size="small">U</Avatar>
      <Avatar size="default">UM</Avatar>
      <Avatar size="large">JD</Avatar>
      <Avatar size={28} className="!bg-[#044015] !text-[#7af59d] !text-sm !font-medium">
        UM
      </Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <Avatar size={24}>S</Avatar>
      <Avatar size="small">S</Avatar>
      <Avatar size="default">M</Avatar>
      <Avatar size="large">L</Avatar>
      <Avatar size={56}>56</Avatar>
      <Avatar size={64}>64</Avatar>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar shape="circle">C</Avatar>
      <Avatar shape="square">S</Avatar>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Avatar icon={<Cog6ToothIcon className="size-6" />} />
      <Avatar size="large" icon={<Cog6ToothIcon className="size-8" />} />
    </div>
  ),
};

export const SettingsStyle: Story = {
  name: 'Settings page style',
  render: () => (
    <Avatar
      size={28}
      className="!bg-[#044015] !text-[#7af59d] !text-sm !font-medium"
    >
      UM
    </Avatar>
  ),
};

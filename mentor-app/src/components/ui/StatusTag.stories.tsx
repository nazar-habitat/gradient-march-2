import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import StatusTag from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'UI/StatusTag',
  component: StatusTag,
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
type Story = StoryObj<typeof StatusTag>;

export const Active: Story = {
  args: { status: 'active' },
};

export const Pending: Story = {
  args: { status: 'pending' },
};

export const Completed: Story = {
  args: { status: 'completed' },
};

export const Rejected: Story = {
  args: { status: 'rejected' },
};

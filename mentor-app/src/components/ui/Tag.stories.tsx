import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
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
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: 'Tag' },
};

export const Success: Story = {
  args: { children: 'Success', color: 'success' },
};

export const Processing: Story = {
  args: { children: 'Processing', color: 'processing' },
};

export const Warning: Story = {
  args: { children: 'Warning', color: 'warning' },
};

export const Error: Story = {
  args: { children: 'Error', color: 'error' },
};

export const Closable: Story = {
  args: { children: 'Closable', closable: true },
};

export const Bordered: Story = {
  args: { children: 'Bordered', bordered: true },
};

export const Borderless: Story = {
  args: { children: 'Borderless', bordered: false },
};

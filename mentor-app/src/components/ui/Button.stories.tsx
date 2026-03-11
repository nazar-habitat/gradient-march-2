import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { type: 'primary', children: 'Primary Button' },
};

export const Default: Story = {
  args: { children: 'Default Button' },
};

export const Dashed: Story = {
  args: { type: 'dashed', children: 'Dashed Button' },
};

export const Text: Story = {
  args: { type: 'text', children: 'Text Button' },
};

export const Link: Story = {
  args: { type: 'link', children: 'Link Button' },
};

export const Disabled: Story = {
  args: { type: 'primary', children: 'Disabled', disabled: true },
};

export const Loading: Story = {
  args: { type: 'primary', children: 'Loading', loading: true },
};

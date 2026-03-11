import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { children: 'Checkbox' },
};

export const Checked: Story = {
  args: { children: 'Checked', defaultChecked: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const DisabledChecked: Story = {
  args: { children: 'Disabled Checked', disabled: true, defaultChecked: true },
};

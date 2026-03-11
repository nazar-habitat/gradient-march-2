import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};

export const WithValue: Story = {
  args: { defaultValue: 'Hello world' },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};

export const Password: Story = {
  render: () => <Input.Password placeholder="Enter password" />,
};

export const Search: Story = {
  render: () => <Input.Search placeholder="Search..." />,
};

export const TextArea: Story = {
  render: () => <Input.TextArea placeholder="Enter long text..." rows={4} />,
};

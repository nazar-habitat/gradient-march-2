import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    style: { width: 200 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option1',
    options,
    style: { width: 200 },
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'Select options',
    options,
    style: { width: 300 },
  },
};

export const Searchable: Story = {
  args: {
    showSearch: true,
    placeholder: 'Search & select',
    options,
    style: { width: 200 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    options,
    disabled: true,
    style: { width: 200 },
  },
};

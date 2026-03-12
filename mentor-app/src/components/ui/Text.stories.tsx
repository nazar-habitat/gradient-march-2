import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
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
      options: [undefined, 'secondary', 'success', 'warning', 'danger'],
    },
    disabled: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    strong: { control: 'boolean' },
    code: { control: 'boolean' },
    copyable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: 'Sample text',
  },
};

export const Default: Story = {
  args: {
    children: 'Default body text',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary (muted) text',
  },
};

export const WithCustomClass: Story = {
  name: 'With Tailwind (e.g. settings)',
  render: () => (
    <div className="flex flex-col gap-2">
      <Text className="!text-sm !font-medium !text-white !leading-6">
        Section label
      </Text>
      <Text className="!text-[13px] !text-neutral-500 !leading-5">
        Helper or description text
      </Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text className="!text-xl !font-medium">Title (xl, medium)</Text>
      <Text className="!text-sm !font-medium">Label (sm, medium)</Text>
      <Text className="!text-[13px]">Body small (13px)</Text>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text>Normal</Text>
      <Text disabled>Disabled</Text>
      <Text type="secondary">Secondary</Text>
      <Text type="success">Success</Text>
      <Text type="warning">Warning</Text>
      <Text type="danger">Danger</Text>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Tabs from './Tabs';

const tabItems = [
  { key: 'tab1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: 'tab2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: 'tab3', label: 'Tab 3', children: 'Content of Tab 3' },
];

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <Story />
      </ConfigProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'settings', 'pill', 'chiller'],
    },
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  args: {
    variant: 'default',
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

export const Default: Story = {
  args: {
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

export const SettingsVariant: Story = {
  name: 'Variant: settings',
  args: {
    variant: 'settings',
    defaultActiveKey: 'tab1',
    items: tabItems.map((t) => ({
      ...t,
      label: <span className="text-[13px] font-medium leading-4">{t.label}</span>,
    })),
  },
};

export const PillVariant: Story = {
  name: 'Variant: pill',
  args: {
    variant: 'pill',
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

export const ChillerVariant: Story = {
  name: 'Variant: chiller',
  args: {
    variant: 'chiller',
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

export const CardTabs: Story = {
  name: 'Type: card',
  args: {
    type: 'card',
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

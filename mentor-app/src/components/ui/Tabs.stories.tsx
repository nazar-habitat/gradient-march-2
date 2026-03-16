import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Tabs from './Tabs';
import type { TabType, TabSize } from './Tabs';

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
    type: {
      control: 'select',
      options: ['line', 'card'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  args: {
    type: 'line',
    size: 'medium',
    defaultActiveKey: 'tab1',
    items: tabItems,
  },
};

export const Types: Story = {
  name: 'Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['line', 'card'] as TabType[]).map((type) => (
        <div key={type}>
          <span style={{ fontSize: 12, opacity: 0.5, marginBottom: 8, display: 'block' }}>{type}</span>
          <Tabs type={type} defaultActiveKey="tab1" items={tabItems} />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['line', 'card'] as TabType[]).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>{type}</span>
          {(['small', 'medium', 'large'] as TabSize[]).map((size) => (
            <div key={size}>
              <span style={{ fontSize: 12, opacity: 0.5, marginBottom: 8, display: 'block' }}>{size}</span>
              <Tabs type={type} size={size} defaultActiveKey="tab1" items={tabItems} />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

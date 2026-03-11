import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import TreeSelect from './TreeSelect';

const meta: Meta<typeof TreeSelect> = {
  title: 'UI/TreeSelect',
  component: TreeSelect,
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
type Story = StoryObj<typeof TreeSelect>;

const treeData = [
  {
    title: 'Parent 1',
    value: 'parent-1',
    children: [
      { title: 'Child 1-1', value: 'child-1-1' },
      { title: 'Child 1-2', value: 'child-1-2' },
    ],
  },
  {
    title: 'Parent 2',
    value: 'parent-2',
    children: [
      { title: 'Child 2-1', value: 'child-2-1' },
    ],
  },
];

export const Default: Story = {
  args: {
    placeholder: 'Select a node',
    treeData,
    style: { width: 250 },
  },
};

export const Multiple: Story = {
  args: {
    placeholder: 'Select nodes',
    treeData,
    treeCheckable: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'child-1-1',
    treeData,
    style: { width: 250 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    treeData,
    disabled: true,
    style: { width: 250 },
  },
};

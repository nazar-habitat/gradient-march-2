import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { children: 'Radio' },
};

export const Checked: Story = {
  args: { children: 'Checked', defaultChecked: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const Group: Story = {
  render: () => (
    <Radio.Group defaultValue="a">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </Radio.Group>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">Option A</Radio.Button>
      <Radio.Button value="b">Option B</Radio.Button>
      <Radio.Button value="c">Option C</Radio.Button>
    </Radio.Group>
  ),
};

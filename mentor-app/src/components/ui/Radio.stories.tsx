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

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Monthly billing',
    description: 'Pay every month, cancel anytime.',
    value: 'monthly',
  },
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

export const GroupWithLabelAndDescription: Story = {
  render: () => (
    <Radio.Group defaultValue="monthly" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio
        value="monthly"
        label="Monthly billing"
        description="Pay every month, cancel anytime."
      />
      <Radio
        value="yearly"
        label="Yearly billing"
        description="Save 20% compared to monthly."
      />
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

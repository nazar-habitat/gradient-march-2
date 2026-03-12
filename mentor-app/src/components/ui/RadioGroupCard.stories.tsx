import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import RadioGroupCard, { type RadioGroupCardOption } from './RadioGroupCard';

const timeFormatOptions: RadioGroupCardOption<'24h' | '12h'>[] = [
  { value: '24h', label: '24-hour', example: '14:42' },
  { value: '12h', label: '12-hour', example: '2:42 PM' },
];

const meta: Meta<typeof RadioGroupCard> = {
  title: 'UI/RadioGroupCard',
  component: RadioGroupCard,
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <div className="min-h-[120px] w-full max-w-md bg-black p-4">
          <Story />
        </div>
      </ConfigProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'radio', options: ['24h', '12h'] },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroupCard>;

export const Default: Story = {
  args: {
    value: '24h',
    options: timeFormatOptions,
    name: 'time-format',
  },
  render: (args) => {
    const [value, setValue] = useState<'24h' | '12h'>(args.value ?? '24h');
    return (
      <RadioGroupCard
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const TimeFormat: Story = {
  name: 'Time format (24h / 12h)',
  args: {
    value: '24h',
    options: timeFormatOptions,
    name: 'time-format',
  },
  render: (args) => {
    const [value, setValue] = useState<'24h' | '12h'>(args.value ?? '24h');
    return (
      <RadioGroupCard
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithoutExamples: Story = {
  args: {
    value: 'a',
    options: [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ],
    name: 'simple-options',
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? 'a');
    return (
      <RadioGroupCard
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '12h',
    options: timeFormatOptions,
    name: 'time-format',
    disabled: true,
  },
};

export const ThreeOptions: Story = {
  args: {
    value: 'medium',
    options: [
      { value: 'small', label: 'Small', example: '12px' },
      { value: 'medium', label: 'Medium', example: '14px' },
      { value: 'large', label: 'Large', example: '18px' },
    ],
    name: 'size',
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? 'medium');
    return (
      <RadioGroupCard
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

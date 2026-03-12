import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import themeConfig from '../../themeConfig';
import Select from './Select';

const labelStyle = {
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--color-text-tertiary, #949494)',
  marginBottom: 6,
} as const;
const wrapStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 6,
  minWidth: 260,
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

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
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning'],
    },
    allowClear: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// ---------------------------------------------------------------------------
// Playground – all controls available in the panel
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    placeholder: 'Placeholder',
    options,
    size: 'middle',
    disabled: false,
    status: undefined,
    allowClear: false,
    style: { width: 260 },
  },
};

// ---------------------------------------------------------------------------
// Sizes – Large 48px, Medium 40px, Small 32px (same as Input/Button)
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={wrapStyle}>
        <span style={labelStyle}>Large (48px)</span>
        <Select placeholder="Placeholder" options={options} size="large" style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Medium (40px)</span>
        <Select placeholder="Placeholder" options={options} size="middle" style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Small (32px)</span>
        <Select placeholder="Placeholder" options={options} size="small" style={{ width: 260 }} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States – Default, Filled, Hover, Open, Disabled, Error
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <style>{`
        .select-force-hover.ant-select .ant-select-selector:hover { border-color: #4a4a4a !important; }
        .select-force-open.ant-select.ant-select-open .ant-select-selector { border-color: #949494 !important; box-shadow: none !important; }
      `}</style>
      <div style={wrapStyle}>
        <span style={labelStyle}>Default (placeholder)</span>
        <Select placeholder="Placeholder" options={options} style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Filled</span>
        <Select defaultValue="option1" options={options} style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Hover</span>
        <Select placeholder="Placeholder" options={options} className="select-force-hover" style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Disabled</span>
        <Select placeholder="Placeholder" options={options} disabled style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Disabled (filled)</span>
        <Select defaultValue="option1" options={options} disabled style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Error</span>
        <Select placeholder="Placeholder" options={options} status="error" style={{ width: 260 }} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Error (filled)</span>
        <Select defaultValue="option1" options={options} status="error" style={{ width: 260 }} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Variants – default, with value, multiple, searchable
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    style: { width: 260 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option1',
    options,
    style: { width: 260 },
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={wrapStyle}>
      <span style={labelStyle}>Multiple</span>
      <Select
        mode="multiple"
        placeholder="Select options"
        options={options}
        style={{ width: 300 }}
      />
    </div>
  ),
};

export const Searchable: Story = {
  render: () => (
    <div style={wrapStyle}>
      <span style={labelStyle}>Searchable</span>
      <Select
        showSearch
        placeholder="Search & select"
        options={options}
        style={{ width: 260 }}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    options,
    disabled: true,
    style: { width: 260 },
  },
};

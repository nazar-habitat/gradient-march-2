import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import themeConfig from '../../themeConfig';
import Input from './Input';

const labelStyle = { fontSize: 13, fontWeight: 500, color: 'var(--color-text-tertiary, #949494)', marginBottom: 6 } as const;
const wrapStyle = { display: 'flex', flexDirection: 'column' as const, gap: 6, minWidth: 260 };

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
type Story = StoryObj<typeof Input>;

// ---------------------------------------------------------------------------
// Playground – all controls available in the panel
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    placeholder: 'Placeholder',
    size: 'middle',
    disabled: false,
    status: undefined,
    allowClear: false,
  },
};

// ---------------------------------------------------------------------------
// Sizes – Medium (default) and Small (Figma: 2 sizes)
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={wrapStyle}>
        <span style={labelStyle}>Large (48px)</span>
        <Input placeholder="Placeholder" size="large" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Medium (40px)</span>
        <Input placeholder="Placeholder" size="middle" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Small (32px)</span>
        <Input placeholder="Placeholder" size="small" />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Layouts – Text only, Leading icon, Trailing icon, Both, No label (Figma)
// ---------------------------------------------------------------------------

export const Layouts: Story = {
  name: 'Layouts',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={wrapStyle}>
        <span style={labelStyle}>Default (text only)</span>
        <Input placeholder="Placeholder" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Leading icon</span>
        <Input placeholder="Placeholder" prefix={<PlusOutlined />} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Trailing icon</span>
        <Input placeholder="Placeholder" suffix={<PlusOutlined />} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Leading and trailing icon</span>
        <Input placeholder="Placeholder" prefix={<SearchOutlined />} suffix={<PlusOutlined />} />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>No label</span>
        <Input placeholder="Placeholder" />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States – Default, Filled, Hover, Active (focused), Disabled, Error (Figma)
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <style>{`
        .input-force-hover.ant-input:hover,
        .input-force-hover.ant-input-affix-wrapper:hover { border-color: #4a4a4a !important; }
        .input-force-focus.ant-input:focus,
        .input-force-focus.ant-input-affix-wrapper:focus,
        .input-force-focus.ant-input-focused,
        .input-force-focus.ant-input-affix-wrapper-focused { border-color: #949494 !important; box-shadow: none !important; }
      `}</style>
      <div style={wrapStyle}>
        <span style={labelStyle}>Default (placeholder)</span>
        <Input placeholder="Placeholder" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Filled</span>
        <Input defaultValue="Input text" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Hover</span>
        <Input placeholder="Placeholder" className="input-force-hover" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Active (focused)</span>
        <Input placeholder="Placeholder" className="input-force-focus" autoFocus />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Disabled</span>
        <Input placeholder="Placeholder" disabled />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Disabled (filled)</span>
        <Input defaultValue="Placeholder" disabled />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Error (placeholder)</span>
        <Input placeholder="Placeholder" status="error" />
      </div>
      <div style={wrapStyle}>
        <span style={labelStyle}>Error (filled)</span>
        <Input defaultValue="Input text" status="error" />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Variants – default, Password, Search, TextArea
// ---------------------------------------------------------------------------

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
  render: () => (
    <div style={wrapStyle}>
      <span style={labelStyle}>Password</span>
      <Input.Password placeholder="Enter password" />
    </div>
  ),
};

export const Search: Story = {
  render: () => (
    <div style={wrapStyle}>
      <span style={labelStyle}>Search</span>
      <Input.Search placeholder="Search..." />
    </div>
  ),
};

export const TextArea: Story = {
  render: () => (
    <div style={wrapStyle}>
      <span style={labelStyle}>Description</span>
      <Input.TextArea placeholder="Enter long text..." rows={4} />
    </div>
  ),
};

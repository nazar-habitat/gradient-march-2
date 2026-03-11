import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import themeConfig from '../../themeConfig';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
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
      options: ['solid', 'outlined', 'filled', 'text'],
    },
    colorScheme: {
      control: 'select',
      options: [undefined, 'neutral', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// ---------------------------------------------------------------------------
// Playground – all controls available in the panel
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    variant: 'solid',
    icon: <SearchOutlined />,
    size: 'middle',
    disabled: false,
    loading: false,
  },
};

// ---------------------------------------------------------------------------
// Variants – solid, outlined, filled, text
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton variant="solid" icon={<PlusOutlined />} />
      <IconButton variant="outlined" icon={<PlusOutlined />} />
      <IconButton variant="filled" icon={<PlusOutlined />} />
      <IconButton variant="text" icon={<PlusOutlined />} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Sizes – S / M / L across variants
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['solid', 'outlined', 'filled', 'text'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>{variant}</span>
          <IconButton variant={variant} size="small" icon={<SettingOutlined />} />
          <IconButton variant={variant} size="middle" icon={<SettingOutlined />} />
          <IconButton variant={variant} size="large" icon={<SettingOutlined />} />
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States – disabled + loading across variants
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <style>{`.force-focus.ant-btn:not(:disabled) { outline: 2px solid #1677ff; outline-offset: 1px; }`}</style>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>disabled</span>
        <IconButton variant="solid" disabled icon={<DeleteOutlined />} />
        <IconButton variant="outlined" disabled icon={<DeleteOutlined />} />
        <IconButton variant="filled" disabled icon={<DeleteOutlined />} />
        <IconButton variant="text" disabled icon={<DeleteOutlined />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>loading</span>
        <IconButton variant="solid" loading icon={<DeleteOutlined />} />
        <IconButton variant="outlined" loading icon={<DeleteOutlined />} />
        <IconButton variant="filled" loading icon={<DeleteOutlined />} />
        <IconButton variant="text" loading icon={<DeleteOutlined />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>default</span>
        <IconButton variant="solid" icon={<DeleteOutlined />} />
        <IconButton variant="outlined" icon={<DeleteOutlined />} />
        <IconButton variant="filled" icon={<DeleteOutlined />} />
        <IconButton variant="text" icon={<DeleteOutlined />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>focused</span>
        <IconButton variant="solid" className="force-focus" icon={<DeleteOutlined />} />
        <IconButton variant="outlined" className="force-focus" icon={<DeleteOutlined />} />
        <IconButton variant="filled" className="force-focus" icon={<DeleteOutlined />} />
        <IconButton variant="text" className="force-focus" icon={<DeleteOutlined />} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Colors – primary (default), neutral, warning, success across variants
// ---------------------------------------------------------------------------

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Primary (default – no colorScheme) */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>primary</span>
        <IconButton variant="solid" icon={<PlusOutlined />} />
        <IconButton variant="outlined" icon={<PlusOutlined />} />
        <IconButton variant="filled" icon={<PlusOutlined />} />
        <IconButton variant="text" icon={<PlusOutlined />} />
      </div>
      {(['neutral', 'warning', 'success'] as const).map((colorScheme) => (
        <div key={colorScheme} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>{colorScheme}</span>
          <IconButton colorScheme={colorScheme} variant="solid" icon={<PlusOutlined />} />
          <IconButton colorScheme={colorScheme} variant="outlined" icon={<PlusOutlined />} />
          <IconButton colorScheme={colorScheme} variant="filled" icon={<PlusOutlined />} />
          <IconButton colorScheme={colorScheme} variant="text" icon={<PlusOutlined />} />
        </div>
      ))}
    </div>
  ),
};

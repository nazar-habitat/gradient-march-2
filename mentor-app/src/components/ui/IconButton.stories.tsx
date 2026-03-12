import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
  Cog6ToothIcon,
} from '@/components/icons';
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
      options: [undefined, 'accent', 'neutral', 'danger', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
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
    icon: <MagnifyingGlassIcon className="size-5" />,
    size: 'medium',
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
      <IconButton variant="solid" icon={<PlusIcon className="size-5" />} />
      <IconButton variant="outlined" icon={<PlusIcon className="size-5" />} />
      <IconButton variant="filled" icon={<PlusIcon className="size-5" />} />
      <IconButton variant="text" icon={<PlusIcon className="size-5" />} />
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
          <IconButton variant={variant} size="small" icon={<Cog6ToothIcon className="size-5" />} />
          <IconButton variant={variant} size="medium" icon={<Cog6ToothIcon className="size-5" />} />
          <IconButton variant={variant} size="large" icon={<Cog6ToothIcon className="size-5" />} />
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
        <IconButton variant="solid" disabled icon={<TrashIcon className="size-5" />} />
        <IconButton variant="outlined" disabled icon={<TrashIcon className="size-5" />} />
        <IconButton variant="filled" disabled icon={<TrashIcon className="size-5" />} />
        <IconButton variant="text" disabled icon={<TrashIcon className="size-5" />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>loading</span>
        <IconButton variant="solid" loading icon={<TrashIcon className="size-5" />} />
        <IconButton variant="outlined" loading icon={<TrashIcon className="size-5" />} />
        <IconButton variant="filled" loading icon={<TrashIcon className="size-5" />} />
        <IconButton variant="text" loading icon={<TrashIcon className="size-5" />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>default</span>
        <IconButton variant="solid" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="outlined" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="filled" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="text" icon={<TrashIcon className="size-5" />} />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>focused</span>
        <IconButton variant="solid" className="force-focus" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="outlined" className="force-focus" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="filled" className="force-focus" icon={<TrashIcon className="size-5" />} />
        <IconButton variant="text" className="force-focus" icon={<TrashIcon className="size-5" />} />
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
      {/* Default: accent for solid/filled/text, neutral for outlined */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>default</span>
        <IconButton variant="solid" icon={<PlusIcon className="size-5" />} />
        <IconButton variant="outlined" icon={<PlusIcon className="size-5" />} />
        <IconButton variant="filled" icon={<PlusIcon className="size-5" />} />
        <IconButton variant="text" icon={<PlusIcon className="size-5" />} />
      </div>
      {(['accent', 'neutral', 'danger', 'warning', 'success'] as const).map((colorScheme) => (
        <div key={colorScheme} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>{colorScheme}</span>
          <IconButton colorScheme={colorScheme} variant="solid" icon={<PlusIcon className="size-5" />} />
          <IconButton colorScheme={colorScheme} variant="outlined" icon={<PlusIcon className="size-5" />} />
          <IconButton colorScheme={colorScheme} variant="filled" icon={<PlusIcon className="size-5" />} />
          <IconButton colorScheme={colorScheme} variant="text" icon={<PlusIcon className="size-5" />} />
        </div>
      ))}
    </div>
  ),
};

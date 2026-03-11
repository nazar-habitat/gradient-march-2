import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import themeConfig from '../../themeConfig';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
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
      options: ['solid', 'outlined', 'filled', 'text', 'link'],
    },
    colorScheme: {
      control: 'select',
      options: [undefined, 'neutral', 'danger', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ---------------------------------------------------------------------------
// Playground – all controls available in the panel
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    variant: 'solid',
    children: 'Button',
    size: 'middle',
    icon: <SearchOutlined />,
    iconPosition: 'start',
    disabled: false,
    loading: false,
    block: false,
  },
};

// ---------------------------------------------------------------------------
// Variants – solid, outlined, filled, text, link
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="filled">Filled</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
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
      {(['solid', 'outlined', 'filled', 'text', 'link'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>{variant}</span>
          <Button variant={variant} size="small">Small</Button>
          <Button variant={variant} size="middle">Middle</Button>
          <Button variant={variant} size="large">Large</Button>
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States – disabled + loading for each variant
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <style>{`.force-focus.ant-btn:not(:disabled) { outline: 2px solid #1677ff; outline-offset: 1px; }`}</style>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>disabled</span>
        <Button variant="solid" disabled>Solid</Button>
        <Button variant="outlined" disabled>Outlined</Button>
        <Button variant="filled" disabled>Filled</Button>
        <Button variant="text" disabled>Text</Button>
        <Button variant="link" disabled>Link</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>loading</span>
        <Button variant="solid" loading>Solid</Button>
        <Button variant="outlined" loading>Outlined</Button>
        <Button variant="filled" loading>Filled</Button>
        <Button variant="text" loading>Text</Button>
        <Button variant="link" loading>Link</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>default</span>
        <Button variant="solid">Solid</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="text">Text</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>focused</span>
        <Button variant="solid" className="force-focus">Solid</Button>
        <Button variant="outlined" className="force-focus">Outlined</Button>
        <Button variant="filled" className="force-focus">Filled</Button>
        <Button variant="text" className="force-focus">Text</Button>
        <Button variant="link" className="force-focus">Link</Button>
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Colors – danger, warning, success across variants
// ---------------------------------------------------------------------------

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Primary (default – no colorScheme) */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>primary</span>
        <Button variant="solid">Solid</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="text">Text</Button>
        <Button variant="link">Link</Button>
      </div>
      {(['neutral', 'danger', 'warning', 'success'] as const).map((colorScheme) => (
        <div key={colorScheme} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>{colorScheme}</span>
          <Button colorScheme={colorScheme} variant="solid">Solid</Button>
          <Button colorScheme={colorScheme} variant="outlined">Outlined</Button>
          <Button colorScheme={colorScheme} variant="filled">Filled</Button>
          <Button colorScheme={colorScheme} variant="text">Text</Button>
          <Button colorScheme={colorScheme} variant="link">Link</Button>
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Icons – placement, icon-only, custom iconGap
// ---------------------------------------------------------------------------

export const Icons: Story = {
  name: 'Icons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Placement */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>placement</span>
        <Button variant="solid" icon={<SearchOutlined />} iconPosition="start">Icon Start</Button>
        <Button variant="solid" icon={<DownloadOutlined />} iconPosition="end">Icon End</Button>
      </div>
      {/* Across variants */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>variants</span>
        <Button variant="solid" icon={<SearchOutlined />}>Solid</Button>
        <Button variant="outlined" icon={<SearchOutlined />}>Outlined</Button>
        <Button variant="filled" icon={<SearchOutlined />}>Filled</Button>
        <Button variant="text" icon={<SearchOutlined />}>Text</Button>
        <Button variant="link" icon={<SearchOutlined />}>Link</Button>
      </div>
      {/* Custom iconGap */}
      <ConfigProvider
        theme={{
          ...themeConfig,
          components: {
            ...themeConfig.components,
            Button: {
              ...((themeConfig.components as Record<string, unknown>)?.Button as Record<string, unknown>),
              iconGap: 16,
            },
          },
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 72, fontSize: 12, opacity: 0.5 }}>iconGap</span>
          <Button variant="solid" icon={<SearchOutlined />}>Gap 16px</Button>
          <Button variant="outlined" icon={<SearchOutlined />}>Gap 16px</Button>
        </div>
      </ConfigProvider>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Tailwind utilities from index.css (@utility btn, btn-primary, icon-btn, etc.)
// Use these classes when you need raw markup (e.g. non-Antd) aligned with the design system.
// ---------------------------------------------------------------------------

export const TailwindUtilities: Story = {
  name: 'Tailwind utilities (index.css)',
  parameters: {
    docs: {
      description: {
        story:
          'Custom utilities from `src/index.css` (@utility). Use with native elements when not using the design-system Button/IconButton.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <section className="flex flex-col gap-2">
        <span className="text-xs text-neutral-400">Buttons (btn + variant + size)</span>
        <div className="flex flex-wrap gap-2 items-center">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-text">
            Text
          </button>
          <button type="button" className="btn btn-primary btn-small">
            Primary small
          </button>
          <button type="button" className="btn btn-primary btn-medium" disabled>
            Disabled
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <span className="text-xs text-neutral-400">Icon buttons (icon-btn + variant + size)</span>
        <div className="flex flex-wrap gap-2 items-center">
          <button type="button" className="icon-btn icon-btn-primary" aria-label="Primary">
            <SearchOutlined />
          </button>
          <button type="button" className="icon-btn icon-btn-secondary" aria-label="Secondary">
            <SearchOutlined />
          </button>
          <button type="button" className="icon-btn icon-btn-text" aria-label="Text">
            <SearchOutlined />
          </button>
          <button type="button" className="icon-btn icon-btn-primary icon-btn-small" aria-label="Small">
            <SearchOutlined />
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <span className="text-xs text-neutral-400">Toggle group (toggle-btn-group-* + toggle-btn + size)</span>
        <div className="toggle-btn-group-md">
          <button type="button" className="toggle-btn toggle-btn-medium">
            Option A
          </button>
          <button type="button" className="toggle-btn toggle-btn-medium">
            Option B
          </button>
          <button type="button" className="toggle-btn toggle-btn-medium">
            Option C
          </button>
        </div>
      </section>
    </div>
  ),
};

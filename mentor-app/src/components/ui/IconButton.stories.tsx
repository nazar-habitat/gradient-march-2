import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { SearchOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
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
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: { type: 'primary', icon: <SearchOutlined /> },
};

export const Default: Story = {
  args: { icon: <SettingOutlined /> },
};

export const Circle: Story = {
  args: { type: 'primary', shape: 'circle', icon: <PlusOutlined /> },
};

export const Disabled: Story = {
  args: { type: 'primary', icon: <SearchOutlined />, disabled: true },
};

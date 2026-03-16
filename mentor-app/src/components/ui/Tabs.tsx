import { Tabs as AntTabs } from 'antd';
import type { TabsProps as AntTabsProps } from 'antd';
import './Tabs.css';

export type TabType = 'line' | 'card';
export type TabSize = 'small' | 'medium' | 'large';

export interface TabsProps extends Omit<AntTabsProps, 'type' | 'size'> {
  /** Visual style. `line` shows an underline indicator; `card` renders pill-shaped tabs with a filled background. @default 'line' */
  type?: TabType;
  /** Controls font-size and padding. @default 'medium' */
  size?: TabSize;
}

const ANT_SIZE_MAP = {
  small: 'small',
  medium: 'middle',
  large: 'large',
} as const;

const CARD_SIZE_CLASS: Record<TabSize, string> = {
  small: 'g-tabs-card--sm',
  medium: 'g-tabs-card--md',
  large: 'g-tabs-card--lg',
};

export default function Tabs({
  type = 'line',
  size = 'medium',
  className,
  ...rest
}: TabsProps) {
  if (type === 'card') {
    const cls = ['g-tabs-card', CARD_SIZE_CLASS[size], className]
      .filter(Boolean)
      .join(' ');
    return <AntTabs type="line" className={cls} {...rest} />;
  }

  return (
    <AntTabs
      type="line"
      size={ANT_SIZE_MAP[size]}
      className={className}
      {...rest}
    />
  );
}

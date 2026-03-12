import { Tabs as AntTabs } from 'antd';
import type { TabsProps as AntTabsProps } from 'antd';

export type TabsVariant = 'default' | 'settings' | 'pill' | 'chiller';

export interface TabsProps extends AntTabsProps {
  /**
   * Visual variant. Use "settings" for settings-page style (customise via .settings-tabs in CSS).
   * "pill" / "chiller" map to existing CSS classes.
   */
  variant?: TabsVariant;
}

const VARIANT_CLASS: Record<TabsVariant, string> = {
  default: '',
  settings: 'settings-tabs',
  pill: 'pill-tabs',
  chiller: 'chiller-tabs',
};

/** Tabs wrapper — forwards to antd Tabs, applies variant className for customisation. */
export default function Tabs({
  variant = 'default',
  className,
  ...rest
}: TabsProps) {
  const variantClass = VARIANT_CLASS[variant];
  const resolvedClassName = [variantClass, className].filter(Boolean).join(' ') || undefined;
  return <AntTabs className={resolvedClassName} {...rest} />;
}

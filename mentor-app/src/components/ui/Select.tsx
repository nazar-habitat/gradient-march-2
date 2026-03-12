import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';
import { ChevronDownIcon } from '@/components/icons';

export type SelectProps = AntSelectProps;

/** Border radius by size (match Button/Input: 10 / 12 / 16). Ant has no per-size token. */
const BORDER_RADIUS_BY_SIZE: Record<NonNullable<SelectProps['size']>, number> = {
  small: 10,
  middle: 12,
  large: 16,
};

const DEFAULT_SUFFIX_ICON = <ChevronDownIcon className="size-4" />;

export default function Select({ size = 'middle', style, suffixIcon, ...props }: SelectProps) {
  const borderRadius = BORDER_RADIUS_BY_SIZE[size];
  return (
    <AntSelect
      size={size}
      style={{ borderRadius, ...style }}
      suffixIcon={suffixIcon ?? DEFAULT_SUFFIX_ICON}
      {...props}
    />
  );
}

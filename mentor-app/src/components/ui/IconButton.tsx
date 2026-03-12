import type React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type IconButtonVariant = 'solid' | 'outlined' | 'filled' | 'text';
export type IconButtonColorScheme = 'accent' | 'neutral' | 'warning' | 'danger' | 'success';
export type IconButtonSize = 'small' | 'medium' | 'large';

const ANT_SIZE_MAP: Record<IconButtonSize, AntButtonProps['size']> = {
  small: 'small',
  medium: 'middle',
  large: 'large',
};

const COLOR_SCHEME_MAP: Record<IconButtonColorScheme, AntButtonProps['color']> = {
  accent: 'primary',
  neutral: 'default',
  danger: 'danger',
  warning: 'orange',
  success: 'green',
};

/** Same as Button: Outlined defaults to Neutral; Solid, Filled, Text default to Accent. */
function defaultColorScheme(variant: IconButtonVariant): IconButtonColorScheme {
  return variant === 'outlined' ? 'neutral' : 'accent';
}

/** Figma Size section: same as Button — Small 10px, Medium 12px, Large 16px. */
const BORDER_RADIUS_BY_SIZE: Record<IconButtonSize, number> = {
  small: 10,
  medium: 12,
  large: 16,
};

export interface IconButtonProps
  extends Omit<
    AntButtonProps,
    'type' | 'color' | 'variant' | 'danger' | 'size' | 'children' | 'block' | 'iconPosition' | 'shape'
  > {
  /** Visual style: solid (filled bg), outlined (border), filled (tinted bg), text (no border/bg). Default: solid. */
  variant?: IconButtonVariant;
  /** Style: accent, neutral, warning, danger, success. Default: accent for solid/filled/text, neutral for outlined. */
  colorScheme?: IconButtonColorScheme;
  /** Size. Default: medium. */
  size?: IconButtonSize;
  /** Icon element (required) */
  icon: React.ReactNode;
}

export default function IconButton({
  variant = 'solid',
  colorScheme,
  size = 'medium',
  icon,
  style,
  ...rest
}: IconButtonProps) {
  const resolvedColorScheme = colorScheme ?? defaultColorScheme(variant);
  const antColor = COLOR_SCHEME_MAP[resolvedColorScheme];
  const sizeStyle: React.CSSProperties = { borderRadius: BORDER_RADIUS_BY_SIZE[size] };

  return (
    <AntButton
      color={antColor}
      variant={variant}
      size={ANT_SIZE_MAP[size]}
      icon={icon}
      style={{ ...sizeStyle, ...style }}
      {...rest}
    />
  );
}

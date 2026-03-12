import type React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonVariant = 'solid' | 'outlined' | 'filled' | 'text' | 'link';
export type ButtonColorScheme = 'accent' | 'neutral' | 'warning' | 'danger' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';

const ANT_SIZE_MAP: Record<ButtonSize, AntButtonProps['size']> = {
  small: 'small',
  medium: 'middle',
  large: 'large',
};

const COLOR_SCHEME_MAP: Record<ButtonColorScheme, AntButtonProps['color']> = {
  accent: 'primary',
  neutral: 'default',
  danger: 'danger',
  warning: 'orange',
  success: 'green',
};

/** Outlined and Link default to Neutral; Solid, Filled, Text default to Accent. */
function defaultColorScheme(variant: ButtonVariant): ButtonColorScheme {
  return variant === 'outlined' || variant === 'link' ? 'neutral' : 'accent';
}

export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'color' | 'variant' | 'danger' | 'size'> {
  /** Visual style: solid (filled bg), outlined (border), filled (tinted bg), text (no border/bg), link (underline-style). Default: solid. */
  variant?: ButtonVariant;
  /** Style: accent (primary), neutral, warning, danger, success. Default: accent for solid/filled/text, neutral for outlined/link. */
  colorScheme?: ButtonColorScheme;
  /** Size. Default: medium. */
  size?: ButtonSize;
}

/** Figma Size section: Small 10px, Medium 12px, Large 16px. No per-size token in Ant. */
const BORDER_RADIUS_BY_SIZE: Record<ButtonSize, number> = {
  small: 10,
  medium: 12,
  large: 16,
};

const linkStyle: React.CSSProperties = {
  padding: 0,
  height: 'auto',
  textDecoration: 'underline',
};

export default function Button({
  variant = 'solid',
  colorScheme,
  size = 'medium',
  style,
  ...rest
}: ButtonProps) {
  const resolvedColorScheme = colorScheme ?? defaultColorScheme(variant);
  const antColor = COLOR_SCHEME_MAP[resolvedColorScheme];
  const isLink = variant === 'link';
  const sizeStyle: React.CSSProperties =
    isLink ? {} : { borderRadius: BORDER_RADIUS_BY_SIZE[size] };

  return (
    <AntButton
      color={antColor}
      variant={variant}
      size={ANT_SIZE_MAP[size]}
      style={isLink ? { ...linkStyle, ...style } : { ...sizeStyle, ...style }}
      {...rest}
    />
  );
}

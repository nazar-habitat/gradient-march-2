import type React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

type ButtonVariant = 'solid' | 'outlined' | 'filled' | 'text' | 'link';
type ButtonColorScheme = 'neutral' | 'danger' | 'warning' | 'success';

export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'color' | 'variant' | 'danger'> {
  /** Visual style: solid (filled bg), outlined (border), filled (tinted bg), text (no border/bg), link (underline-style) */
  variant?: ButtonVariant;
  /** Semantic color: neutral (gray), danger (red), warning (orange), success (green). Omit for primary blue. */
  colorScheme?: ButtonColorScheme;
}

const colorSchemeMap: Record<ButtonColorScheme, AntButtonProps['color']> = {
  neutral: 'default',
  danger: 'danger',
  warning: 'orange',
  success: 'green',
};

const linkStyle: React.CSSProperties = {
  padding: 0,
  height: 'auto',
  textDecoration: 'underline',
};

export default function Button({ variant = 'solid', colorScheme, style, ...rest }: ButtonProps) {
  const isLink = variant === 'link';

  return (
    <AntButton
      color={colorScheme ? colorSchemeMap[colorScheme] : 'primary'}
      variant={variant}
      style={isLink ? { ...linkStyle, ...style } : style}
      {...rest}
    />
  );
}

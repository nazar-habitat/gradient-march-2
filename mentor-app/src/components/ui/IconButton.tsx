import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

type IconButtonVariant = 'solid' | 'outlined' | 'filled' | 'text';
type IconButtonColorScheme = 'neutral' | 'warning' | 'success';
export interface IconButtonProps
  extends Omit<AntButtonProps, 'type' | 'color' | 'variant' | 'danger' | 'children' | 'block' | 'iconPosition' | 'shape'> {
  /** Visual style: solid (filled bg), outlined (border), filled (tinted bg), text (no border/bg) */
  variant?: IconButtonVariant;
  /** Semantic color: neutral (gray), warning (orange), success (green). Omit for primary blue. */
  colorScheme?: IconButtonColorScheme;
  /** Icon element (required) */
  icon: React.ReactNode;
}

const colorSchemeMap: Record<IconButtonColorScheme, AntButtonProps['color']> = {
  neutral: 'default',
  warning: 'orange',
  success: 'green',
};

export default function IconButton({
  variant = 'solid',
  colorScheme,
  ...rest
}: IconButtonProps) {
  return (
    <AntButton
      color={colorScheme ? colorSchemeMap[colorScheme] : 'primary'}
      variant={variant}
      {...rest}
    />
  );
}

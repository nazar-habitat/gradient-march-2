import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@/components/icons';

/** Extends Ant with clearIcon so we can default it to Hero icon; antd accepts it at runtime. */
export type InputProps = AntInputProps & { clearIcon?: React.ReactNode };

/** Border radius by size (match Button: 10 / 12 / 16). Ant has no per-size token. */
const BORDER_RADIUS_BY_SIZE: Record<NonNullable<InputProps['size']>, number> = {
  small: 10,
  middle: 12,
  large: 16,
};

const DEFAULT_CLEAR_ICON = <XMarkIcon className="size-4" />;

function Input({ size = 'middle', style, clearIcon, ...props }: InputProps) {
  const borderRadius = BORDER_RADIUS_BY_SIZE[size];
  const antProps = {
    size,
    style: { borderRadius, ...style },
    clearIcon: clearIcon ?? DEFAULT_CLEAR_ICON,
    ...props,
  };
  return <AntInput {...(antProps as AntInputProps)} />;
}

const DEFAULT_PASSWORD_ICON_RENDER = (visible: boolean) =>
  visible ? (
    <EyeSlashIcon className="size-4" />
  ) : (
    <EyeIcon className="size-4" />
  );

function PasswordInput(
  props: React.ComponentProps<typeof AntInput.Password>
) {
  const { iconRender, ...rest } = props;
  return (
    <AntInput.Password
      iconRender={iconRender ?? DEFAULT_PASSWORD_ICON_RENDER}
      {...rest}
    />
  );
}

Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;
Input.Password = PasswordInput;

export default Input;

import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd';

export type InputProps = AntInputProps;

/** Border radius by size (match Button: 10 / 12 / 16). Ant has no per-size token. */
const BORDER_RADIUS_BY_SIZE: Record<NonNullable<InputProps['size']>, number> = {
  small: 10,
  middle: 12,
  large: 16,
};

function Input({ size = 'middle', style, ...props }: InputProps) {
  const borderRadius = BORDER_RADIUS_BY_SIZE[size];
  return (
    <AntInput
      size={size}
      style={{ borderRadius, ...style }}
      {...props}
    />
  );
}

Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;
Input.Password = AntInput.Password;

export default Input;

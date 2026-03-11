import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type IconButtonProps = Omit<AntButtonProps, 'shape'> & {
  shape?: AntButtonProps['shape'];
};

export default function IconButton({ shape = 'default', ...props }: IconButtonProps) {
  return <AntButton shape={shape} {...props} />;
}

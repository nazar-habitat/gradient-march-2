import { Avatar as AntAvatar } from 'antd';
import type { AvatarProps as AntAvatarProps } from 'antd';

export type AvatarProps = AntAvatarProps;

/** Avatar wrapper — forwards to antd Avatar for future theme/customisation. */
export default function Avatar(props: AvatarProps) {
  return <AntAvatar {...props} />;
}

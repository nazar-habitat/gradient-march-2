import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd';

export type TagProps = AntTagProps;

export default function Tag(props: TagProps) {
  return <AntTag {...props} />;
}

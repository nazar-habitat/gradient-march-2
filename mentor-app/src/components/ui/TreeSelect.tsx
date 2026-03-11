import { TreeSelect as AntTreeSelect } from 'antd';
import type { TreeSelectProps as AntTreeSelectProps } from 'antd';

export type TreeSelectProps = AntTreeSelectProps;

export default function TreeSelect(props: TreeSelectProps) {
  return <AntTreeSelect {...props} />;
}

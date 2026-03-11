import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';

export type SelectProps = AntSelectProps;

export default function Select(props: SelectProps) {
  return <AntSelect {...props} />;
}

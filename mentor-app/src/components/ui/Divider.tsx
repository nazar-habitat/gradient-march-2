import { Divider as AntDivider } from 'antd';
import type { DividerProps as AntDividerProps } from 'antd';

export type DividerProps = AntDividerProps;

/** Divider wrapper — forwards to antd Divider for future theme/customisation. */
export default function Divider(props: DividerProps) {
  return <AntDivider {...props} />;
}

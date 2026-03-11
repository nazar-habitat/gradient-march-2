import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd';

export type SwitchProps = AntSwitchProps;

export default function Switch(props: SwitchProps) {
  return <AntSwitch {...props} />;
}

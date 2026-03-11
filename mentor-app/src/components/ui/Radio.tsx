import { Radio as AntRadio } from 'antd';
import type { RadioProps as AntRadioProps } from 'antd';

export type RadioProps = AntRadioProps;

function Radio(props: RadioProps) {
  return <AntRadio {...props} />;
}

Radio.Group = AntRadio.Group;
Radio.Button = AntRadio.Button;

export default Radio;

import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd';

export type InputProps = AntInputProps;

function Input(props: InputProps) {
  return <AntInput {...props} />;
}

Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;
Input.Password = AntInput.Password;

export default Input;

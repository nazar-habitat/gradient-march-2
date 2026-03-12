import type { ComponentProps } from 'react';
import { Typography } from 'antd';

const { Text: AntText } = Typography;

export type TextProps = ComponentProps<typeof AntText>;

/** Typography.Text wrapper — single place to customise body/UI text. */
export default function Text(props: TextProps) {
  return <AntText {...props} />;
}

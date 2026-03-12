import { Radio as AntRadio, theme } from 'antd';
import type { RadioProps as AntRadioProps } from 'antd';

export interface RadioProps extends AntRadioProps {
  /** Optional label text rendered as the main line. Falls back to children when omitted. */
  label?: string;
  /** Optional description text rendered under the label, using typography tokens. */
  description?: string;
}

function Radio({ label, description, children, ...rest }: RadioProps) {
  const {
    token: { colorText, colorTextTertiary, fontSize, fontSizeSM, lineHeight, lineHeightSM },
  } = theme.useToken();

  const hasDescription = Boolean(description);
  const primaryContent = label ?? children;

  return (
    <AntRadio
      {...rest}
      className={hasDescription ? `radio-with-label-desc ${rest.className ?? ''}`.trim() : rest.className}
    >
      {hasDescription ? (
        <span
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          <span
            style={{
              color: colorText,
              fontSize,
              lineHeight,
            }}
          >
            {primaryContent}
          </span>
          <span
            style={{
              color: colorTextTertiary,
              fontSize: fontSizeSM,
              lineHeight: lineHeightSM,
            }}
          >
            {description}
          </span>
        </span>
      ) : (
        primaryContent
      )}
    </AntRadio>
  );
}

Radio.Group = AntRadio.Group;
Radio.Button = AntRadio.Button;

export default Radio;

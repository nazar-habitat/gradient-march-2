/**
 * Design tokens (Figma Gradient DS) for Ant theme adapter and optional JS consumption.
 * Values are concrete so Ant's theme algorithms can derive Map/Alias tokens correctly.
 * Keep in sync with index.css :root (--ds-*) and Figma. Do not pass var(--ds-*) into Ant ThemeConfig.
 */

export interface DesignTokens {
  colorPrimary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;
  colorLink: string;
  colorTextBase: string;
  colorBgBase: string;
  fontFamily: string;
  fontSize: number;
  borderRadius: number;
  colorBgContainer: string;
  colorBgElevated: string;
  colorText: string;
  colorTextSecondary: string;
  colorTextTertiary: string;
  colorBorder: string;
  colorBorderSecondary: string;
  colorTextPlaceholder: string;
  colorTextDisabled: string;
  colorPrimaryHover: string;
  colorPrimaryActive: string;
  fontSizeSM: number;
  fontSizeLG: number;
  fontSizeXL: number;
  fontSizeHeading1: number;
  fontSizeHeading2: number;
  fontSizeHeading3: number;
  fontSizeHeading4: number;
  fontSizeHeading5: number;
  lineHeight: number;
  lineHeightLG: number;
  lineHeightSM: number;
  lineHeightHeading1: number;
  lineHeightHeading2: number;
  lineHeightHeading3: number;
  lineHeightHeading4: number;
  lineHeightHeading5: number;
  fontSizeIcon: number;
  fontWeightStrong: number;
  /* Component: Button */
  buttonControlHeightSM: number;
  buttonControlHeight: number;
  buttonControlHeightLG: number;
  buttonContentFontSizeSM: number;
  buttonContentFontSize: number;
  buttonContentFontSizeLG: number;
  buttonContentLineHeightSM: number;
  buttonContentLineHeight: number;
  buttonContentLineHeightLG: number;
  buttonPaddingInlineSM: number;
  buttonPaddingInline: number;
  buttonPaddingInlineLG: number;
  buttonPaddingBlockSM: number;
  buttonPaddingBlock: number;
  buttonPaddingBlockLG: number;
  buttonIconGap: number;
  buttonBorderRadius: number;
  buttonDefaultShadow: string;
  buttonPrimaryShadow: string;
  buttonDangerShadow: string;
  /* Component: Input / Select */
  inputColorBgContainer: string;
  inputControlHeightSM: number;
  inputControlHeight: number;
  inputControlHeightLG: number;
  inputPaddingInlineSM: number;
  inputPaddingInline: number;
  inputPaddingInlineLG: number;
  inputPaddingBlockSM: number;
  inputPaddingBlock: number;
  inputPaddingBlockLG: number;
  inputFontSizeSM: number;
  inputFontSize: number;
  inputFontSizeLG: number;
  inputBorderRadius: number;
  inputHoverBorderColor: string;
  inputActiveBorderColor: string;
  inputActiveShadow: string;
  inputErrorActiveShadow: string;
  inputColorError: string;
  /* Component: Tabs */
  tabsItemColor: string;
  tabsItemSelectedColor: string;
  tabsItemHoverColor: string;
  tabsInkBarColor: string;
  tabsTitleFontSizeSM: number;
  tabsTitleFontSize: number;
  tabsTitleFontSizeLG: number;
  tabsHorizontalItemPaddingSM: string;
  tabsHorizontalItemPadding: string;
  tabsHorizontalItemPaddingLG: string;
  tabsHorizontalItemGutter: number;
}

export const designTokens: DesignTokens = {
  colorPrimary: '#5C5AF5',
  colorSuccess: '#26ea5d',
  colorWarning: '#ffae18',
  colorError: '#e53e1c',
  colorInfo: '#5452f5',
  colorLink: '#5452f5',
  colorTextBase: '#ffffff',
  colorBgBase: '#000000',
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: 14,
  borderRadius: 8,
  colorBgContainer: '#141414',
  colorBgElevated: '#191919',
  colorText: 'rgba(255,255,255,0.9)',
  colorTextSecondary: '#dedede',
  colorTextTertiary: '#949494',
  colorBorder: '#313131',
  colorBorderSecondary: '#4a4a4a',
  colorTextPlaceholder: '#636363',
  colorTextDisabled: '#313131',
  colorPrimaryHover: '#4341f1',
  colorPrimaryActive: '#3735bb',
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  lineHeight: 20 / 14,
  lineHeightLG: 1.5,
  lineHeightSM: 16 / 12,
  lineHeightHeading1: 1.21,
  lineHeightHeading2: 1.27,
  lineHeightHeading3: 1.33,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  fontSizeIcon: 14,
  fontWeightStrong: 600,
  buttonControlHeightSM: 32,
  buttonControlHeight: 40,
  buttonControlHeightLG: 48,
  buttonContentFontSizeSM: 13,
  buttonContentFontSize: 14,
  buttonContentFontSizeLG: 16,
  buttonContentLineHeightSM: 16,
  buttonContentLineHeight: 20,
  buttonContentLineHeightLG: 24,
  buttonPaddingInlineSM: 12,
  buttonPaddingInline: 16,
  buttonPaddingInlineLG: 24,
  buttonPaddingBlockSM: 8,
  buttonPaddingBlock: 10,
  buttonPaddingBlockLG: 12,
  buttonIconGap: 8,
  buttonBorderRadius: 12,
  buttonDefaultShadow: 'none',
  buttonPrimaryShadow: 'none',
  buttonDangerShadow: 'none',
  inputColorBgContainer: '#191919',
  inputControlHeightSM: 32,
  inputControlHeight: 40,
  inputControlHeightLG: 48,
  inputPaddingInlineSM: 10,
  inputPaddingInline: 12,
  inputPaddingInlineLG: 16,
  inputPaddingBlockSM: 6,
  inputPaddingBlock: 8,
  inputPaddingBlockLG: 12,
  inputFontSizeSM: 13,
  inputFontSize: 14,
  inputFontSizeLG: 16,
  inputBorderRadius: 12,
  inputHoverBorderColor: '#4a4a4a',
  inputActiveBorderColor: '#949494',
  inputActiveShadow: 'none',
  inputErrorActiveShadow: 'none',
  inputColorError: '#fa7054',
  tabsItemColor: '#949494',
  tabsItemSelectedColor: '#ffffff',
  tabsItemHoverColor: '#c6c6c6',
  tabsInkBarColor: '#5452f5',
  tabsTitleFontSizeSM: 13,
  tabsTitleFontSize: 14,
  tabsTitleFontSizeLG: 16,
  tabsHorizontalItemPaddingSM: '8px 0',
  tabsHorizontalItemPadding: '12px 0',
  tabsHorizontalItemPaddingLG: '16px 0',
  tabsHorizontalItemGutter: 24,
};

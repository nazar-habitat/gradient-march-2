import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

/**
 * Ant Design v5 — Full dark theme token reference.
 * Every token below is the DEFAULT value from theme.darkAlgorithm.
 * Uncomment and change any value to override it.
 *
 * Seed Tokens cascade into Map/Alias tokens automatically.
 * Override a seed token first — only override derived tokens if you need precise control.
 *
 * Usage:
 *   <ConfigProvider theme={themeConfig}> ... </ConfigProvider>
 */

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    // ─── Seed tokens (Figma Gradient Design System — see docs/FIGMA-DEV-THEME-SYNC.md) ───
    colorPrimary: '#5452f5', // Figma: Purple/500
    colorSuccess: '#26ea5d', // Figma: Green/500
    colorWarning: '#ffae18', // Figma: Orange/500
    colorError: '#e53e1c', // Figma: Red/600
    colorInfo: '#5452f5',
    colorLink: '#5452f5',
    colorTextBase: '#ffffff', // Figma: Foreground/fg-primary
    colorBgBase: '#000000', // Figma: Neutral/Black

    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    borderRadius: 8,

    // ─── Background / text / border (Figma Neutral scale) ───
    colorBgContainer: '#141414', // Figma: Neutral/950
    colorBgElevated: '#191919', // Figma: Neutral/900
    colorText: 'rgba(255,255,255,0.9)',
    colorTextSecondary: '#dedede', // Figma: Neutral/100
    colorTextTertiary: '#949494', // Figma: Neutral/400
    colorBorder: '#313131', // Figma: Neutral/800
    colorBorderSecondary: '#4a4a4a', // Figma: Neutral/700

    // Primary variants (Figma Purple/600, /700)
    colorPrimaryHover: '#4341f1',
    colorPrimaryActive: '#3735bb',

    // ─── Rest of seed tokens (uncomment to override) ───
    // fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    // fontSize: 14,
    // sizeUnit: 4,
    // sizeStep: 4,
    // controlHeight: 32,
    // lineWidth: 1,
    // lineType: "solid",
    // zIndexBase: 0,
    // zIndexPopupBase: 1000,
    // opacityImage: 1,
    // wireframe: false,
    // motion: true,
    // motionUnit: 0.1,
    // motionBase: 0,

    // ─── Text Colors ───
    // colorText: "rgba(255,255,255,0.85)",
    // colorTextSecondary: "rgba(255,255,255,0.65)",
    // colorTextTertiary: "rgba(255,255,255,0.45)",
    // colorTextQuaternary: "rgba(255,255,255,0.25)",
    // colorTextPlaceholder: "rgba(255,255,255,0.25)",
    // colorTextDisabled: "rgba(255,255,255,0.25)",
    // colorTextHeading: "rgba(255,255,255,0.85)",
    // colorTextLabel: "rgba(255,255,255,0.65)",
    // colorTextDescription: "rgba(255,255,255,0.45)",
    // colorTextLightSolid: "#fff",

    // ─── Fill Colors ───
    // colorFill: "rgba(255,255,255,0.18)",
    // colorFillSecondary: "rgba(255,255,255,0.12)",
    // colorFillTertiary: "rgba(255,255,255,0.08)",
    // colorFillQuaternary: "rgba(255,255,255,0.04)",
    // colorFillContent: "rgba(255,255,255,0.12)",
    // colorFillContentHover: "rgba(255,255,255,0.18)",
    // colorFillAlter: "rgba(255,255,255,0.04)",

    // ─── Background Colors ───
    // colorBgBase: "#000",
    // colorBgSolid: "rgba(255,255,255,0.95)",
    // colorBgSolidHover: "rgb(255,255,255)",
    // colorBgSolidActive: "rgba(255,255,255,0.9)",
    // colorBgLayout: "#000000",
    // colorBgContainer: "#141414",
    // colorBgElevated: "#1f1f1f",
    // colorBgSpotlight: "#424242",
    // colorBgBlur: "rgba(255,255,255,0.04)",
    // colorBgMask: "rgba(0,0,0,0.45)",
    // colorBgContainerDisabled: "rgba(255,255,255,0.08)",
    // colorBgTextHover: "rgba(255,255,255,0.12)",
    // colorBgTextActive: "rgba(255,255,255,0.18)",

    // ─── Border Colors ───
    // colorBorder: "#424242",
    // colorBorderDisabled: "#424242",
    // colorBorderSecondary: "#303030",
    // colorBorderBg: "#141414",

    // ─── Primary Color Variants (derived from colorPrimary) ───
    // colorPrimaryBg: "#15325b",
    // colorPrimaryBgHover: "#15417e",
    // colorPrimaryBorder: "#15325b",
    // colorPrimaryBorderHover: "#15417e",
    // colorPrimaryHover: "#3c89e8",
    // colorPrimaryActive: "#1554ad",
    // colorPrimaryTextHover: "#3c89e8",
    // colorPrimaryText: "#1668dc",
    // colorPrimaryTextActive: "#1554ad",

    // ─── Success Color Variants ───
    // colorSuccessBg: "#162312",
    // colorSuccessBgHover: "#1d3712",
    // colorSuccessBorder: "#274916",
    // colorSuccessBorderHover: "#306317",
    // colorSuccessHover: "#306317",
    // colorSuccessActive: "#3c8618",
    // colorSuccessTextHover: "#6abe39",
    // colorSuccessText: "#49aa19",
    // colorSuccessTextActive: "#3c8618",

    // ─── Error Color Variants ───
    // colorErrorBg: "#2c1618",
    // colorErrorBgHover: "#451d1f",
    // colorErrorBgFilledHover: "#441e1f",
    // colorErrorBgActive: "#5b2526",
    // colorErrorBorder: "#5b2526",
    // colorErrorBorderHover: "#7e2e2f",
    // colorErrorHover: "#e86e6b",
    // colorErrorActive: "#ad393a",
    // colorErrorTextHover: "#e86e6b",
    // colorErrorText: "#dc4446",
    // colorErrorTextActive: "#ad393a",
    // colorErrorOutline: "rgba(238,38,56,0.11)",

    // ─── Warning Color Variants ───
    // colorWarningBg: "#2b2111",
    // colorWarningBgHover: "#443111",
    // colorWarningBorder: "#594214",
    // colorWarningBorderHover: "#7c5914",
    // colorWarningHover: "#7c5914",
    // colorWarningActive: "#aa7714",
    // colorWarningTextHover: "#e8b339",
    // colorWarningText: "#d89614",
    // colorWarningTextActive: "#aa7714",
    // colorWarningOutline: "rgba(173,107,0,0.15)",

    // ─── Info Color Variants ───
    // colorInfoBg: "#111a2c",
    // colorInfoBgHover: "#112545",
    // colorInfoBorder: "#15325b",
    // colorInfoBorderHover: "#15417e",
    // colorInfoHover: "#15417e",
    // colorInfoActive: "#1554ad",
    // colorInfoTextHover: "#3c89e8",
    // colorInfoText: "#1668dc",
    // colorInfoTextActive: "#1554ad",

    // ─── Link Color Variants ───
    // colorLinkHover: "#15417e",
    // colorLinkActive: "#1554ad",

    // ─── Other Colors ───
    // colorWhite: "#fff",
    // colorBgMask: "rgba(0,0,0,0.45)",
    // colorHighlight: "#dc4446",
    // colorIcon: "rgba(255,255,255,0.45)",
    // colorIconHover: "rgba(255,255,255,0.85)",
    // colorErrorOutline: "rgba(238,38,56,0.11)",
    // colorWarningOutline: "rgba(173,107,0,0.15)",
    // colorSplit: "rgba(253,253,253,0.12)",
    // colorTextLightSolid: "#fff",

    // ─── Typography ───
    // fontSizeSM: 12,
    // fontSizeLG: 16,
    // fontSizeXL: 20,
    // fontSizeHeading1: 38,
    // fontSizeHeading2: 30,
    // fontSizeHeading3: 24,
    // fontSizeHeading4: 20,
    // fontSizeHeading5: 16,
    // lineHeight: 1.5714285714285714,
    // lineHeightLG: 1.5,
    // lineHeightSM: 1.6666666666666667,
    // fontHeight: 22,
    // fontHeightLG: 24,
    // fontHeightSM: 20,
    // lineHeightHeading1: 1.2105263157894737,
    // lineHeightHeading2: 1.2666666666666666,
    // lineHeightHeading3: 1.3333333333333333,
    // lineHeightHeading4: 1.4,
    // lineHeightHeading5: 1.5,
    // fontSizeIcon: 12,
    // fontWeightStrong: 600,

    // ─── Sizing ───
    // sizePopupArrow: 16,
    // sizeXXL: 48,
    // sizeXL: 32,
    // sizeLG: 24,
    // sizeMD: 20,
    // sizeMS: 16,
    // size: 16,
    // sizeSM: 12,
    // sizeXS: 8,
    // sizeXXS: 4,

    // ─── Padding ───
    // paddingXXS: 4,
    // paddingXS: 8,
    // paddingSM: 12,
    // padding: 16,
    // paddingMD: 20,
    // paddingLG: 24,
    // paddingXL: 32,
    // paddingContentHorizontalLG: 24,
    // paddingContentVerticalLG: 16,
    // paddingContentHorizontal: 16,
    // paddingContentVertical: 12,
    // paddingContentHorizontalSM: 16,
    // paddingContentVerticalSM: 8,

    // ─── Margin ───
    // marginXXS: 4,
    // marginXS: 8,
    // marginSM: 12,
    // margin: 16,
    // marginMD: 20,
    // marginLG: 24,
    // marginXL: 32,
    // marginXXL: 48,

    // ─── Border Radius Variants ───
    // borderRadiusXS: 2,
    // borderRadiusSM: 4,
    // borderRadiusLG: 8,
    // borderRadiusOuter: 4,

    // ─── Control ───
    // controlHeightSM: 24,
    // controlHeightXS: 16,
    // controlHeightLG: 40,
    // controlOutlineWidth: 2,
    // controlInteractiveSize: 16,
    // controlItemBgHover: "rgba(255,255,255,0.08)",
    // controlItemBgActive: "#15325b",
    // controlItemBgActiveHover: "#15417e",
    // controlItemBgActiveDisabled: "rgba(255,255,255,0.18)",
    // controlTmpOutline: "rgba(255,255,255,0.04)",
    // controlOutline: "rgba(23,117,249,0.31)",
    // controlPaddingHorizontal: 12,
    // controlPaddingHorizontalSM: 8,

    // ─── Line ───
    // lineWidthBold: 2,
    // lineWidthFocus: 3,

    // ─── Motion Duration ───
    // motionDurationFast: "0.1s",
    // motionDurationMid: "0.2s",
    // motionDurationSlow: "0.3s",

    // ─── Motion Easing ───
    // motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    // motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    // motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    // motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    // motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    // motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    // motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    // motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",

    // ─── Box Shadows ───
    // boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
    // boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    // boxShadowCard: "\n      0 1px 2px -2px rgba(0,0,0,0.16),\n      0 3px 6px 0 rgba(0,0,0,0.12),\n      0 5px 12px 4px rgba(0,0,0,0.09)\n    ",
    // boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    // boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    // boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    // boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    // boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",

    // ─── Screen Breakpoints ───
    // screenXS: 480,
    // screenXSMin: 480,
    // screenXSMax: 575,
    // screenSM: 576,
    // screenSMMin: 576,
    // screenSMMax: 767,
    // screenMD: 768,
    // screenMDMin: 768,
    // screenMDMax: 991,
    // screenLG: 992,
    // screenLGMin: 992,
    // screenLGMax: 1199,
    // screenXL: 1200,
    // screenXLMin: 1200,
    // screenXLMax: 1599,
    // screenXXL: 1600,
    // screenXXLMin: 1600,
    // screenXXLMax: 1919,
    // screenXXXL: 1920,
    // screenXXXLMin: 1920,

    // ─── Link Decoration ───
    // linkDecoration: "none",
    // linkHoverDecoration: "none",
    // linkFocusDecoration: "none",

    // ─── Opacity ───
    // opacityLoading: 0.65,
  },

  // ─── Component-Level Token Overrides ───
  // Override tokens for specific components without affecting others.
  // See: https://ant.design/docs/react/customize-theme#component-token
  //
  // components: {
  //   Button: {
  //     colorPrimary: '#5452f5',
  //     borderRadius: 12,
  //   },
  //   Table: {
  //     colorBgContainer: '#0a0a0a',
  //     borderRadius: 16,
  //   },
  //   Drawer: {
  //     colorBgElevated: '#141414',
  //   },
  // },
};

export default themeConfig;

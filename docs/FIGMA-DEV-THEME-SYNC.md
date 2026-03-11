# Figma ↔ Dev theme sync

How to keep the [Gradient Design System](https://www.figma.com/design/5wOpXaZXPW8r0y21pvcovS) in sync with the Mentor app theme (Ant Design + Tailwind). Dev is the source of truth for **token names and semantics**; Figma should mirror those so both stay aligned.

---

## 1. Where to start (dev side)

1. **Ant Design** — Edit **seed tokens** in `mentor-app/src/themeConfig.ts` under `token: { ... }`.  
   Start with: `colorPrimary`, `colorBgBase`, `colorBgContainer`, `colorTextBase`, `colorTextSecondary`, `colorBorder`, `fontFamily`, `borderRadius`.  
   See [ANT-DESIGN-CUSTOMIZATION.md](./ANT-DESIGN-CUSTOMIZATION.md).

2. **Single source of truth (recommended next)** — Add `src/theme/tokens.ts` and `src/theme/antd-theme.ts`, then derive `themeConfig` from tokens. Same tokens can later drive Tailwind via CSS variables.  
   See [UI-CUSTOMIZATION-RECOMMENDATION.md](./UI-CUSTOMIZATION-RECOMMENDATION.md).

3. **Tailwind** — Palette in `mentor-app/src/index.css` `@theme` already matches Figma (Neutral, Purple, etc.). For theme switching, switch to semantic colors that reference CSS variables (e.g. `--color-primary: var(--ds-color-primary)`).

---

## 2. Figma → Ant Design token mapping

Use this table to set **dev** from Figma, or to **align Figma** to dev.

| Ant Design token (seed) | Figma variable / usage | Example value |
|-------------------------|------------------------|---------------|
| `colorPrimary` | Purple/500 | `#5452f5` |
| (primary hover) | Purple/600 | `#4341f1` |
| (primary active) | Purple/700 | `#3735bb` |
| `colorBgBase` | Neutral/Black | `#000000` |
| `colorBgContainer` | Neutral/950 | `#141414` |
| `colorBgElevated` | Neutral/900 | `#191919` |
| `colorTextBase` / `colorText` | Foreground/fg-primary | `#ffffff` |
| `colorTextSecondary` | Neutral/100 or 200 | `#dedede` / `#c6c6c6` |
| `colorTextTertiary` | Neutral/400 | `#949494` |
| `colorBorder` | Neutral/800 or 700 | `#313131` / `#4a4a4a` |
| `colorError` | Red/600 | `#e53e1c` |
| `fontFamily` | Body/L Medium (and text styles) | `'Inter', sans-serif` |
| `fontSize` | Body default (Body/L Medium) | `16` |
| `fontSizeSM` / `fontSizeLG` | Body/S, Body/L | `14`, `18` |
| `fontSizeHeading1`…`5` | Heading styles in Figma | See § Typography below |
| `borderRadius` | Card/button radius in Figma | `8` or `12` (match your components) |

**Semantic roles in Figma** (so Figma matches dev):

- **Primary** → bind to Purple/500 (and 600/700 for hover/active if you use mode switching).
- **Background base** → Neutral/Black.
- **Background container** → Neutral/950 (or 900 if you prefer slightly lighter).
- **Text primary** → Foreground/fg-primary or Neutral/White.
- **Text secondary** → Neutral/100 or 200.
- **Border** → Neutral/800 or 700.

---

## 3. How to adjust Figma to match dev

You don’t have to follow dev pixel‑perfect, but naming and semantics should match so both stay in sync.

1. **Name variables by role, not only by color**  
   In Figma, prefer semantic names (or aliases) that match dev:
   - e.g. **Primary** (alias → Purple/500), **Background/Base**, **Background/Container**, **Text/Primary**, **Text/Secondary**, **Border/Default**.  
   Then when dev changes “primary” to another hue, you only update the alias in Figma.

2. **Use the same numeric values as dev**  
   After you set tokens in `themeConfig.ts` (or in `theme/tokens.ts`), copy the hex/rgba and spacing values into Figma variables so Figma and dev use the same numbers.  
   Keep a short “design tokens” page or doc that lists: primary, bg base, bg container, text primary/secondary, border, radius, main font, body size. Update Figma when that list changes.

3. **Spacing**  
   Dev uses a 4px grid (Ant Design `sizeUnit`). In Figma you have e.g. x2=16, x2,5=20, x3=24. Either:
   - define a 4px base in Figma and use 4, 8, 12, 16, 20, 24…, or  
   - document “Figma x2 = dev 16px” etc. so both sides use the same scale.

4. **Typography**  
   Dev uses **Inter** (from `index.css`). In Figma, set Body and UI text styles to Inter with the same sizes/weights as in dev (e.g. 16px medium for body).  
   If you add a second font in dev, add the same in Figma and use it for the same roles.

5. **One place to update**  
   When you change a token in dev (e.g. primary color), update the same variable in Figma. When you change a color in Figma for design-system-level changes, update the corresponding token in dev. The table in §2 is the contract between the two.

---

## 4. Typography scale

Dev is the source of truth for **token names**; Figma text styles should mirror the table below so both stay aligned. Values live in `themeConfig.token` (and optionally in `index.css` `@theme` as CSS variables).

**Figma ↔ Dev mapping (set dev from Figma, or align Figma to dev):**

| Dev token | Figma text style (name) | Size (px) | Line height | Weight |
|-----------|-------------------------|-----------|-------------|--------|
| `fontSize` | Body/L Medium (default body) | 16 | 24 | 500 |
| `fontSizeSM` | Body/M or small UI | 14 | 20–24 | 500 |
| `fontSizeLG` | Body/L large | 18 | 28 | 500 |
| `fontSizeHeading1` | Display / H1 | 38 | 46 | 600 |
| `fontSizeHeading2` | H2 | 30 | 38 | 600 |
| `fontSizeHeading3` | H3 | 24 | 32 | 600 |
| `fontSizeHeading4` | H4 | 20 | 28 | 600 |
| `fontSizeHeading5` | H5 | 16 | 24 | 600 |
| `components.Button.contentFontSizeSM` | Buttons/Button S | 13 | 16 | 500 |
| `components.Button.contentFontSize` | Buttons/Button M | 14 | 20 | 500 |
| `components.Button.contentFontSizeLG` | Buttons/Button L | 16 | 24 | 600 (Semi-bold) |
| (no Ant size) | Buttons/Button XL | 20 | 24 | 500 |

**Figma tweaks for typography:**

1. **Name text styles to match the table** — e.g. Body/L Medium, Body/M, Body/L, Heading/1…5. Use the same names in Figma as in the “Figma text style” column so the doc is a 1:1 map.
2. **Use the same numbers** — After setting tokens in `themeConfig.ts`, copy font size (px), line height, and weight from this table into each Figma text style (or the other way around).
3. **One place to update** — When you change a style in Figma (e.g. Body/L Medium to 15px), update `fontSize` in `themeConfig.ts` and this table. When you change a typography token in dev, update the same text style in Figma.

To use the scale in code: Ant Design components (Typography, Button, Input, etc.) pick up these tokens automatically. For custom UI, use Tailwind classes that map to the same scale (see `index.css` `@theme` for `--font-size-*` / `--line-height-*` if defined).

**Font weights:** Ant Design exposes only one global weight token, `fontWeightStrong` (used for bold/strong and some headings). Set it in `themeConfig.token` (e.g. `600` for Semi-bold). To keep a full scale in sync with Figma and use it in CSS/Tailwind, use the same numeric weights everywhere:

| Dev / CSS variable | Figma style | Value |
|-------------------|-------------|--------|
| `themeConfig.token.fontWeightStrong` | Strong / Semi-bold / Bold | `600` (or `700` for Bold) |
| `--font-weight-normal` | Regular | `400` |
| `--font-weight-medium` | Medium | `500` |
| `--font-weight-semibold` | Semi-bold | `600` |
| `--font-weight-bold` | Bold | `700` |

These are defined in `index.css` `@theme`. Use them in custom CSS (`font-weight: var(--font-weight-medium)`) or extend Tailwind’s `fontWeight` theme to reference them. In Figma, set text styles to the same numbers (400, 500, 600, 700) so dev and design stay aligned.

---

## 5. Figma variables snapshot (for reference)

Pulled from the Gradient Design System (node 3810-10932). Use these to fill the mapping in §2 and §4 or to create/update Figma variables to match dev.

| Figma variable | Value |
|----------------|--------|
| Foreground/fg-primary | `#ffffff` |
| Neutral/Black | `#000000` |
| Neutral/950 | `#141414` |
| Neutral/900 | `#191919` |
| Neutral/800 | `#313131` |
| Neutral/700 | `#4a4a4a` |
| Neutral/100 | `#dedede` |
| Neutral/200 | `#c6c6c6` |
| Neutral/400 | `#949494` |
| Purple/500 | `#5452f5` |
| Purple/600 | `#4341f1` |
| Purple/700 | `#3735bb` |
| Red/600 | `#e53e1c` |
| Body/L Medium | Inter, 16px, weight 500, line height 24 |
| Spacing (x2, x2,5, x3, x10) | 16, 20, 24, 80 |

---

## 6. Quick checklist

- [ ] In dev: set seed tokens in `themeConfig.ts` (or in `theme/tokens.ts` + `antd-theme.ts`) from the tables in §2 and §4.
- [ ] In Figma: create or rename variables to match semantic roles (Primary, Bg base, Bg container, Text primary/secondary, Border).
- [ ] In Figma: set those variables to the same hex/values as in dev; document in a “Design tokens” page or doc.
- [ ] In Figma: name text styles to match §4 (Body/L Medium, Body/M, Heading/1…5) and use the same font, size, line height, weight as in the typography table.
- [ ] When adding or changing a design-system color/spacing/type in one place, update the other using this doc.

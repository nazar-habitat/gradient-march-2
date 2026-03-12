# Ant Design Customization — Plan & Implement

Recommendation for customizing Ant Design in the Mentor app so it stays the single source of truth and aligns with the design system and theming goals. Use this doc to plan and implement.

---

## 1. Best approach (summary)

- **Use Ant Design’s token system only** — no ad-hoc global CSS or one-off component overrides for design-system-level look.
- **Prefer seed tokens** — override in `themeConfig.token`; use `themeConfig.components` only when you need a one-off (YAGNI).
- **Derive Ant Design config from theme tokens** — one set of semantic tokens drives Ant Design (and later Tailwind); no duplicated color values.

---

## 2. How to customize

### 2.1 Keep using ConfigProvider + token overrides

- Keep `ConfigProvider theme={themeConfig}` at the app root.
- All design-system-level customization via `themeConfig` (tokens), not global CSS or per-component style overrides.

### 2.2 Prefer seed tokens; component tokens only when needed

| Override | Use for |
|----------|--------|
| **Seed tokens** (`themeConfig.token`) | Primary, backgrounds, text, borders, radius, font. Change these first; they cascade. |
| **Component tokens** (`themeConfig.components`) | Exceptions (e.g. Button radius different from global). Use sparingly (YAGNI). |

For “overall” customization: **customize mainly via `themeConfig.token`**; add `themeConfig.components` only for concrete, component-specific needs.

### 2.3 Single source of truth

- Define semantic theme tokens in **one place** (e.g. `src/theme/tokens.ts`): e.g. `primary`, `primaryHover`, `bgBase`, `bgContainer`, `textBase`, `border`.
- Build Ant Design `ThemeConfig` **from** those tokens (e.g. in `src/theme/antd-theme.ts`): e.g. `colorPrimary: tokens.primary`, `colorBgContainer: tokens.bgContainer`.
- Use that built config in `ConfigProvider`. Same tokens can later drive Tailwind (CSS variables) and a theme switcher.

---

## 3. File and layer structure (to implement)

```
src/
├── theme/
│   ├── tokens.ts          # Semantic tokens per theme (single source of truth)
│   └── antd-theme.ts      # Build Ant Design ThemeConfig from tokens
├── themeConfig.ts         # Thin: export buildAntdTheme(defaultTokens)
└── App.tsx                # ConfigProvider theme={themeConfig}
```

| File | Responsibility |
|------|----------------|
| **theme/tokens.ts** | Export theme objects (e.g. `darkThemeTokens`) with semantic keys: `primary`, `primaryHover`, `bgBase`, `bgContainer`, `textBase`, `border`, etc. No hard-coded colors elsewhere for design-system values. |
| **theme/antd-theme.ts** | One function: `(tokens) => ThemeConfig`. Map tokens to Ant Design token names (`colorPrimary`, `colorBgContainer`, …); set `algorithm: theme.darkAlgorithm` (or other). No hard-coded colors in this file. |
| **themeConfig.ts** | Thin wrapper: e.g. `export default buildAntdTheme(darkThemeTokens);` so existing `ConfigProvider theme={themeConfig}` keeps working. |
| **App.tsx** | Keep `ConfigProvider theme={themeConfig}`. When adding a theme switcher, pass `buildAntdTheme(selectedThemeTokens)`. |

---

## 4. Implementation checklist

Use this order to implement without breaking existing behavior.

- [ ] **Add `src/theme/tokens.ts`**  
  Define one theme object (e.g. `darkThemeTokens`) with semantic keys. Copy current values from `themeConfig.ts` and `index.css` (e.g. primary = purple-500, bgBase = #000) so behavior stays the same.

- [ ] **Add `src/theme/antd-theme.ts`**  
  Implement `buildAntdTheme(tokens): ThemeConfig`. Map token keys to Ant Design seed tokens (`colorPrimary`, `colorBgBase`, `colorBgContainer`, `colorTextBase`, `colorBorder`, etc.). Use `theme.darkAlgorithm`. Export `ThemeConfig` type.

- [ ] **Refactor `themeConfig.ts`**  
  Remove inline token definitions. Import `buildAntdTheme` and `darkThemeTokens`; `export default buildAntdTheme(darkThemeTokens);`. Verify app and Storybook look unchanged.

- [ ] **Optional: `applyTheme()` and CSS variables**  
  When ready to sync Tailwind (see [UI-CUSTOMIZATION-RECOMMENDATION.md](./UI-CUSTOMIZATION-RECOMMENDATION.md)), add `theme/applyTheme.ts` that sets `--ds-*` on `:root` from the same token object; call it in App when theme is applied.

- [ ] **Optional: Theme switcher**  
  Add a second theme in `tokens.ts`, a context or store for “current theme”, and a switcher that passes `buildAntdTheme(selectedThemeTokens)` to ConfigProvider (and calls `applyTheme(selectedThemeTokens)` if using CSS vars).

---

## 5. Summary table

| What | Recommendation |
|------|----------------|
| **How** | ConfigProvider + token overrides only; no ad-hoc CSS for design-system look. |
| **What to override** | Mostly **seed tokens** in `themeConfig.token`; **component tokens** only when needed. |
| **Where values live** | In **theme tokens** (`src/theme/tokens.ts`); Ant Design config is **derived** in `antd-theme.ts`. |
| **themeConfig.ts** | Thin: re-export or call `buildAntdTheme(defaultTokens)` so one source of truth feeds Ant Design. |

---

## 6. Related docs

- [UI-CUSTOMIZATION-RECOMMENDATION.md](./UI-CUSTOMIZATION-RECOMMENDATION.md) — Single source of truth + CSS variables for Ant Design and Tailwind.
- [PROJECT-GOAL-AND-PROMPT.md](./PROJECT-GOAL-AND-PROMPT.md) — Project goals and theming direction.

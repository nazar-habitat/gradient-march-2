# UI Customization — Recommended Approach

This document recommends how to customize the Mentor UI so that **themes can be configured and switched** across both Ant Design and Tailwind, with a single source of truth and clean, maintainable code (aligned with [PROJECT-GOAL-AND-PROMPT.md](./PROJECT-GOAL-AND-PROMPT.md), coding-standards, and react-best-practices).

---

## 1. Current State (Summary)

| Layer | How it’s themed | Limitation |
|-------|------------------|------------|
| **Ant Design** | `ConfigProvider` + `themeConfig.ts` (tokens, dark algorithm) | Theme switch works for Ant Design only. |
| **Tailwind** | `index.css` `@theme` with **hard-coded** palette; utilities (`btn-primary`, `icon-btn`, etc.) use fixed classes (`bg-purple-500`, `text-neutral-400`) | Not driven by theme; switching theme does not change Tailwind-built UI. |

So: **one source for Ant Design, another (static) for Tailwind** — no shared theme that updates both.

---

## 2. Recommended Direction: Single Source of Truth + CSS Variables

Goal: **One set of theme tokens** that drives both Ant Design and Tailwind. When the theme changes, both update.

### 2.1 High-level flow

1. **Single source of truth**  
   Define semantic theme tokens (e.g. primary, primaryHover, bgBase, textBase, border) in **one place** (e.g. `src/theme/tokens.ts` or a small `theme/` module).

2. **Ant Design**  
   Build `themeConfig` from those tokens (e.g. `colorPrimary: tokens.primary`) so Ant Design stays in sync.

3. **CSS variables**  
   When the app (or theme switcher) applies a theme, **inject** token values as CSS variables on `:root` (or on a theme wrapper, e.g. `[data-theme="dark"]`).  
   Example: `--ds-color-primary`, `--ds-color-bg-base`, `--ds-color-text-base`.

4. **Tailwind**  
   In `index.css`:
   - In `@theme`, define **semantic** color (and optionally spacing/radius) variables that **reference** those CSS variables, e.g. `--color-primary: var(--ds-color-primary);`
   - Custom utilities (`btn-primary`, `icon-btn-primary`, etc.) use these semantic names (e.g. `bg-primary`, `text-primary`) instead of hard-coded `bg-purple-500`, `text-neutral-400`.

Result: changing the active theme (swapping the token set and re-injecting CSS variables) updates both Ant Design and Tailwind-built parts.

---

## 3. Suggested File and Layer Structure

Keep separation of concerns and naming consistent with the rest of the app:

```
src/
├── theme/
│   ├── tokens.ts          # Semantic tokens per theme (single source of truth)
│   ├── antd-theme.ts      # Build Ant Design ThemeConfig from tokens
│   └── applyTheme.ts      # Inject CSS variables from tokens (for Tailwind)
├── themeConfig.ts         # Re-export or thin wrapper around theme/antd-theme (optional)
├── index.css              # @theme uses var(--ds-*); utilities use semantic colors
└── App.tsx                # Theme provider wraps ConfigProvider and applies CSS vars
```

- **tokens.ts**  
  Export one object per theme (e.g. `darkThemeTokens`, `lightThemeTokens`) with semantic keys: `primary`, `primaryHover`, `primaryActive`, `bgBase`, `bgContainer`, `textBase`, `textMuted`, `border`, etc. Use these values everywhere else; no hard-coded hex in utilities.

- **antd-theme.ts**  
  Accept a token set and return Ant Design `ThemeConfig` (e.g. `colorPrimary: tokens.primary`, `colorBgContainer: tokens.bgContainer`). Keeps Ant Design tied to the same source.

- **applyTheme.ts**  
  Accept a token set and set CSS variables on `document.documentElement` (or a theme wrapper). Map token keys to `--ds-color-primary`, etc. So Tailwind’s `@theme` and utilities can use `var(--ds-color-primary)`.

- **themeConfig.ts**  
  Either import from `theme/antd-theme.ts` and export the config for the default theme, or stay as-is and later refactor to derive from `tokens.ts` so there is a single source.

- **index.css**  
  In `@theme`, add semantic variables, e.g. `--color-primary: var(--ds-color-primary);`. Replace hard-coded utilities (e.g. `btn-primary`) to use `bg-primary` / `text-primary` so they follow the injected theme.

- **App.tsx (or a ThemeProvider)**  
  Wrap the app with ConfigProvider (theme from `antd-theme`) and run `applyTheme(currentThemeTokens)` on mount and when theme changes (e.g. from a context or store). So both Ant Design and CSS variables stay in sync.

---

## 4. Incremental Steps (YAGNI)

1. **Add theme tokens (one theme)**  
   Create `src/theme/tokens.ts` with a single theme object (e.g. dark) and semantic keys used by both Ant Design and Tailwind (primary, bgBase, textBase, border, etc.). Align values with current `themeConfig` and `index.css` so behavior is unchanged.

2. **Wire Ant Design to tokens**  
   In `theme/antd-theme.ts`, build `ThemeConfig` from that token object. In `App.tsx`, use this config (e.g. import from `antd-theme`) so Ant Design is driven by tokens. You can keep current `themeConfig.ts` as a re-export for a while to avoid big-bang changes.

3. **Inject CSS variables**  
   Implement `applyTheme(tokens)` in `theme/applyTheme.ts` and call it in `App.tsx` (or a small ThemeProvider) with the same token object. Define a minimal set of `--ds-*` variables (e.g. `--ds-color-primary`, `--ds-color-bg-base`) and set them on `:root`.

4. **Point Tailwind at variables**  
   In `index.css`:
   - In `@theme`, add semantic colors that reference CSS variables, e.g. `--color-primary: var(--ds-color-primary);`
   - Change `btn-primary`, `icon-btn-primary`, and other theme-dependent utilities to use these semantic Tailwind colors (e.g. `bg-primary`, `text-primary`) instead of `bg-purple-500`, `text-neutral-400`. Remove hard-coded palette from utilities step by step; you can keep the full palette in `@theme` for non-semantic use or refactor later.

5. **Theme switcher (when needed)**  
   Add a second theme (e.g. light) in `tokens.ts`, a theme context or store, and a switcher that calls `applyTheme(selectedThemeTokens)` and passes the matching Ant Design config to ConfigProvider. No new sources of truth — only switch which token set is active.

---

## 5. Naming and Code Quality

- **Tokens**: Use semantic names (`primary`, `bgBase`, `textMuted`) rather than “purple” or “neutral-800” in the token API so themes can swap palettes without renaming.
- **CSS variables**: Use a prefix (e.g. `--ds-*`) to avoid clashes with Ant Design or third-party CSS.
- **Files**: `tokens.ts`, `antd-theme.ts`, `applyTheme.ts` under `theme/` keep theme logic in one place and align with the “single source of truth” goal.
- **No hard-coded colors** in global utilities (per project goal); only in token definitions and, if needed, in one-off overrides with a comment.

---

## 6. Summary

- **Single source of truth**: `src/theme/tokens.ts` (semantic tokens per theme).
- **Ant Design**: `theme/antd-theme.ts` builds `ThemeConfig` from tokens; ConfigProvider uses it.
- **Tailwind**: `applyTheme()` injects token values as CSS variables; `index.css` `@theme` and utilities use `var(--ds-*)` / semantic Tailwind colors so both Ant Design and Tailwind respond to the same theme.
- **Incremental**: One theme first, then wire Ant Design, then CSS vars, then Tailwind utilities, then theme switcher when needed.

This keeps UI customization predictable, maintainable, and ready to extend to the rest of the product later.

# Project goal and workspace prompt

## Project goal

**Mentor (mentor-app)** is a workspace for building a **design system in code** that integrates with the existing product (data center cooling optimization platform: analytics, recommendations, reports, ADCA, Insights). Goals:

1. **Integration with the existing product**  
   Stack and context are described in `design-team-package/` (stack-and-context.md, app-theme-and-patterns.md). Components, pages, and styles must align with this context so work can be moved into the main repository later without friction.

2. **Design system in code**  
   Single source of truth for colors, typography, spacing, and components — the code (theme tokens, utilities, React components). “Sparing” reuse: reuse components only where it genuinely simplifies maintenance; avoid over-abstracting up front (YAGNI).

3. **Clean, understandable code**  
   Follow coding-standards and react-best-practices: naming, file structure, typing, separation of concerns (pages / components / hooks / services).

4. **Theming**  
   Customize components and build screens so **themes can be configured and switched**. This approach should later be adapted for the rest of the product — the existing part should also gain the ability to change themes.

5. **Screens within the system**  
   Build new screens within this same system (components + theme), not with one-off ad-hoc styles.

---

## Utilities from index.css

`mentor-app/src/index.css` defines custom Tailwind utilities (`@utility btn`, `btn-primary`, `icon-btn`, `toggle-btn`, etc.). **Usage example** — the **“Tailwind utilities (index.css)”** story in `components/ui/Button.stories.tsx`: it shows how to apply these classes on native elements (e.g. `<button className="btn btn-primary">`). Elsewhere in the project, buttons are currently implemented via design-system components (`Button`, `IconButton` on top of Ant Design), so that story is the only place where index.css utilities are used explicitly.

---

## Current limitation and direction for theming

Currently:

- **Ant Design** gets its theme via `ConfigProvider` and `themeConfig.ts` (tokens, dark algorithm) — this already supports theming.
- **Tailwind** in `mentor-app/src/index.css`: the palette is defined in `@theme` with hard-coded colors, and utilities (`@utility btn-primary`, `icon-btn`, etc.) use classes like `bg-purple-500`, `text-neutral-400` with no reference to theme variables.

As a result, **switching themes via ConfigProvider alone is not enough**: Tailwind utilities stay tied to a single palette. For themes to work across the whole UI (including Tailwind-built parts), we need:

- **A single source of truth for the theme** (e.g. a set of tokens in `themeConfig` or a separate theme module).
- **Tailwind** to rely on **CSS variables** whose values come from that source (e.g. inject variables from `themeConfig` into `:root` / a theme data attribute, and in `@theme` reference `var(--color-primary)`, `var(--color-bg-base)`, etc.).
- Components and utilities use these variables (Tailwind classes → CSS vars); then changing the theme (changing the set of variables) will update both Ant Design and custom blocks.

Next steps should gradually move from hard-coded colors in `index.css` to this scheme (even if only one theme at first).

---

## Workspace prompt (copy into chat or rules)

Below is wording you can add to AI requests or save as part of the project context (e.g. in `.cursor/rules` or in the agent description).

```
Project context: Mentor — data center cooling optimization platform (React 19, Vite, Ant Design 5, Tailwind v4). Existing product and design context are described in design-team-package/ (stack-and-context.md, app-theme-and-patterns.md, handoff-and-integration.md).

Mentor-app workspace goals:
- Integrate with this product: components, pages, and styles aligned with the package documentation.
- Build a design system in code: single source of truth for theme and components; sparing component reuse (YAGNI).
- Keep code clean and understandable: follow coding-standards and react-best-practices (naming, structure, types, separation of concerns).
- Support theming: customize components and build screens so themes can be configured and switched; aim for a single source of theme tokens and CSS variables for Tailwind so theming can later extend to the rest of the product.
- Build screens within this system (components + theme), without one-off styles.

When working with theme and styles: avoid hard-coded colors in global utilities; move toward a scheme where Tailwind and Ant Design are driven by the same set of theme tokens/variables.
```

---

## Short version (for rules or brief context)

```
Mentor (mentor-app): design system in code for the product described in design-team-package. Goals: integration with existing stack and context, sparing component reuse, clean code (coding-standards, react-best-practices), theming via a single source of tokens and CSS variables for Tailwind. Build screens within this system; avoid hard-coded colors in global utilities.
```

---

*This document was created to define the project goal and to reuse the prompt in the workspace.*

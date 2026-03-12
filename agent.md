# Mentor — Design Team Package

## Project goal and workspace prompt

For the **mentor-app** workspace goal, theming strategy, and a reusable prompt for AI/agents, see **docs/PROJECT-GOAL-AND-PROMPT.md**.

---

## What this project is

**Mentor** is a **data center cooling optimization platform**. It provides analytics, recommendations, and insights to help operators save energy, water, and emissions — making data center infrastructure more sustainable.

The frontend is a **React SPA** (React 19, Vite 7, TypeScript) using Ant Design 5, Tailwind CSS v4, Plotly.js for charts, TanStack Router, and Zustand for state. The backend is a Fastify BFF behind Nginx, with Stytch B2B auth. The monorepo is organized feature-first (`features/`, `components/`, `pages/`, `hooks/`, `store/`).

## What this folder contains

This folder is a **design-team package** — a self-contained kit that gives designers everything they need to create Figma screens (via Cursor + Figma MCP) that match the production app, **without access to the source repo**. Designs use mock data only; engineering wires up real APIs during implementation.

### Files

| File | Purpose |
|------|---------|
| `design-team-package/START-HERE.md` | Onboarding guide — what to read and in what order. |
| `design-team-package/README.md` | Package overview, contents table, and workflow summary. |
| `design-team-package/stack-and-context.md` | Tech stack, repo structure, conventions, and component names for Figma annotations. |
| `design-team-package/app-theme-and-patterns.md` | UI patterns (layout, sidebar, tables, filters, drawers, modals, tabs, charts) and interaction logic. |
| `design-team-package/feature-summaries.md` | Short description of each feature (Overview, Recommendations, Implementations, Reports, ADCA, Insights, Settings), its screens, and data shapes. |
| `design-team-package/figma-mcp-prompts.md` | Ready-to-use prompts for Cursor + Figma MCP to generate app shell, feature screens, components, states, charts, and handoff annotations. |
| `design-team-package/mock-data-guide.md` | How mock data works — engineering creates it per feature and drops files in `mock-data/`. |
| `design-team-package/mock-data/README.md` | Explains the mock-data folder; currently empty — files are added per feature on request. |
| `design-team-package/handoff-and-integration.md` | What designers deliver (Figma + route names, data-field annotations, component names) and how engineering maps designs to the codebase. |
| `index.css` | Production Tailwind v4 stylesheet. |

## Core features of the app

- **Overview** — High-level dashboard / landing page with KPI summaries.
- **Recommendations** — Filterable table of optimization recommendations with detail drawers, status actions, urgency/impact/effort tags.
- **Implementations** — Implemented recommendations with KPI metric cards, top-implementations carousel, data table, and impact-over-time charts.
- **Reports** — 3-step export wizard (select sites/assets, pick data points, confirm and download) plus an export-activity history table.
- **ADCA (Data Center Analysis)** — Analytical view with scatter plots, time-series charts, KPI/time-resolution dropdowns.
- **Insights** — Filterable insights table with detail drawer.
- **Settings** — User profile, security, language preferences.

## Theming approach

Styling is handled via **Ant Design v5's ConfigProvider token system** — not static CSS or hardcoded values. The approach:

- **`ConfigProvider`** wraps the app and provides the `theme` prop to all Ant Design components.
- **`theme.darkAlgorithm`** is used as the base algorithm (dark UI).
- **Seed Tokens** (e.g. `colorPrimary`, `borderRadius`, `fontFamily`) are set once and cascade into Map Tokens and Alias Tokens automatically.
- **Component Tokens** override individual component styles (e.g. `Table`, `Button`, `Drawer`) without affecting others.
- **Nested `ConfigProvider`** can apply local theme overrides to specific sections of the UI.
- **`useToken` hook** is used when custom components need to consume the current theme tokens.
- Refer to `index.css` for any Tailwind-level overrides that sit alongside the token system.

When building or adjusting the theme, define tokens in the ConfigProvider config — do not write raw color values or spacing in component CSS.

## Design-to-code workflow

1. Designer reads the package docs (stack, features).
2. Designer requests mock data from engineering for the target feature.
3. Designer runs Figma MCP prompts in Cursor, referencing the package files and mock data.
4. Designer annotates frames with route names, data fields, and component names.
5. Engineering maps annotated Figma frames to existing (or new) React components, applies theming via ConfigProvider tokens, and swaps mock data for real API calls.


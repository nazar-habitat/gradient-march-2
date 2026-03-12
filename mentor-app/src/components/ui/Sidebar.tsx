import type React from 'react';

/** Single nav item: key, label, icon, and optional path (defaults to #). */
export interface SidebarNavItem {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path?: string;
}

/** Section with optional label (shown when expanded) and items. */
export interface SidebarSection {
  label?: string;
  items: SidebarNavItem[];
}

export interface SidebarProps {
  /** Sections with optional labels and items. */
  sections: SidebarSection[];
  /** Active item key (for highlight). Pass the current route key from your router. */
  activeKey?: string;
  /** Logo when collapsed (e.g. "G"). Shown by default; swapped on hover via CSS. */
  logoCollapsed?: React.ReactNode;
  /** Logo when expanded / on hover (e.g. "gradient"). */
  logoExpanded?: React.ReactNode;
  /** Optional class for the sidebar wrapper. */
  className?: string;
}

const SIDEBAR_WIDTH_COLLAPSED = 96;
const SIDEBAR_WIDTH_EXPANDED = 256;

/** Figma 19-11179: Menu item — 40px height, 12px radius, 8px padding, 24px icon, 14px medium text. */
const MENU_ICON_SIZE_PX = 24;

/** Menu item: 40px icon slot (fixed so icon doesn’t move), then label revealed on sidebar hover. */
function SidebarMenuItem({
  item,
  isActive,
  path,
}: {
  item: SidebarNavItem;
  isActive: boolean;
  path: string;
}) {
  const Icon = item.icon;
  const base =
    'sidebar-nav-item flex items-center h-10 w-full gap-3 rounded-[12px] transition-colors outline-none';
  const state = isActive
    ? 'bg-[var(--color-primary,#5452f5)] text-white'
    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white';

  return (
    <a
      href={path}
      className={`${base} ${state} ${isActive ? 'active' : ''}`}
      data-active={isActive || undefined}
    >
      <span className="sidebar-icon-slot flex shrink-0 items-center justify-center size-10 rounded-[12px] text-current">
        <span
          className="icon-wrapper flex shrink-0 items-center justify-center text-current [&_svg]:size-full [&_svg]:shrink-0 [&_svg]:block"
          style={{ width: MENU_ICON_SIZE_PX, height: MENU_ICON_SIZE_PX }}
        >
          <Icon className="size-full shrink-0" />
        </span>
      </span>
      <span className="text-node text-sm font-medium leading-6 min-w-0 truncate text-current">
        {item.label}
      </span>
    </a>
  );
}

/** Sidebar: collapsed (96px) by default, expands on hover (256px). Icons stay fixed; labels/sections reveal via CSS. */
export default function Sidebar({
  sections,
  activeKey,
  logoCollapsed = (
    <span className="text-white font-medium text-xl">G</span>
  ),
  logoExpanded = (
    <span className="font-semibold text-xl text-white whitespace-nowrap">
      gradient
    </span>
  ),
  className,
}: SidebarProps) {
  const safeSections = sections ?? [];

  return (
    <aside
      className={`sidebar flex flex-col shrink-0 overflow-hidden border-r border-neutral-900 bg-black ${className ?? ''}`.trim()}
      style={{ minHeight: '100vh' }}
    >
      <div className="flex flex-col h-full py-5 px-7 min-w-0">
        {/* Logo: .logo by default, .logo-f on hover (index.css) */}
        <div className="flex items-center justify-center h-10 w-full shrink-0 mb-5 relative min-h-10">
          <div className="logo absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-150">
            {logoCollapsed}
          </div>
          <div className="logo-f absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150">
            {logoExpanded}
          </div>
        </div>

        {/* Nav: 40px icon column (fixed); labels/section titles reveal on .sidebar:hover */}
        <nav className="flex flex-1 flex-col gap-5 w-full min-w-0">
          {safeSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-2 w-full min-w-0">
              {section.label && (
                <div className="sidebar-section-label py-1">
                  <p className="text-xs font-semibold leading-4 text-neutral-600">
                    {section.label}
                  </p>
                </div>
              )}
              {(section.items ?? []).map((item) => {
                const isActive =
                  activeKey !== undefined ? activeKey === item.key : false;
                const path = item.path ?? '#';
                return (
                  <SidebarMenuItem
                    key={item.key}
                    item={item}
                    isActive={isActive}
                    path={path}
                  />
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export const SIDEBAR_WIDTH_COLLAPSED_PX = SIDEBAR_WIDTH_COLLAPSED;
export const SIDEBAR_WIDTH_EXPANDED_PX = SIDEBAR_WIDTH_EXPANDED;

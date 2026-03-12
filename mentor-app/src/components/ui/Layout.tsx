import type { ComponentProps } from 'react';
import { Layout as AntLayout } from 'antd';
import type { LayoutProps as AntLayoutProps } from 'antd';

const { Header: AntHeader, Content: AntContent, Sider: AntSider } = AntLayout;

export type LayoutProps = AntLayoutProps;

/** App layout wrapper — forwards to antd Layout for future theme/customisation. */
function Layout({ className, style, ...rest }: LayoutProps) {
  return (
    <AntLayout
      className={className}
      style={style}
      {...rest}
    />
  );
}

export type HeaderProps = ComponentProps<typeof AntHeader>;

function Header({ className, style, ...rest }: HeaderProps) {
  return (
    <AntHeader
      className={className}
      style={style}
      {...rest}
    />
  );
}

export type ContentProps = ComponentProps<typeof AntContent>;

function Content({ className, style, ...rest }: ContentProps) {
  return (
    <AntContent
      className={className}
      style={style}
      {...rest}
    />
  );
}

export type SiderProps = ComponentProps<typeof AntSider>;

function Sider({ className, style, ...rest }: SiderProps) {
  return (
    <AntSider
      className={className}
      style={style}
      {...rest}
    />
  );
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

import React from 'react';
import Meta from './Meta';
import { MetaType } from './Meta';
import '@styles/theme.scss';

type LayoutProps = {
  id?: string;
  children?: React.ReactNode;
  meta?: MetaType;
};

const Layout = (props: LayoutProps) => {
  const {
    id,
    children,
    meta,
  } = props;
  return (
    <>
      <Meta meta={meta} />
      <div id={id}>
        { children }
      </div>
    </>
  );
};

export default Layout;
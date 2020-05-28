import React from 'react';
import Meta from './Meta';
import { MetaType } from './Meta';
import '@styles/theme.scss';
import { Style } from '../types/common';

type LayoutProps = {
  id?: string;
  children?: React.ReactNode;
  meta?: MetaType;
  style?: Style;
};

const Layout = (props: LayoutProps) => {
  const {
    id,
    children,
    meta,
    style,
  } = props;
  return (
    <>
      <Meta meta={meta} />
      <div id={id} style={style}>
        { children }
      </div>
    </>
  );
};

export default Layout;

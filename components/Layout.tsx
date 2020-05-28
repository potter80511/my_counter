import React from 'react';
import Meta from './Meta';
import { MetaType } from './Meta';
import '@styles/theme.scss';
import { Style } from '../types/common';

type LayoutProps = {
  id?: string;
  children?: React.ReactNode;
  meta?: MetaType;
  viewHeight?: number;
};

const Layout = (props: LayoutProps) => {
  const {
    id,
    children,
    meta,
  } = props;
  const viewHeight = props.viewHeight + 'px';
  return (
    <>
      <Meta meta={meta} />
      <div id={id} style={{height: viewHeight}}>
        { children }
      </div>
    </>
  );
};

export default Layout;

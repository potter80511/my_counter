import React, { useEffect, useState } from 'react';
import Meta from './Meta';
import { MetaType } from './Meta';
import '@styles/theme.scss';

type LayoutProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  meta?: MetaType;
};

const Layout = (props: LayoutProps) => {
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  const {
    id,
    className,
    children,
    meta,
  } = props;

  return (
    <>
      <Meta meta={meta} />
      <div
        id={id}
        style={{minHeight: viewHeight}}
        className={className}
      >
        { children }
      </div>
    </>
  );
};

export default Layout;

import React, { useEffect, useState } from 'react';
import MobileMenu from 'src/components/MobileMenu';
import Meta, { MetaType } from 'src/components/Meta';

type LayoutProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  meta?: MetaType;
  minHeight?: boolean;
};

const Layout = (props: LayoutProps) => {
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  const { id, className, children, meta, minHeight = true } = props;

  return (
    <>
      <Meta meta={meta} />
      <MobileMenu />
      <div
        id={id}
        style={{ minHeight: minHeight ? viewHeight : 'unset' }}
        className={className}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

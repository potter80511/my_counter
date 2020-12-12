import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSTransition } from 'react-transition-group';
import '@styles/transition_group.scss';

type IndexLinkProps = {
  className: string;
  url: string;
  icon?: IconProp;
  children?: React.ReactNode;
  tip: string;
  tipColor: string;
};

const IndexLink = (props: IndexLinkProps) => {
  const { className, url, icon, children, tip, tipColor } = props;

  const [showTip, setShowTip] = useState<boolean>(false);
  return (
    <Link href={url}>
      <a
        className={`nav-button flex-center menu-${className}`}
        onMouseOver={() => setShowTip(true)}
        onTouchStart={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onTouchEnd={() => setShowTip(false)}
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {children && children}
        <CSSTransition
          appear
          in={showTip}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <span className="tip" style={{ background: tipColor }}>
            {tip}
            <span
              className="tri"
              style={{
                borderColor: `transparent transparent ${tipColor} transparent`,
              }}
            />
          </span>
        </CSSTransition>
      </a>
    </Link>
  );
};

export default IndexLink;

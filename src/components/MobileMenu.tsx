import React, { useState } from 'react';
import WeatherSvg from 'src/components/icons/WeatherSvg';
import InfinitySvg from 'src/components/icons/InfinitySvg';
import Link from 'next/link';
import { faHome, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

import '@styles/components/MobileMenu.scss';

const MobileMenu = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const onShowList = () => {
    setShowList(!showList);
  };
  return (
    <div id="mobile-menu">
      <CSSTransition
        in={showList}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div className="menu-list-bg" onClick={() => setShowList(false)} />
      </CSSTransition>
      <button className="menu-bars" onClick={onShowList} type="button">
        Menu
      </button>
      <CSSTransition
        in={showList}
        classNames="show-list"
        timeout={300}
        unmountOnExit
      >
        <div className="menu-list">
          <div className="items">
            <Link href="/">
              <a className="menu-home flex-center">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </Link>
            <Link href="/counter">
              <a className="menu-counter flex-center">
                <FontAwesomeIcon icon={faStopwatch} />
              </a>
            </Link>
            <Link href="/weather">
              <a className="menu-weather flex-center">
                <WeatherSvg />
              </a>
            </Link>
            <Link href="/metronome">
              <a className="menu-metronome flex-center">
                <InfinitySvg />
              </a>
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MobileMenu;

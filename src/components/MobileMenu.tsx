import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  faBars,
  faHome,
  faCloudSun,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
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
        <div className="menu-list-bg" onClick={() => setShowList(false)}></div>
      </CSSTransition>
      <button className="menu-bars" onClick={onShowList}>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92.84 70.96"
                >
                  <g id="圖層_2" data-name="圖層 2">
                    <g id="Icons">
                      <path
                        fill="#fff"
                        d="M72.84,71H13.24A13.37,13.37,0,0,1,0,58.22H0V58a4.89,4.89,0,0,1,0-.54A13.34,13.34,0,0,1,10.47,44.19l.11,0A1.53,1.53,0,0,0,11.75,43l0-.14A23.81,23.81,0,0,1,32.16,23.19h0A23,23,0,0,1,34.83,23,23.45,23.45,0,0,1,55,34.77l.06.11a1.53,1.53,0,0,0,1.77.68h0a10.63,10.63,0,0,1,2.42-.5,11.16,11.16,0,0,1,11.82,8.8l.1.31a1.53,1.53,0,0,0,1.43,1h.25a12.89,12.89,0,0,1,0,25.78Z"
                      />
                      <path
                        fill="#fc0"
                        d="M58.19,10A2.51,2.51,0,0,1,55.7,7.66l-.38-5a2.5,2.5,0,1,1,5-.38l.39,5A2.5,2.5,0,0,1,58.39,10Z"
                      />
                      <path
                        fill="#fc0"
                        d="M43.34,16.1a2.5,2.5,0,0,1-1.91-.87l-3.23-3.8A2.5,2.5,0,0,1,42,8.19L45.24,12a2.49,2.49,0,0,1-1.9,4.12Z"
                      />
                      <path
                        fill="#fc0"
                        d="M90.34,43.17a2.44,2.44,0,0,1-.59-.07l-4.84-1.17a2.5,2.5,0,0,1,1.17-4.86l4.85,1.17a2.5,2.5,0,0,1-.59,4.93Z"
                      />
                      <path
                        fill="#fc0"
                        d="M84.25,26a2.5,2.5,0,0,1-1-4.81l4.6-1.9a2.5,2.5,0,1,1,1.91,4.62l-4.6,1.91A2.72,2.72,0,0,1,84.25,26Z"
                      />
                      <path
                        fill="#fc0"
                        d="M73.82,13.74a2.47,2.47,0,0,1-1.3-.37,2.5,2.5,0,0,1-.83-3.44L74.3,5.68A2.5,2.5,0,1,1,78.56,8.3L76,12.55A2.54,2.54,0,0,1,73.82,13.74Z"
                      />
                      <path
                        fill="#fc0"
                        d="M60.17,32a11.57,11.57,0,0,0-1.17,0c-.36,0-.71.07-1.08.13a1.38,1.38,0,0,1-1.38-.61,26.74,26.74,0,0,0-8.47-7.91,1.3,1.3,0,0,1-.29-2A17,17,0,0,1,61.2,16.32c7.6.41,14,5.26,15.55,12.7.84,3.87-.43,8.86-2.24,12.17A.79.79,0,0,1,73.06,41C71.78,36.94,68.12,32.17,60.17,32Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MobileMenu;

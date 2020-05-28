import React from 'react';
import {
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/Alert.scss';
import { Transition, animated } from 'react-spring/renderprops.cjs';
import { Style } from '../../types/common';

export interface TimesUpAlertProps {
  id?: string;
  style: Style;
  className?: string;
  show?: boolean;
  message: string;
  yes?(): void;
  onRecount(): void;
}

const TimesUpAlertModal = (props: TimesUpAlertProps) => {
  const className = props.className ? ` ${props.className}` : '';
  const {
    id,
    message,
    style,
    show,
    yes,
    onRecount,
  } = props;
  const showClass = show ? ' show' : '';

  const onYes = () => {
    yes();
  }
  return (
    <>
      <Transition
        native
        items={show}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
      >
        { show => show && (props =>
          <animated.div
            id={id}
            className={`ring-alert-modal${className}${showClass}`}
            style={{...style, ...props}}
          >
            <div className={`modal-block`}>
              <div className="modal-content">
                <p className="message">
                  <FontAwesomeIcon icon={faBell}/>
                  <span>{message}</span>
                </p>
              </div>
              <button className="yes" onClick={onYes}>關閉</button>
              <button className="reset" onClick={onRecount}>重複</button>
            </div>
          </animated.div>
        )}
      </Transition>
    </>
  );
};

export default TimesUpAlertModal;

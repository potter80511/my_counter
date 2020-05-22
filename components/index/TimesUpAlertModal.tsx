import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/Alert.scss';

export interface TimesUpAlertProps {
  id?: string;
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
    { show && (
      <div
        id={id}
        className={`ring-alert-modal${className}${showClass}`}
      >
        <div className={`modal-block`}>
          <div className="modal-content">
            <p className="message">{message}</p>
          </div>
          <button className="yes" onClick={onYes}>關閉</button>
          <button className="reset" onClick={onRecount}>重複</button>
        </div>
      </div>
      )}
    </>
  );
};

export default TimesUpAlertModal;
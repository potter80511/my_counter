import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/Alert.scss';

export type AlertProps = {
  id?: string;
  className?: string;
  show?: boolean;
  message: string;
  yesText?: string;
  onClose?(): void;
}

const Alert = (props: AlertProps) => {
  const className = props.className ? ` ${props.className}` : '';
  const {
    id,
    message,
    show,
    yesText = 'ok',
    onClose,
  } = props;
  const showClass = show ? ' show' : '';
  // const scaleIn = show ? ' scaleIn' : '';
  const onYes = () => {
    onClose();
  }
  return (
    <div
      id={id}
      className={`alert-modal${className}${showClass}`}
    >
      <div className="background" onClick={onClose}></div>
      <div className={`modal-block`}>
        <button className="close" onClick={onClose}><FontAwesomeIcon icon={faTimes}/></button>
        <div className="modal-content">
          <p className="message">{message}</p>
        </div>
        <button className="yes" onClick={onYes}>{yesText}</button>
      </div>
    </div>
  );
};

export default Alert;
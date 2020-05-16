import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/Alert.scss';

type AlertProps = {
  id?: string;
  className?: string;
  message: string;
  yesText?: string;
  onClose(): void;
}

const Alert = (props: AlertProps) => {
  const className = props.className ? ` ${props.className}` : '';
  const {
    id,
    message,
    yesText = 'ok',
    onClose,
  } = props;
  const onYes = () => {
    onClose();
  }
  return (
    <div
      id={id}
      className={`alert-modal${className}`}
    >
      <div className="background" onClick={onClose}></div>
      <div className="modal-block">
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
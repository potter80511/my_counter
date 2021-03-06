import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/components/Alert.scss';
import { useTransition, animated } from 'react-spring';

export type AlertProps = {
  id?: string;
  className?: string;
  viewHeight?: number;
  show?: boolean;
  message: string;
  yesText?: string;
  noText?: string;
  yes?(): void;
  no?(): void;
};

const Alert = (props: AlertProps) => {
  const className = props.className ? ` ${props.className}` : '';
  const {
    id,
    message,
    show,
    yesText = 'ok',
    noText = 'cancel',
    yes,
    no,
  } = props;

  const viewHeight = `${props.viewHeight}px`;

  const onClose = () => {
    no ? no() : yes();
  };

  const onYes = () => {
    yes();
    onClose();
  };
  const fade = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const fadeScale = useTransition(show, null, {
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.7, 0.7)' },
    enter: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
    leave: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.7, 0.7)' },
    config: {
      duration: 300,
    },
  });
  return (
    <>
      {fade.map(
        ({ item, key, props: props2 }) =>
          item && (
            <animated.div
              id={id}
              className={`alert-modal${className}`}
              style={{ height: viewHeight, ...props2 }}
              key={key}
            >
              <div className="background" onClick={onClose} />
              {fadeScale.map(
                ({
                  item: fadeScaleItem,
                  key: fadeScaleKey,
                  props: fadeScaleProps,
                }) =>
                  fadeScaleItem && (
                    <animated.div
                      className="modal-block"
                      style={fadeScaleProps}
                      key={fadeScaleKey}
                    >
                      <button className="close" onClick={onClose} type="button">
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                      <div className="modal-content">
                        <p className="message">{message}</p>
                      </div>
                      <button
                        className="yes"
                        onClick={onYes}
                        style={{ marginRight: no ? 10 : 0 }}
                        type="button"
                      >
                        {yesText}
                      </button>
                      {no && (
                        <button className="no" onClick={onClose} type="button">
                          {noText}
                        </button>
                      )}
                    </animated.div>
                  ),
              )}
            </animated.div>
          ),
      )}
    </>
  );
};

export default Alert;

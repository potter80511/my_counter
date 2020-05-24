import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import '@styles/components/RingToneSelectModal.scss';
import '@styles/transition_group.scss';

type RingToneSelectModalProps = {
  id?: string;
  className?: string;
  show?: boolean;
  yesText?: string;
  yes?(): void;
  onCancel?(): void;
}

const RingToneSelectModal = (props: RingToneSelectModalProps) => {
  const {
    show,
    onCancel,
  } = props;
  return (
    <Transition
      in={show}
      timeout={600}
      unmountOnExit
      className="ring-tone-select-modal"
    >
      <div className="ring-tone-select-modal">
        <CSSTransition
          appear={true}
          in={show}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="background-close"></div>
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={show}
          timeout={600}
          classNames="slideInCenterUp"
          unmountOnExit
        >
          <div className={`modal-block`}>
            <div className="modal-header">
              <button className="close" onClick={onCancel}>取消</button>
              <label>當計時結束</label>
              <button className="set">設定</button>
            </div>
            <div className="modal-content">
              <p className="message"></p>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Transition>
  );
};

export default RingToneSelectModal;
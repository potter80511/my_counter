import React from 'react';
import {
  TimeSignature,
  timeSignatureData,
} from 'src/features/metronome/domain/model/TimeSignature';
import { Transition, CSSTransition } from 'react-transition-group';
import '@styles/features/metronome/TempoTypeModal.scss';
import '@styles/transition_group.scss';

type TimeSignatureOptionProp = {
  name: TimeSignature;
  active: boolean;
  onClick: () => void;
};

const TimeSignatureOption = (props: TimeSignatureOptionProp) => {
  const { name, active, onClick } = props;
  const activeClass = active ? ' active' : '';
  return (
    <div className={`item${activeClass}`} onClick={onClick}>
      {name}
    </div>
  );
};

type TempoTypeModalProp = {
  show: boolean;
  currentTimeSignature: TimeSignature;
  onSignatureChange: (signature: TimeSignature) => void;
  closeModal: () => void;
};

const TempoTypeModal = (props: TempoTypeModalProp) => {
  const { show, currentTimeSignature, onSignatureChange, closeModal } = props;

  return (
    <Transition in={show} timeout={600} unmountOnExit>
      <div className="tempo-type-modal">
        <CSSTransition
          appear
          in={show}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="back-drop" onClick={closeModal} />
        </CSSTransition>
        <CSSTransition
          appear
          in={show}
          timeout={600}
          classNames="slideInCenterUp"
          unmountOnExit
        >
          <div className="modal">
            <div className="modal-head">
              <button type="button" onClick={closeModal}>
                取消
              </button>
              <h3>拍號</h3>
            </div>
            <div className="modal-body">
              {timeSignatureData.map(signature => {
                return (
                  <TimeSignatureOption
                    key={signature}
                    name={signature}
                    active={signature === currentTimeSignature}
                    onClick={() => onSignatureChange(signature)}
                  />
                );
              })}
            </div>
          </div>
        </CSSTransition>
      </div>
    </Transition>
  );
};

export default TempoTypeModal;

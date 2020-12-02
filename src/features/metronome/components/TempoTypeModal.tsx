import React from 'react';
import {
  TimeSignature,
  timeSignatureData,
} from 'src/features/metronome/domain/model/TimeSignature';
import '@styles/features/metronome/TempoTypeModal.scss';

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
  currentTimeSignature: TimeSignature;
  onSignatureChange: (signature: TimeSignature) => void;
  closeModal: () => void;
};

const TempoTypeModal = (props: TempoTypeModalProp) => {
  const { currentTimeSignature, onSignatureChange, closeModal } = props;

  return (
    <div className="tempo-type-modal">
      <div className="back-drop" onClick={closeModal} />
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
    </div>
  );
};

export default TempoTypeModal;

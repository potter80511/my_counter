import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import '@styles/components/RingToneSelectModal.scss';
import '@styles/transition_group.scss';
import { RingToneType } from '../../types/ring_tone';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ringTonesData = [
  {
    id: 'warm_morning',
    name: '溫暖早晨',
    url: '/audios/warm_morning.mp3'
  },
  {
    id: 'alarm_clock',
    name: '鬧鈴',
    url: '/audios/alarm_clock.mp3'
  },
  {
    id: 'funny_barking',
    name: '狗叫聲',
    url: '/audios/funny_barking.mp3'
  },
];

type RingToneProps = {
  ringTone: RingToneType;
  isDefault: boolean;
  isSelected: boolean;
  onChoose: (selectedRingTone: RingToneType) => void;
};

const RingTone = (props: RingToneProps) => {
  const {
    ringTone,
    isDefault,
    isSelected,
    onChoose,
  } = props;
  return (
    <div className="item" onClick={() => onChoose(ringTone)}>
      { isSelected && (
        <FontAwesomeIcon icon={faCheck} />
      )}
      <span>
        {ringTone.name}
        { isDefault && ( ' (預設值)' ) }
      </span>
    </div>
  );
};

type RingToneSelectModalProps = {
  show?: boolean;
  currentRingTone: RingToneType;
  onSubmit: (rt: RingToneType) => void;
  onCancel(): void;
}

const RingToneSelectModal = (props: RingToneSelectModalProps) => {
  const {
    currentRingTone,
    show,
    onSubmit,
    onCancel,
  } = props;

  const [tempSelected, setTempSelected] = useState<RingToneType>(currentRingTone);

  const onChoose = (ringTone: RingToneType) => {
    setTempSelected(ringTone);
  };

  const ringTones = ringTonesData.map((item, index) => {
    return (
      <RingTone
        key={'ring_tone_' + index}
        ringTone={item}
        isDefault={index === 0 ? true: false}
        isSelected={item.id === tempSelected.id}
        onChoose={(rt) => onChoose(rt)}
      />
    );
  });
  return (
    <Transition
      in={show}
      timeout={600}
      unmountOnExit
      className="ring-tone-select-modal"
      onExited={() => setTempSelected(currentRingTone)}
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
              <button className="set" onClick={() => onSubmit(tempSelected)}>設定</button>
            </div>
            <div className="modal-content">
              <div className="ring-tones">
                {ringTones}
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Transition>
  );
};

export default RingToneSelectModal;
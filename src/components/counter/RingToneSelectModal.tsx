import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import '@styles/counter/RingToneSelectModal.scss';
import '@styles/transition_group.scss';
import { RingToneType } from 'src/types/ring_tone';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ringTonesData = [
  {
    id: 'warm_morning',
    name: '溫暖早晨',
    url: '/audios/warm_morning.mp3',
  },
  {
    id: 'alarm_clock',
    name: '鬧鈴',
    url: '/audios/alarm_clock.mp3',
  },
  {
    id: 'bohemian_rhapsody',
    name: '波希米亞狂想曲',
    url: '/audios/bohemian_rhapsody.mp3',
  },
  {
    id: 'breaking_bad',
    name: '絕命毒師',
    url: '/audios/breaking_bad.mp3',
  },
  {
    id: 'breaking_bad_theme',
    name: '絕命毒師2',
    url: '/audios/breaking_bad_theme.mp3',
  },
  {
    id: 'jesse_pinkmans_tone',
    name: "Jesse Pinkman's Tone",
    url: '/audios/jesse_pinkmans_tone.mp3',
  },
  {
    id: 'better_call_saul',
    name: 'Better Call Saul',
    url: '/audios/better_call_saul.mp3',
  },
  {
    id: 'westworld_theme',
    name: '西方極樂園',
    url: '/audios/westworld_theme.mp3',
  },
  {
    id: 'westworld_theme_2',
    name: '西方極樂園2',
    url: '/audios/westworld_theme_2.mp3',
  },
  {
    id: 'westworld_theme_3',
    name: '西方極樂園3',
    url: '/audios/westworld_theme_3.mp3',
  },
  {
    id: 'westworld_theme_4',
    name: '西方極樂園4',
    url: '/audios/westworld_theme_4.mp3',
  },
  {
    id: 'westworld_dr_ford',
    name: '西方極樂園 - Dr. Ford',
    url: '/audios/westworld_dr_ford.mp3',
  },
  {
    id: 'show_yourself',
    name: 'Show Yourself',
    url: '/audios/show_yourself.mp3',
  },
  {
    id: 'all_is_found',
    name: 'All is Found',
    url: '/audios/all_is_found.mp3',
  },
  {
    id: 'funny_barking',
    name: '狗叫聲',
    url: '/audios/funny_barking.mp3',
  },
  {
    id: 'mario',
    name: '超級瑪麗',
    url: '/audios/mario.mp3',
  },
];

type RingToneProps = {
  ringTone: RingToneType;
  isDefault: boolean;
  isSelected: boolean;
  onChoose: (selectedRingTone: RingToneType) => void;
};

const RingTone = (props: RingToneProps) => {
  const { ringTone, isDefault, isSelected, onChoose } = props;
  return (
    <div className="item" onClick={() => onChoose(ringTone)}>
      {isSelected && <FontAwesomeIcon icon={faCheck} />}
      <span>
        {ringTone.name}
        {isDefault && ' (預設值)'}
      </span>
    </div>
  );
};

type RingToneSelectModalProps = {
  show?: boolean;
  viewHeight?: number;
  currentRingTone: RingToneType;
  onSubmit: (rt: RingToneType) => void;
  onCancel(): void;
};

const RingToneSelectModal = (props: RingToneSelectModalProps) => {
  const { currentRingTone, show, onSubmit, onCancel } = props;

  const viewHeight = `${props.viewHeight}px`;

  const [tempSelected, setTempSelected] = useState<RingToneType>(
    currentRingTone,
  );

  const onChoose = (ringTone: RingToneType) => {
    setTempSelected(ringTone);
  };

  const ringTones = ringTonesData.map((item, index) => {
    return (
      <RingTone
        key={`ring_tone_${item.id}`}
        ringTone={item}
        isDefault={index === 0}
        isSelected={item.id === tempSelected.id}
        onChoose={rt => onChoose(rt)}
      />
    );
  });
  return (
    <Transition
      in={show}
      timeout={600}
      unmountOnExit
      onExited={() => setTempSelected(currentRingTone)}
    >
      <div className="ring-tone-select-modal" style={{ height: viewHeight }}>
        <CSSTransition
          appear
          in={show}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="background-close" onClick={onCancel} />
        </CSSTransition>
        <CSSTransition
          appear
          in={show}
          timeout={600}
          classNames="slideInCenterUp"
          unmountOnExit
        >
          <div className="modal-block">
            <div className="modal-header">
              <button className="close" type="button" onClick={onCancel}>
                取消
              </button>
              <label>當計時結束</label>
              <button
                className="set"
                type="button"
                onClick={() => onSubmit(tempSelected)}
              >
                設定
              </button>
            </div>
            <div className="modal-content">
              <div className="ring-tones">{ringTones}</div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Transition>
  );
};

export default RingToneSelectModal;

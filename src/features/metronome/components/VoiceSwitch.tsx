import React, { useState } from 'react';
import {
  Voice,
  voiceData,
  VoiceName,
} from 'src/features/metronome/domain/model/Metronome';
import { Sound } from 'src/features/metronome/domain/model/Sound';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isMobile } from 'react-device-detect';

import '@styles/features/metronome/VoiceSwitch.scss';

type VoiceSwitchProp = {
  currentVoice: Voice;
  switchDeg: string;
  sound: Sound;
  onVoiceChange: (name: VoiceName) => void;
  onVoiceNextChange: (name: VoiceName, backWards?: boolean) => void;
};

const VoiceSwitch = (props: VoiceSwitchProp) => {
  const {
    currentVoice,
    switchDeg,
    sound: { next, switch: buttonSwitch },
    onVoiceChange,
    onVoiceNextChange,
  } = props;

  const [onLeft, setOnLeft] = useState<boolean>(false);
  const [onRight, setOnRight] = useState<boolean>(false);

  const onSwitchSound = () => {
    setTimeout(() => {
      buttonSwitch.play();
    }, 200);
  };

  return (
    <div className="voice-switch">
      <label>節拍器聲音</label>
      <div className="arrows">
        <button
          type="button"
          onClick={() => onVoiceNextChange(currentVoice.common, true)}
          className={onLeft ? 'active' : ''}
          onMouseDown={() => {
            if (!isMobile) {
              setOnLeft(true);
              next.play();
            }
          }}
          onMouseUp={() => setOnLeft(false)}
          onTouchStart={() => {
            setOnLeft(true);
            next.play();
          }}
          onTouchEnd={() => setOnLeft(false)}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="left" />
        </button>
        <button
          type="button"
          onClick={() => onVoiceNextChange(currentVoice.common)}
          className={onRight ? 'active' : ''}
          onMouseDown={() => {
            if (!isMobile) {
              setOnRight(true);
              next.play();
            }
          }}
          onMouseUp={() => setOnRight(false)}
          onTouchStart={() => {
            setOnRight(true);
            next.play();
          }}
          onTouchEnd={() => setOnRight(false)}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} className="right" />
        </button>
      </div>
      <div className="switch-group">
        {voiceData.map((g, i) => {
          const { common } = g;
          const activeClass = common === currentVoice.common ? ' active' : '';
          return (
            <div
              key={common}
              className={`graduate graduate${i + 1}${activeClass}`}
              onClick={() => {
                onVoiceChange(common);
                onSwitchSound();
              }}
            >
              <span className="grade-bar" />
              <span className="active-light" />
            </div>
          );
        })}
        <div className="switch">
          <div className="bright" />
          <div className="button-wrap">
            <button
              type="button"
              className="pointer"
              style={{ transform: `rotateZ(${switchDeg})` }}
              onClick={() => {
                onSwitchSound();
                onVoiceNextChange(currentVoice.common);
              }}
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSwitch;

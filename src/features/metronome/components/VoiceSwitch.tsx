import React from 'react';
import {
  Voice,
  voiceData,
  VoiceName,
} from 'src/features/metronome/domain/model/Metronome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@styles/features/metronome/VoiceSwitch.scss';

type VoiceSwitchProp = {
  currentVoice: Voice;
  switchDeg: string;
  onVoiceChange: (name: VoiceName) => void;
  onVoiceNextChange: (name: VoiceName, backWards?: boolean) => void;
};

const VoiceSwitch = (props: VoiceSwitchProp) => {
  const { currentVoice, switchDeg, onVoiceChange, onVoiceNextChange } = props;

  return (
    <div className="voice-switch">
      <label>節拍器聲音</label>
      <div className="arrows">
        <button
          type="button"
          onClick={() => onVoiceNextChange(currentVoice.common, true)}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="left" />
        </button>
        <button
          type="button"
          onClick={() => onVoiceNextChange(currentVoice.common)}
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
              onClick={() => onVoiceChange(common)}
            >
              <span className="grade-bar" />
              <span className="active-light" />
            </div>
          );
        })}
        <div className="switch">
          <div className="bright" />
          <div className="button-wrap">
            <span className="white" />
            <button
              type="button"
              className="pointer"
              style={{ transform: `rotateZ(${switchDeg})` }}
              onClick={() => onVoiceNextChange(currentVoice.common)}
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

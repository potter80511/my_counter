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
  onVoiceChange: (value: VoiceName) => void;
  onVoiceNextChange: (value: VoiceName) => void;
};

const VoiceSwitch = (props: VoiceSwitchProp) => {
  const { currentVoice, switchDeg, onVoiceChange, onVoiceNextChange } = props;

  return (
    <div className="voice-switch">
      <label>節拍器聲音</label>
      <div className="arrows">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="left" />
        <FontAwesomeIcon icon={faAngleDoubleRight} className="right" />
      </div>
      <div className="switch-group">
        {voiceData.map((g, i) => {
          const { common } = g;
          return (
            <span
              key={common}
              className={`graduate graduate${i + 1}`}
              onClick={() => onVoiceChange(common)}
            />
          );
        })}
        <div className="switch">
          <div className="button-wrap">
            <span className="white" />
            <button
              type="button"
              className="pointer"
              style={{ transform: `rotateZ(${switchDeg})` }}
              onClick={() => onVoiceNextChange(currentVoice.common)}
            >
              test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSwitch;
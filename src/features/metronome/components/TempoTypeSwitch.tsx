import React from 'react';
import {
  Voice,
  voiceData,
} from 'src/features/metronome/domain/model/Metronome';

import '@styles/features/metronome/TempoTypeSwitch.scss';

type TempoTypeSwitchProp = {
  currentVoice: Voice;
  switchDeg: string;
  onVoiceChange: (value: string) => void;
  onVoiceNextChange: (value: string) => void;
};

const TempoTypeSwitch = (props: TempoTypeSwitchProp) => {
  const { currentVoice, switchDeg, onVoiceChange, onVoiceNextChange } = props;

  return (
    <div className="tempo-type-switch">
      <label>拍子機聲音</label>
      <div className="switch-group">
        {voiceData.map((g, i) => {
          const { value } = g;
          return (
            <span
              key={value}
              className={`graduate graduate${i + 1}`}
              onClick={() => onVoiceChange(value)}
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
              onClick={() => onVoiceNextChange(currentVoice.value)}
            >
              test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempoTypeSwitch;

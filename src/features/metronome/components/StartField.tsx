import React from 'react';
import { Voice } from 'src/features/metronome/domain/model/Metronome';
import '@styles/features/metronome/StartField.scss';

type StartFieldProp = {
  startStatus: boolean;
  countingTimes: string;
  currentVoice: Voice;
  onStartStop: (status: boolean) => void;
};

const StartField = (props: StartFieldProp) => {
  const { startStatus, countingTimes, currentVoice, onStartStop } = props;

  return (
    <div className="start-field">
      <div className="time-screen">
        <div className="time-block">
          <span>{countingTimes}</span>
          <span className="label">{currentVoice.label}</span>
        </div>
      </div>
      <div className="start-group">
        <div className="start-border">
          <button type="button" onClick={() => onStartStop(!startStatus)}>
            <span className="pattern" />
            <span className="start">{startStatus ? '停止' : '開始'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartField;

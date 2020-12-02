import React from 'react';
import '@styles/features/metronome/StartField.scss';

type StartFieldProp = {
  label?: string;
  startStatus: boolean;
  onStartStop: (status: boolean) => void;
};

const StartField = (props: StartFieldProp) => {
  const { startStatus, onStartStop } = props;
  return (
    <div className="start-field">
      <div className="time-screen">
        <span>00:00</span>
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

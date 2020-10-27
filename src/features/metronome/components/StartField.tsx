import React from 'react';
import '@styles/features/metronome/StartField.scss';

type StartFieldProp = {
  label?: string;
};

const StartField = (props: StartFieldProp) => {
  return (
    <div className="start-field">
      <div className="time-screen">
        <span>00:00</span>
      </div>
      <div className="start-group">
        <div className="start-border">
          <button type="button">
            <span className="pattern" />
            <span className="start">開始</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartField;

import React from 'react';
import '@styles/features/metronome/Screen.scss';

const Screen = () => {
  return (
    <div className="screen">
      <div className="screen-inner">
        <div className="screen-head">
          <div className="tempo-group">
            <span className="tempo">拍子</span>
            <span className="play-status stop" />
          </div>
          <div className="time-signature">
            <span>4/4</span>
          </div>
          <div className="speed-group">
            <span className="speed-name">Andante</span>
            <span className="speed">108</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;

import React from 'react';
import '@styles/features/metronome/Screen.scss';

const Screen = () => {
  return (
    <div className="screen">
      <div className="screen-inner">
        <div className="screen-head">
          <div className="tempo">
            <span>拍子</span>
            <span className="square" />
          </div>
          <div className="time-signature">
            <span>4/4</span>
          </div>
          <span className="">Andante</span>
        </div>
      </div>
    </div>
  );
};

export default Screen;

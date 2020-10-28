import React from 'react';
import '@styles/features/metronome/Screen.scss';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';

type ScreenProp = Metronome;

const Screen = (props: ScreenProp) => {
  const { timeSignature, speed } = props;

  return (
    <div className="screen">
      <div className="screen-inner">
        <div className="screen-head">
          <div className="tempo-group">
            <span className="tempo">拍子</span>
            <span className="play-status stop" />
          </div>
          <div className="time-signature">
            <span>{timeSignature}</span>
          </div>
          <div className="speed-group">
            <span className="speed-name">Andante</span>
            <span className="speed">{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;

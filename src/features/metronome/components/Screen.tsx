import React from 'react';
import '@styles/features/metronome/Screen.scss';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';

type ScreenProp = Metronome & {
  startStatus: boolean;
  beatNumber: number;
  speedExpression: SpeedExpression;
};

const Screen = (props: ScreenProp) => {
  const {
    startStatus,
    timeSignature,
    beatNumber,
    speed,
    speedExpression,
  } = props;

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
            {startStatus && <span>{beatNumber}</span>}
          </div>
          <div className="speed-group">
            <span className="speed-name">{speedExpression}</span>
            <span className="speed">{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;

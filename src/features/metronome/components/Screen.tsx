import React from 'react';
import '@styles/features/metronome/Screen.scss';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';

type ScreenProp = Metronome & {
  startStatus: boolean;
  beatNumber: number;
  speedExpression: SpeedExpression;
  errorMessages: string;
  onSpeedChange: (newSpeed: string) => void;
  onSpeedCheck: (newSpeed: string) => void;
};

const Screen = (props: ScreenProp) => {
  const {
    startStatus,
    timeSignature,
    beatNumber,
    speed,
    speedExpression,
    errorMessages,
    onSpeedChange,
    onSpeedCheck,
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
            <span className="speed">
              <input
                value={speed}
                onChange={({ currentTarget }) =>
                  onSpeedChange(currentTarget.value)
                }
                onBlur={({ currentTarget }) =>
                  onSpeedCheck(currentTarget.value)
                }
              />
              {errorMessages && (
                <span className="error-messages">{errorMessages}</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;

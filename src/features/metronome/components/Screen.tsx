import React from 'react';
import '@styles/features/metronome/Screen.scss';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';

type ScreenProp = Metronome & {
  startStatus: boolean;
  beatNumber: number;
  perBeatSeconds: number;
  maxBeatNumber: number;
  speedExpression: SpeedExpression;
  errorMessages: string;
  onShowTempoTypeModal: () => void;
  onSpeedChange: (newSpeed: string) => void;
  onSpeedCheck: (newSpeed: string) => void;
};

const Screen = (props: ScreenProp) => {
  const {
    startStatus,
    timeSignature,
    beatNumber,
    perBeatSeconds,
    maxBeatNumber,
    speed,
    speedExpression,
    errorMessages,
    onShowTempoTypeModal,
    onSpeedChange,
    onSpeedCheck,
  } = props;

  const statusClass = startStatus ? ' start' : ' stop';
  const blueActiveClass = startStatus && beatNumber > 0 ? ' active' : '';
  const greenActiveClass = beatNumber === 1 ? ' active' : '';

  const barArray = Array.from(Array(maxBeatNumber).keys());

  return (
    <div className="screen">
      <div className="screen-inner">
        <div className="screen-head">
          <div className="tempo-group">
            <span className="tempo">拍子</span>
            <span className={`play-status${statusClass}`} />
          </div>
          <div className="time-signature">
            <span className="signature" onClick={onShowTempoTypeModal}>
              <span>{timeSignature}</span>
            </span>
            <span className="beat-number">
              {startStatus ? (
                <>{beatNumber}</>
              ) : (
                <span className="please-choose">
                  點擊
                  <br />
                  選定拍號
                </span>
              )}
            </span>
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
        <div className="beating-lights">
          <div
            className={`left-light${blueActiveClass}`}
            style={{
              animationDuration: `${String(perBeatSeconds)}ms`,
            }}
          />
          <div className="lights">
            {barArray.map(barIndex => {
              const currentBar = barIndex + 1;
              const barActiveClass =
                startStatus && currentBar <= beatNumber ? ' active' : '';
              return (
                <div
                  key={`bar-${barIndex}`}
                  className={`bar${barActiveClass}`}
                />
              );
            })}
          </div>
          <div
            className={`right-light${greenActiveClass}`}
            style={{ animationDuration: `${String(perBeatSeconds)}ms` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;

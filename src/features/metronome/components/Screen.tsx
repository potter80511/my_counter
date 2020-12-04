import React, { useEffect } from 'react';
import '@styles/features/metronome/Screen.scss';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';

import { actions as beatingActions } from 'src/features/metronome/slices/beatingSlice';
import { blueLightActiveSelector } from 'src/features/metronome/selectors';
import { useSelector, useDispatch } from 'react-redux';

const commonLightLong = 400;

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
  const dispatch = useDispatch();

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
  const blueLightActive = useSelector(blueLightActiveSelector);
  const blueActiveClass = blueLightActive ? ' active' : '';
  const greenActiveClass = beatNumber === 1 ? ' active' : '';

  const barArray = Array.from(Array(maxBeatNumber).keys());

  useEffect(() => {
    if (startStatus && perBeatSeconds >= commonLightLong) {
      setTimeout(() => {
        dispatch(beatingActions.setBlueLightActive(false));
      }, commonLightLong);
    }
  }, [startStatus, beatNumber]);

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
              animationName: !startStatus ? 'none' : '',
              animationIterationCount:
                perBeatSeconds < commonLightLong ? 'infinite' : 'forwards',
              animationDuration:
                perBeatSeconds < commonLightLong
                  ? `${String(perBeatSeconds)}ms`
                  : `${commonLightLong}ms`,
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
            style={{
              animationDuration: `${commonLightLong}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;

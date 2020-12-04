import React, { useEffect } from 'react';
import Screen from 'src/features/metronome/components/Screen';
import AdjustingTool from 'src/features/metronome/components/AdjustingTool';
import TempoTypeSwitch from 'src/features/metronome/components/TempoTypeSwitch';
import TempoTypeModal from 'src/features/metronome/components/TempoTypeModal';
import StartField from 'src/features/metronome/components/StartField';
import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';
import '@styles/features/metronome/Metronome.scss';

import { actions as settingActions } from 'src/features/metronome/slices/settingSlice';
import { actions as beatingActions } from 'src/features/metronome/slices/beatingSlice';
import {
  settingSelector,
  timeSignatureSelector,
  showTempoTypeModalSelector,
  currentTimeSignatureIndexSelector,
  computedTimeSignatureSelector,
  perBeatSecondsSelector,
  beatingNumberSelector,
  beatingStatusSelector,
  speedExpressionSelector,
  countingSecondsSelector,
  countingTimesSelector,
} from 'src/features/metronome/selectors';

import { useSelector, useDispatch } from 'react-redux';

import { Howl, Howler } from 'howler';

let beating;
let counting;

const MetronomeContainer = () => {
  const dispatch = useDispatch();

  const setting = useSelector(settingSelector);
  const timeSignature = useSelector(timeSignatureSelector);
  const showTempoTypeModal = useSelector(showTempoTypeModalSelector);
  const currentTimeSignatureIndex = useSelector(
    currentTimeSignatureIndexSelector,
  );
  const computedTimeSignature = useSelector(computedTimeSignatureSelector);
  const perBeatSeconds = useSelector(perBeatSecondsSelector);

  const maxBeatNumber = computedTimeSignature.beatingPerSignature;
  const beatNumber = useSelector(beatingNumberSelector);
  const startStatus = useSelector(beatingStatusSelector);
  const speedExpression = useSelector(speedExpressionSelector);
  const countingSeconds = useSelector(countingSecondsSelector);
  const countingTimes = useSelector(countingTimesSelector);

  // console.log(beatNumber, 'beat', speedExpression);
  const sounds = {
    common: new Howl({
      src: ['/audios/metronome/click.mp3'],
    }),
    ding: new Howl({
      src: ['/audios/metronome/ding.mp3'],
    }),
  };

  let tempBeatNumber = beatNumber;

  const beater = () => {
    dispatch(beatingActions.setBlueLightActive(true));
    if (tempBeatNumber === maxBeatNumber) {
      sounds.ding.play();
      tempBeatNumber = 1;
    } else {
      sounds.common.play();
      tempBeatNumber += 1;
    }
    dispatch(beatingActions.beat(tempBeatNumber));
  };

  let tempSeconds = countingSeconds;

  const counter = () => {
    tempSeconds += 1;
    dispatch(beatingActions.countingTime(tempSeconds));
  };

  const onStartStop = (status: boolean) => {
    if (status) {
      sounds.ding.play();
      dispatch(beatingActions.setBlueLightActive(true));

      if (tempBeatNumber === maxBeatNumber) {
        tempBeatNumber = 1;
        dispatch(beatingActions.beat(tempBeatNumber));
      }
      beating = setInterval(beater, perBeatSeconds);

      // 秒數計時
      dispatch(beatingActions.countingTime(0)); // 剛點開始要reset為0
      tempSeconds = 0; // 剛點開始要reset為0
      counting = setInterval(counter, 1000);
    } else {
      Howler.stop();
      dispatch(beatingActions.beat(maxBeatNumber));
      clearInterval(beating);
      clearInterval(counting);
    }
    dispatch(beatingActions.statusChanged(status));
  };

  const closeModal = () => dispatch(settingActions.onShowTempoTypeModal(false));

  useEffect(() => {
    dispatch(beatingActions.beat(maxBeatNumber));
  }, [maxBeatNumber]);

  useEffect(() => {
    onStartStop(false);
  }, [setting]);

  return (
    <div className="metronome">
      <div className="metronome-head">
        <Screen
          startStatus={startStatus}
          beatNumber={beatNumber}
          perBeatSeconds={perBeatSeconds}
          maxBeatNumber={maxBeatNumber}
          timeSignature={timeSignature}
          speed={setting.speed}
          speedExpression={speedExpression}
          errorMessages={setting.errorMessages}
          onShowTempoTypeModal={() =>
            dispatch(settingActions.onShowTempoTypeModal(true))
          }
          onSpeedChange={newValue =>
            dispatch(settingActions.update({ speed: newValue }))
          }
          onSpeedCheck={newValue =>
            dispatch(settingActions.onBlurChecked(newValue))
          }
          onInputFucus={() => onStartStop(false)}
        />
        <TempoTypeModal
          show={showTempoTypeModal}
          currentTimeSignature={timeSignature}
          onSignatureChange={(signature: TimeSignature) => {
            dispatch(settingActions.timeSignatureChange(signature));
            closeModal();
          }}
          closeModal={closeModal}
        />
      </div>
      <div className="metronome-body">
        <div className="adjusting-tools">
          <AdjustingTool
            label="速度"
            currentValue={setting.speed}
            onClick={newValue => {
              dispatch(settingActions.update({ speed: String(newValue) }));
              dispatch(settingActions.onBlurChecked(String(newValue)));
            }}
          />
          <AdjustingTool
            label="拍子"
            currentValue={currentTimeSignatureIndex}
            onClick={newValue =>
              dispatch(settingActions.adjustedTimeSignature(newValue))
            }
          />
        </div>
        <div className="other-tools">
          <TempoTypeSwitch />
          <StartField
            startStatus={startStatus}
            countingTimes={countingTimes}
            onStartStop={onStartStop}
          />
        </div>
      </div>
    </div>
  );
};

export default MetronomeContainer;

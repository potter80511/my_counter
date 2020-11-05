import React, { useState } from 'react';
import Screen from 'src/features/metronome/components/Screen';
import AdjustingTool from 'src/features/metronome/components/AdjustingTool';
import TempoTypeSwitch from 'src/features/metronome/components/TempoTypeSwitch';
import StartField from 'src/features/metronome/components/StartField';
import '@styles/features/metronome/metronome.scss';

import { actions as settingActions } from 'src/features/metronome/slices/settingSlice';
import { settingSelector } from 'src/features/metronome/selectors';

import { useSelector, useDispatch } from 'react-redux';

let beating;

const MetronomeContainer = () => {
  const dispatch = useDispatch();
  const setting = useSelector(settingSelector);

  const [beatNumber, setBeatNumber] = useState<number>(4);
  const [startStatus, setStartStatus] = useState<boolean>(false);

  const maxBeatNumber = 4;
  console.log(beatNumber, 'beat');

  const click = (newValue: number) => {
    console.log(newValue);
  };

  let tempBeatNumber = beatNumber;

  const counter = () => {
    if (tempBeatNumber === maxBeatNumber) {
      tempBeatNumber = 1;
    } else {
      tempBeatNumber += 1;
    }
    setBeatNumber(tempBeatNumber);
  };

  const onStartStop = (status: boolean) => {
    if (status) {
      if (tempBeatNumber === maxBeatNumber) {
        tempBeatNumber = 1;
        setBeatNumber(tempBeatNumber);
      }
      beating = setInterval(counter, 1000);
    } else {
      clearInterval(beating);
    }
    setStartStatus(status);
  };

  return (
    <div className="metronome">
      <div className="metronome-head">
        <Screen
          startStatus={startStatus}
          beatNumber={beatNumber}
          timeSignature={setting.timeSignature}
          speed={setting.speed}
        />
      </div>
      <div className="metronome-body">
        <div className="adjusting-tools">
          <AdjustingTool
            label="速度"
            minValue={30}
            maxValue={240}
            currentValue={setting.speed}
            onClick={newValue =>
              dispatch(settingActions.update({ speed: newValue }))
            }
          />
          <AdjustingTool
            label="拍子"
            minValue={1}
            maxValue={4}
            currentValue={1}
            onClick={newValue => click(newValue)}
          />
        </div>
        <div className="other-tools">
          <TempoTypeSwitch />
          <StartField startStatus={startStatus} onStartStop={onStartStop} />
        </div>
      </div>
    </div>
  );
};

export default MetronomeContainer;

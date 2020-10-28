import React from 'react';
import Screen from 'src/features/metronome/components/Screen';
import AdjustingTool from 'src/features/metronome/components/AdjustingTool';
import TempoTypeSwitch from 'src/features/metronome/components/TempoTypeSwitch';
import StartField from 'src/features/metronome/components/StartField';
import '@styles/features/metronome/metronome.scss';

import { actions as settingActions } from 'src/features/metronome/slices/settingSlice';
import { settingSelector } from 'src/features/metronome/selectors';

import { useSelector, useDispatch } from 'react-redux';

const MetronomeContainer = () => {
  const dispatch = useDispatch();
  const setting = useSelector(settingSelector);

  const click = (newValue: number) => {
    console.log(newValue);
  };
  return (
    <div className="metronome">
      <div className="metronome-head">
        <Screen timeSignature={setting.timeSignature} speed={setting.speed} />
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
          <StartField />
        </div>
      </div>
    </div>
  );
};

export default MetronomeContainer;

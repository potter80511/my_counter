import React from 'react';
import Screen from 'src/features/metronome/components/Screen';
import AdjustingTool from 'src/features/metronome/components/AdjustingTool';
import TempoTypeSwitch from 'src/features/metronome/components/TempoTypeSwitch';
import StartField from 'src/features/metronome/components/StartField';
import '@styles/features/metronome/metronome.scss';

const MetronomeContainer = () => {
  return (
    <div className="metronome">
      <div className="metronome-head">
        <Screen />
      </div>
      <div className="metronome-body">
        <div className="adjusting-tools">
          <AdjustingTool label="速度" />
          <AdjustingTool label="拍子" />
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

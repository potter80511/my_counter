import React from 'react';
import '@styles/features/metronome/TempoTypeSwitch.scss';

type TempoTypeSwitchProp = {
  label?: string;
};

const TempoTypeSwitch = (props: TempoTypeSwitchProp) => {
  const { label } = props;

  return (
    <div className="tempo-type-switch">
      <label>拍子機聲音</label>
      <div className="switch-group">
        <div className="switch">
          <button type="button">－</button>
        </div>
      </div>
    </div>
  );
};

export default TempoTypeSwitch;

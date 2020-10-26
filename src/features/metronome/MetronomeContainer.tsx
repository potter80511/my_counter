import React from 'react';
import Screen from 'src/features/metronome/components/Screen';
import '@styles/features/metronome/metronome.scss';

const MetronomeContainer = () => {
  return (
    <div className="metronome">
      <div className="metronome-head">
        <Screen />
      </div>
    </div>
  );
};

export default MetronomeContainer;

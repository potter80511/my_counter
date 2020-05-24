import React from 'react';
import '@styles/components/RingToneSelector.scss';

type RingToneSelectorProps = {
  onClick?(): void;
}

const RingToneSelector = (props: RingToneSelectorProps) => {
  const { onClick } = props;
  return (
    <div className="ring-tone-selector" onClick={onClick}>
      <label>計時結束鈴聲</label>
      <span>溫暖早晨</span>
    </div>
  );
};

export default RingToneSelector;
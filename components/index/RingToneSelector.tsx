import React from 'react';
import { RingToneType } from '../../types/ring_tone';
import {
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@styles/components/RingToneSelector.scss';

type RingToneSelectorProps = {
  currentRingTone: RingToneType;
  onClick?(): void;
}

const RingToneSelector = (props: RingToneSelectorProps) => {
  const { currentRingTone, onClick } = props;
  return (
    <div className="ring-tone-selector" onClick={onClick}>
      <label>計時結束鈴聲</label>
      <span className="music-name">{currentRingTone.name}<FontAwesomeIcon icon={faChevronRight} /></span>
    </div>
  );
};

export default RingToneSelector;
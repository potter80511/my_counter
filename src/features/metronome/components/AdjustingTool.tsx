import React, { useState, useEffect } from 'react';

import { Sound } from 'src/features/metronome/domain/model/Sound';
import ClickNHold from 'react-click-n-hold';
import '@styles/features/metronome/AdjustingTool.scss';

const pressingTime = 1;

type AdjustingToolProp = {
  label: string;
  currentValue: string | number;
  sound: Sound;
  onClick?: (newValue: number) => void;
};

const AdjustingTool = (props: AdjustingToolProp) => {
  const {
    label,
    currentValue,
    sound: { adjust },
    onClick,
  } = props;

  const [longClick, setLongClick] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [temp, setTemp] = useState<boolean>(false);

  const addStart = () => {
    setIsAdding(true);
  };

  const end = () => {
    setLongClick(false);
    setIsAdding(false);
  };

  const clickNHold = () => {
    setLongClick(true);
    setTemp(!temp);
  };

  useEffect(() => {
    if (longClick) {
      if (isAdding) {
        onClick(Number(currentValue) + 1);
      } else {
        onClick(Number(currentValue) - 1);
      }
      adjust.play();
      setTimeout(() => {
        setTemp(!temp);
      }, 100);
    }
  }, [temp]);

  const click = (newValue: number) => {
    adjust.play();
    onClick(newValue);
  };

  return (
    <div className="adjusting-tool">
      <label>{label}</label>
      <div className="tool-buttons">
        <ClickNHold
          time={pressingTime}
          onStart={addStart}
          onClickNHold={clickNHold}
          onEnd={end}
        >
          <button
            type="button"
            className="add"
            onClick={() => click(Number(currentValue) + 1)}
          >
            <span />
          </button>
        </ClickNHold>
        <ClickNHold time={pressingTime} onClickNHold={clickNHold} onEnd={end}>
          <button
            type="button"
            className="reduce"
            onClick={() => click(Number(currentValue) - 1)}
          >
            <span />
          </button>
        </ClickNHold>
      </div>
    </div>
  );
};

export default AdjustingTool;
